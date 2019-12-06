export type MaybeArray<T> = T | T[];

export interface WordLink {
  link: string;
  title: string;
}

export interface WordRelation {
  oppositeMeaningWordIds: string[];
  synonymWordIds: string[];
}

export interface WordDetail {
  images: string[];
  links: WordLink[];
  relations: WordRelation;
}

export interface Word {
  id: string;
  text: string;
  detail: WordDetail;
}

export interface GetWordRelationsQueryResult {
  oppositeMeaningWordIds: Word[];
  synonymWordIds: Word[];
}
