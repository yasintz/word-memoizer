import axios from 'axios';
import { makeid } from '~/utils';
import { DATABASE_URL } from './constants';
import { WORD_DAY_TYPE, getKeyByType, addDays } from './utils';
import { getWordSchema, getTodayBrainWordsSchema } from './schemas';

interface Mutations {
  addWord: (s: { word: string }) => Promise<any>;
  registerWords: (s: { wordIds: string[] }) => Promise<any>;
  addWordImageLink: (s: { wordId: string; imageLink: string }) => Promise<any>;
  addWordLink: (s: { wordId: string; link: { link: string; title: string } }) => Promise<any>;
  addWordRelation: (s: { wordId: string; relationWordId: string; type: 'opposite' | 'synonym' }) => Promise<any>;
}

const mutations: Mutations = {
  addWordRelation: ({ relationWordId: realtionWordId, type, wordId }) => {
    return axios
      .put(
        DATABASE_URL,
        {
          data: realtionWordId,
        },
        {
          params: {
            action: 'push',
            path: `words[id=${wordId}].detail.relations.${
              type === 'opposite' ? 'oppositeMeaningWordIds' : 'synonymWordIds'
            }`,
            schema: getWordSchema(wordId),
          },
        },
      )
      .then(i => i.data.result);
  },
  addWordImageLink: ({ imageLink, wordId }) => {
    return axios
      .put(
        DATABASE_URL,
        {
          data: imageLink,
        },
        {
          params: {
            action: 'push',
            path: `words[id=${wordId}].detail.images`,
            schema: getWordSchema(wordId),
          },
        },
      )
      .then(i => i.data.result);
  },
  addWordLink: ({ link, wordId }) => {
    return axios
      .put(
        DATABASE_URL,
        {
          data: link,
        },
        {
          params: {
            action: 'push',
            path: `words[id=${wordId}].detail.links`,
            schema: getWordSchema(wordId),
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
          data: { id: wordId, text: word },
        },
        {
          params: {
            action: 'push',
            path: 'words',
          },
        },
      )
      .then(({ data }) => data);
  },
  registerWords: async ({ wordIds }) => {
    const putData = [];
    [
      WORD_DAY_TYPE.READ,
      WORD_DAY_TYPE.WRITE,
      WORD_DAY_TYPE.LISTEN,
      WORD_DAY_TYPE.ADDVERBS,
      WORD_DAY_TYPE.SENTENCE_READ,
      WORD_DAY_TYPE.SENTENCE_WRITE_PAST,
      WORD_DAY_TYPE.SENTENCE_WRITE_PRESENT,
      WORD_DAY_TYPE.SENTENCE_WRITE_FUTURE,
    ].forEach((dayType, index) => {
      putData.push({ id: getKeyByType(dayType, addDays(index * 2)), wordIds });
    });
    putData.push({
      id: getKeyByType(WORD_DAY_TYPE.REMEMBER_ONE, addDays(30)),
      wordIds,
    });
    putData.push({
      id: getKeyByType(WORD_DAY_TYPE.REMEMBER_TWO, addDays(45)),
      wordIds,
    });
    putData.push({
      id: getKeyByType(WORD_DAY_TYPE.REMEMBER_THREE, addDays(90)),
      wordIds,
    });
    putData.push({
      id: getKeyByType(WORD_DAY_TYPE.REMEMBER_FOUR, addDays(150)),
      wordIds,
    });

    return axios
      .put(
        DATABASE_URL,
        { data: putData },
        {
          params: {
            schema: getTodayBrainWordsSchema,
            action: 'contact',
            path: 'brain',
          },
        },
      )
      .then(({ data }) => data.result);
  },
};

export default mutations;
