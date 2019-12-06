import axios from 'axios';
import { Word, WordRelation, GetWordRelationsQueryResult } from '~/helpers';
import { DAY_TYPE, getKeyByType } from '../utils';
import { DATABASE_URL } from '../constants';
import { getWordSchema, getBrainSchema, getBrainTodayBrainWordsSchema } from '../schemas';
import { getBrainTodayBrainWordsResultHandler, getWordRelationsResultHandler } from './data-parser';

interface Queries {
  getWords: () => Promise<Record<string, Word>>;
  getWord: (s: { id: string }) => Promise<Word>;
  isRegisteredToday: () => Promise<{ registered: boolean }>;
  getBrainTodayBrainWords: () => Promise<Record<DAY_TYPE, string[]>>;
  getAllBrainIds: () => Promise<string[]>;
  getWordRelations: (s: { relations: WordRelation }) => Promise<GetWordRelationsQueryResult>;
}

const queries: Queries = {
  getWordRelations: ({ relations }) => {
    const usedIds = [...relations.oppositeMeaningWordIds, ...relations.synonymWordIds].join(';');
    const schema = `
    WordType{${usedIds};}
    @{
      words: WordType;
      * @getByKey(words);
    } 
    `;

    return axios
      .get(DATABASE_URL, { params: { schema } })
      .then(({ data: { result } }) => getWordRelationsResultHandler(relations, result));
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
  getBrainTodayBrainWords: () => {
    return axios
      .get(DATABASE_URL, {
        params: { schema: getBrainTodayBrainWordsSchema },
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(({ data }) => getBrainTodayBrainWordsResultHandler(data.result));
  },
};

export default queries;
