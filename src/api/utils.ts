import { objectKeys } from '~/utils';

function addDays(days: number, date?: Date) {
  const inlineDate = date ? new Date(date.valueOf()) : new Date();
  inlineDate.setDate(inlineDate.getDate() + days);

  return inlineDate;
}

enum DAY_TYPE {
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

function getKeyByType(type: DAY_TYPE, date?: Date) {
  const inlineDate = date || new Date();
  const day = inlineDate.getDate();
  const month = inlineDate.getMonth() + 1;
  const year = inlineDate.getFullYear();

  return `${type}_${day}_${month}_${year}`;
}
function getAllKeys() {
  return objectKeys(DAY_TYPE).map(key => getKeyByType(DAY_TYPE[key]));
}

export { addDays, getAllKeys, getKeyByType, DAY_TYPE };
