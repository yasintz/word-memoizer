import { objectKeys } from '~/utils';
import { WORD_DAY_TYPE, GRAMMER_DAY_TYPE } from '../utils';
import { WordRelation, GetWordRelationsQueryResult, Brain, Word, GrammerByDate } from '~/helpers';

export function brainArrayParser(data: Brain[]) {
  const result = {};
  data.forEach(item => {
    objectKeys(WORD_DAY_TYPE).forEach(type => {
      if (item.id.indexOf(type) === 0) {
        result[WORD_DAY_TYPE[type]] = item.wordIds;
      }
    });
  });

  return result as Record<WORD_DAY_TYPE, any>;
}

export function grammerByDateArrayParser(data: GrammerByDate[]) {
  const result = {};
  data.forEach(item => {
    objectKeys(GRAMMER_DAY_TYPE).forEach(type => {
      if (item.id.indexOf(type) === 0) {
        result[GRAMMER_DAY_TYPE[type]] = item.grammerId;
      }
    });
  });

  return result as Record<GRAMMER_DAY_TYPE, string>;
}

export function getWordRelationsResultHandler(relations: WordRelation, data: Word[]): GetWordRelationsQueryResult {
  return {
    oppositeMeaningWordIds: relations.oppositeMeaningWordIds.map(id => data.find(item => item.id === id)),
    synonymWordIds: relations.synonymWordIds.map(id => data.find(item => item.id === id)),
  };
}
