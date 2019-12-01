type TranlationWord0='common.login';type TranlationWord1='common.create';type TranlationWord2='common.update';type TranlationWord3='common.next';
export type UseTranslationAllKeys=TranlationWord0|TranlationWord1|TranlationWord2|TranlationWord3;

export type UseTranslationFunction=<T extends UseTranslationAllKeys>(str:T,
 variables?:T extends TranlationWord0?never:T extends TranlationWord1?never:T extends TranlationWord2?never:never)=>string
  

export type TransComponentKeys=never;
export interface StaticColorType {
  white: string;
  primaryDark: string;
  primary: string;
}