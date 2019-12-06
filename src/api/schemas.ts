import { objectKeys } from '~/utils';
import { DAY_TYPE, getKeyByType } from './utils';

const keys = objectKeys(DAY_TYPE).map(item => getKeyByType(DAY_TYPE[item]));

const getWordSchema = (id: string) => `
    @{
      words @getByKey(${id}); 
      * @getByKey(words);
    } 
    `;

const getBrainTodayBrainWordsSchema = `
    BrainType{
     ${keys.join(';\n')}; 
    }
    @{
      brain: BrainType;
      * @getByKey(brain);
    } 
    `;

const getBrainSchema = `
   @{
     brain;
     * @getByKey(brain);
   } 
    `;

export { getWordSchema, getBrainTodayBrainWordsSchema, getBrainSchema };
