import { objectKeys } from '~/utils';
import { WORD_DAY_TYPE, getKeyByType, GRAMMER_DAY_TYPE } from './utils';

const BRAINS_KEYS = objectKeys(WORD_DAY_TYPE).map(item => getKeyByType(WORD_DAY_TYPE[item]));
const GRAMMER_KEYS = objectKeys(GRAMMER_DAY_TYPE).map(item => getKeyByType(GRAMMER_DAY_TYPE[item]));

// arrayFilterEqualsByKey
// arrayFindEqualsByKey
const getWordsByIdsWithoutDetailSchema = (ids: string[]) => `
    WordType{
      id;
      text;
    }
    @{
      words:WordType @arrayFilterEqualsByKey(id,${ids.join(',')}); 
      * @getByPath(words);
    } 
 
`;

const getWordsWithoutDetailSchema = `
    WordType{
      id;
      text;
    }
    @{
      words:WordType; 
      * @getByPath(words);
    } 
 
`;

const getWordSchema = (id: string) => `
    @{
      words @arrayFindEqualsByKey(id,${id}); 
      * @getByPath(words);
    } 
    `;

const getGrammerSchema = (id: string) => `
    @{
      grammars @arrayFindEqualsByKey(id,${id}); 
      * @getByPath(grammars);
    } 
    `;

const getTodayBrainWordsSchema = `
    @{
      brain @arrayFilterEqualsByKey(id,${BRAINS_KEYS.join(',')});
      * @getByPath(brain);
    } 
    `;

const getTodayGrammersSchema = `
    @{
     grammarsByDate  @arrayFilterEqualsByKey(id,${GRAMMER_KEYS.join(',')});
      * @getByPath(grammarsByDate);
    } 
 
`;

const getBrainSchema = `
   @{
     brain;
     * @getByPath(brain);
   } 
    `;

export {
  getWordSchema,
  getTodayBrainWordsSchema,
  getBrainSchema,
  getWordsByIdsWithoutDetailSchema,
  getWordsWithoutDetailSchema,
  getTodayGrammersSchema,
  getGrammerSchema,
};
