import { DAY_TYPE } from '~/api/utils';

export const TOKEN_KEY = 'token';

const DAY_TYPE_TITLE_MAP: Record<DAY_TYPE, string> = {
  [DAY_TYPE.READ]: 'Read',
  [DAY_TYPE.WRITE]: 'Write',
  [DAY_TYPE.LISTEN]: 'Listen',
  [DAY_TYPE.ADDVERBS]: 'Adverbs Sentence',
  [DAY_TYPE.SENTENCE_READ]: 'Sentence Read',
  [DAY_TYPE.SENTENCE_WRITE_PAST]: 'Sentence Write Past',
  [DAY_TYPE.SENTENCE_WRITE_PRESENT]: 'Sentence Write Present',
  [DAY_TYPE.SENTENCE_WRITE_FUTURE]: 'Sentence write future',
  [DAY_TYPE.REMEMBER_ONE]: 'Remember One',
  [DAY_TYPE.REMEMBER_TWO]: 'Remember two',
  [DAY_TYPE.REMEMBER_THREE]: 'Remember three',
  [DAY_TYPE.REMEMBER_FOUR]: 'Remember four',
};

export { DAY_TYPE_TITLE_MAP };
