import axios from 'axios';
import { Word, WordRelation, GetWordRelationsQueryResult } from '~/helpers';
import { DAY_TYPE, getKeyByType } from '../utils';
import { DATABASE_URL } from '../constants';
import { getWordSchema, getBrainSchema, getBrainTodayBrainWordsSchema } from '../schemas';
import { getBrainTodayBrainWordsResultHandler, getWordRelationsResultHandler } from './data-parser';
import { objectKeys } from '~/utils';
import { DAY_TYPE_TITLE_MAP } from '~/utils/constants';

interface Queries {
  getWords: () => Promise<Record<string, Word>>;
  getWord: (s: { id: string }) => Promise<Word>;
  isRegisteredToday: () => Promise<{ registered: boolean }>;
  getBrainTodayBrains: () => Promise<Record<DAY_TYPE, string[]>>;
  getAllBrainIds: () => Promise<string[]>;
  getWordRelations: (s: { relations: WordRelation }) => Promise<GetWordRelationsQueryResult>;
  getTodayWords: (s: { brains: Record<DAY_TYPE, string[]> }) => Promise<Array<{ title: string; words: Word[] }>>;
}

const queries: Queries = {
  getTodayWords: async ({ brains }) => {
    const usedWordIds: string[] = [];

    objectKeys(DAY_TYPE).forEach(key => {
      const currentItem = brains[DAY_TYPE[key]];
      if (currentItem) {
        usedWordIds.push(...currentItem);
      }
    });

    const schema = `
    WordType{${usedWordIds.join(';')};}
    @{
      words: WordType;
      * @getByKey(words);
    } 
    `;

    return axios.get(DATABASE_URL, { params: { schema } }).then(({ data: { result } }) => {
      const items: Array<{ title: string; words: Word[] }> = [];
      objectKeys(DAY_TYPE).forEach(key => {
        const currentItem = brains[DAY_TYPE[key]];
        if (currentItem) {
          items.push({ title: DAY_TYPE_TITLE_MAP[DAY_TYPE[key]], words: currentItem.map(item => result[item]) });
        }
      });

      return items;
    });
  },
  getWordRelations: ({ relations }) => {
    const relationsObj = { oppositeMeaningWordIds: [], synonymWordIds: [], ...relations };
    const usedIds = [...relationsObj.oppositeMeaningWordIds, ...relationsObj.synonymWordIds].join(';');
    const schema = `
    WordType{${usedIds};}
    @{
      words: WordType;
      * @getByKey(words);
    } 
    `;

    return axios
      .get(DATABASE_URL, { params: { schema } })
      .then(({ data: { result } }) => getWordRelationsResultHandler(relationsObj, result));
  },
  getWord: ({ id }) => {
    return axios
      .get(DATABASE_URL, {
        params: { schema: getWordSchema(id) },
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(({ data }) => data.result);
  },
  getAllBrainIds: () => {
    return axios.get(DATABASE_URL, { params: { schema: getBrainSchema } }).then(({ data }) => {
      const ids: string[] = [];
      Object.keys(data.result).forEach(key => {
        ids.push(...data.result[key]);
      });

      const result = [];
      new Set(ids).forEach(item => {
        result.push(item);
      });

      return result;
    });
  },
  getWords: () => {
    const schema = `
   @{
      words;
      * @getByKey(words); 
    } 
    `;

    return axios
      .get(DATABASE_URL, {
        params: { schema },
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(({ data }) => data.result);
  },

  isRegisteredToday: () => {
    const schema = `
    @{
      brain @getByKey(${getKeyByType(DAY_TYPE.READ)});
      * @getByKey(brain);
    } 
    `;

    return axios
      .get(DATABASE_URL, {
        params: { schema },
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(({ data }) => ({ registered: Boolean(data.result) }));
  },
  getBrainTodayBrains: () => {
    return axios
      .get(DATABASE_URL, {
        params: { schema: getBrainTodayBrainWordsSchema },
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(({ data }) => {
        const brains = getBrainTodayBrainWordsResultHandler(data.result);

        return brains;
      });
  },
};

export default queries;
