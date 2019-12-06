import axios from 'axios';
import { getKeyByType, DAY_TYPE } from './utils';
import { DATABASE_URL } from './constants';
import { objectKeys } from '~/utils';

export interface Word {
  id: string;
  text: string;
  detail: {
    images: string[];
    links: { link: string; title: string }[];
    relation: {
      oppositeMeaning: string[];
      synonym: string[];
    };
  };
}

const keys = objectKeys(DAY_TYPE).map(item => getKeyByType(DAY_TYPE[item]));

export const getBrainTodayBrainWordsSchema = `
    BrainType{
     ${keys.join(';\n')}; 
    }
    @{
      brain: BrainType;
      * @getByKey(brain);
    } 
    `;

interface Queries {
  getWords: () => Promise<Record<string, Word>>;
  getWord: (s: { id: string }) => Promise<Word>;
  isRegisteredToday: () => Promise<{ registered: boolean }>;
  getBrainTodayBrainWords: () => Promise<Record<DAY_TYPE, string[]>>;
  getAllBrainIds: () => Promise<string[]>;
}

const queries: Queries = {
  getWord: ({ id }) => {
    const schema = `
    @{
      words @getByKey(${id}); 
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
  getAllBrainIds: () => {
    const schema = `
   @{
     brain;
     * @getByKey(brain);
   } 
    `;

    return axios.get(DATABASE_URL, { params: { schema } }).then(({ data }) => {
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
      .then(({ data }) => {
        const result = {};
        Object.keys(data.result).forEach(item => {
          objectKeys(DAY_TYPE).forEach(type => {
            if (item.indexOf(type) === 0) {
              result[DAY_TYPE[type]] = data.result[item];
            }
          });
        });

        return result as Record<DAY_TYPE, any>;
      });
  },
};

export default queries;
