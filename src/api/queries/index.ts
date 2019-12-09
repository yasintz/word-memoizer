import axios from 'axios';
import { Word, WordRelation, GetWordRelationsQueryResult, Brain, GrammerByDate, Grammer } from '~/helpers';
import { WORD_DAY_TYPE, getKeyByType } from '../utils';
import { DATABASE_URL } from '../constants';
import {
  getWordSchema,
  getBrainSchema,
  getTodayBrainWordsSchema,
  getWordsByIdsWithoutDetailSchema,
  getWordsWithoutDetailSchema,
  getTodayGrammersSchema,
  getGrammerSchema,
} from '../schemas';
import { getWordRelationsResultHandler, brainArrayParser } from './data-parser';
import { objectKeys } from '~/utils';
import { BRAIN_DAY_TYPE_TITLE_MAP } from '~/utils/constants';

interface Queries {
  getWords: () => Promise<Word[]>;
  getTodayGrammarsByDate: () => Promise<GrammerByDate[]>;
  getWord: (s: { id: string }) => Promise<Word>;
  getTodayBrains: () => Promise<Brain[]>;
  isRegisteredToday: () => Promise<{ registered: boolean; id: string }>;
  getAllBrainIds: () => Promise<{ id: string; wordIds: string[] }>;
  getWordRelations: (s: { relations: WordRelation }) => Promise<GetWordRelationsQueryResult>;
  getTodayWords: (s: { brains: Brain[] }) => Promise<Array<{ title: string; words: Word[] }>>;
  getGrammerById: (s: { id: string }) => Promise<Grammer>;
}

const queries: Queries = {
  getGrammerById: ({ id }) =>
    axios
      .get(DATABASE_URL, { params: { schema: getGrammerSchema(id), queryName: 'getGrammerById' } })
      .then(({ data }) => data.result),
  getTodayGrammarsByDate: () => {
    return axios
      .get(DATABASE_URL, {
        params: { schema: getTodayGrammersSchema, queryName: 'getTodayGrammers' },
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(({ data }) => (data.result ? data.result : []));
  },
  isRegisteredToday: () => {
    const schema = `
    @{
      brain @arrayFindEqualsByKey(id,${getKeyByType(WORD_DAY_TYPE.READ)});
      * @getByPath(brain);
    } 
    `;

    return axios
      .get(DATABASE_URL, {
        params: { schema, queryName: 'isRegistered' },
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(({ data }) => ({ registered: Boolean(data.result && data.result.id), id: `isRegisteredToday_query` }));
  },
  getTodayWords: async ({ brains }) => {
    const usedWordIds: string[] = [];
    const parsedBrains = brainArrayParser(brains);

    objectKeys(WORD_DAY_TYPE).forEach(key => {
      const currentItem = parsedBrains[WORD_DAY_TYPE[key]];
      if (currentItem) {
        usedWordIds.push(...currentItem);
      }
    });

    const schema = getWordsByIdsWithoutDetailSchema(usedWordIds);

    return axios.get(DATABASE_URL, { params: { schema, queryName: 'getTodayWords' } }).then(({ data: { result } }) => {
      const items: Array<{ title: string; words: Word[]; id: string }> = [];
      objectKeys(WORD_DAY_TYPE).forEach(key => {
        const currentItem = parsedBrains[WORD_DAY_TYPE[key]];
        if (currentItem) {
          items.push({
            title: BRAIN_DAY_TYPE_TITLE_MAP[WORD_DAY_TYPE[key]],
            words: currentItem.map(item => result.find(word => word.id === item)),
            id: `${WORD_DAY_TYPE[key]}_${currentItem.join('_')}_today_brains`,
          });
        }
      });

      return items;
    });
  },
  getWordRelations: ({ relations }) => {
    const relationsObj = { oppositeMeaningWordIds: [], synonymWordIds: [], ...relations };
    const usedIds = [...relationsObj.oppositeMeaningWordIds, ...relationsObj.synonymWordIds];
    const schema = getWordsByIdsWithoutDetailSchema(usedIds);

    return axios
      .get(DATABASE_URL, { params: { schema, queryName: 'getWordRelations' } })
      .then(({ data: { result } }) => getWordRelationsResultHandler(relationsObj, result));
  },
  getWord: ({ id }) => {
    return axios
      .get(DATABASE_URL, {
        params: { schema: getWordSchema(id), queryName: 'getWord' },
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(({ data }) => data.result);
  },
  getAllBrainIds: () => {
    return axios
      .get(DATABASE_URL, { params: { schema: getBrainSchema, queryName: 'getAllBrainIds' } })
      .then(({ data }) => {
        const ids: string[] = [];
        Object.keys(data.result).forEach(key => {
          ids.push(...data.result[key]);
        });

        const result = Array.from(new Set(ids));

        return { id: `${result.join('_')}_getAllBrainds`, wordIds: result };
      });
  },
  getWords: () => {
    const schema = getWordsWithoutDetailSchema;

    return axios
      .get(DATABASE_URL, {
        params: { schema, queryName: 'getWords' },
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(({ data }) => data.result);
  },
  getTodayBrains: () => {
    return axios
      .get(DATABASE_URL, {
        params: { schema: getTodayBrainWordsSchema, queryName: 'getBrainTodayBrains' },
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(({ data }) => data.result);
  },
};

export default queries;
