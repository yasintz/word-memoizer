import { objectKeys } from '~/utils';
import { DAY_TYPE } from '../utils';
import { WordRelation, GetWordRelationsQueryResult } from '~/helpers';

export function getBrainTodayBrainWordsResultHandler(data: any) {
  const result = {};
  Object.keys(data).forEach(item => {
    objectKeys(DAY_TYPE).forEach(type => {
      if (item.indexOf(type) === 0) {
        result[DAY_TYPE[type]] = data[item];
      }
    });
  });

  return result as Record<DAY_TYPE, any>;
}

export function getWordRelationsResultHandler(relations: WordRelation, data: any): GetWordRelationsQueryResult {
  return {
    oppositeMeaningWordIds: relations.oppositeMeaningWordIds.map(id => data[id]),
    synonymWordIds: relations.synonymWordIds.map(id => data[id]),
  };
}
