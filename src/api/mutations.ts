import axios from 'axios';
import { makeid } from '~/utils';
import { DATABASE_URL } from './constants';
import { DAY_TYPE, getKeyByType, addDays } from './utils';
import { getBrainTodayBrainWordsSchema } from './queries';

interface Mutations {
  addWord: (s: { word: string }) => Promise<any>;
  registerWords: (s: { wordIds: string[] }) => Promise<any>;
  updateImageLinks: (s: { wordId: string; imageLinks: string[] }) => Promise<any>;
}

const mutations: Mutations = {
  updateImageLinks: ({ imageLinks, wordId }) => {
    const schema = `
  @{
    words @getByKey(${wordId});
    * @getByKey(words); 
  }
`;

    return axios
      .put(
        DATABASE_URL,
        {
          data: {
            detail: {
              images: imageLinks,
            },
          },
        },
        {
          params: {
            action: 'deep-assign',
            path: `words.${wordId}`,
            schema,
          },
        },
      )
      .then(i => i.data.result);
  },
  addWord: async ({ word }) => {
    const wordId = makeid(9);

    return axios
      .put(
        DATABASE_URL,
        {
          data: { [wordId]: { id: wordId, text: word } },
        },
        {
          params: {
            action: 'assign',
            path: 'words',
          },
        },
      )
      .then(({ data }) => data);
  },
  registerWords: async ({ wordIds }) => {
    const putData = {};
    [
      DAY_TYPE.READ,
      DAY_TYPE.WRITE,
      DAY_TYPE.LISTEN,
      DAY_TYPE.ADDVERBS,
      DAY_TYPE.SENTENCE_READ,
      DAY_TYPE.SENTENCE_WRITE_PAST,
      DAY_TYPE.SENTENCE_WRITE_PRESENT,
      DAY_TYPE.SENTENCE_WRITE_FUTURE,
    ].forEach((dayType, index) => {
      putData[getKeyByType(dayType, addDays(index * 2))] = wordIds;
    });
    putData[getKeyByType(DAY_TYPE.REMEMBER_ONE, addDays(30))] = wordIds;
    putData[getKeyByType(DAY_TYPE.REMEMBER_TWO, addDays(45))] = wordIds;
    putData[getKeyByType(DAY_TYPE.REMEMBER_THREE, addDays(90))] = wordIds;
    putData[getKeyByType(DAY_TYPE.REMEMBER_FOUR, addDays(150))] = wordIds;

    return axios
      .put(
        DATABASE_URL,
        { data: putData },
        {
          params: {
            schema: getBrainTodayBrainWordsSchema,
            action: 'assign',
            path: 'brain',
          },
        },
      )
      .then(({ data }) => data.result);
  },
};

export default mutations;
