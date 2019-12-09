import { objectKeys } from '~/utils';

function addDays(days: number, date?: Date) {
  const inlineDate = date ? new Date(date.valueOf()) : new Date();
  inlineDate.setDate(inlineDate.getDate() + days);

  return inlineDate;
}

enum WORD_DAY_TYPE {
  READ = 'READ',
  WRITE = 'WRITE',
  LISTEN = 'LISTEN',
  ADDVERBS = 'ADDVERBS',
  SENTENCE_READ = 'SENTENCE_READ',
  SENTENCE_WRITE_PAST = 'SENTENCE_WRITE_PAST',
  SENTENCE_WRITE_PRESENT = 'SENTENCE_WRITE_PRESENT',
  SENTENCE_WRITE_FUTURE = 'SENTENCE_WRITE_FUTURE',
  REMEMBER_ONE = 'REMEMBER_ONE',
  REMEMBER_TWO = 'REMEMBER_TWO',
  REMEMBER_THREE = 'REMEMBER_THREE',
  REMEMBER_FOUR = 'REMEMBER_FOUR',
}

enum GRAMMER_DAY_TYPE {
  LEARN = 'LEARN',
  REMEMBER_ONE = 'REMEMBER_ONE',
  REMEMBER_TWO = 'REMEMBER_TWO',
  REMEMBER_THREE = 'REMEMBER_THREE',
}

function getKeyByType(type: WORD_DAY_TYPE | GRAMMER_DAY_TYPE, date?: Date) {
  const inlineDate = date || new Date();
  const day = inlineDate.getDate();
  const month = inlineDate.getMonth() + 1;
  const year = inlineDate.getFullYear();

  return `${type}_${day}_${month}_${year}`;
}

function getAllKeys() {
  return objectKeys(WORD_DAY_TYPE).map(key => getKeyByType(WORD_DAY_TYPE[key]));
}

export { addDays, getAllKeys, getKeyByType, WORD_DAY_TYPE, GRAMMER_DAY_TYPE };
