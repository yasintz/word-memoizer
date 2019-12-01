export interface Popup<O = undefined> {
  isShown: boolean;
  show: O extends undefined ? (options?: O) => void : (options: O) => void;
  hide: () => void;
  params: O;
}

export interface PopupContextType {}
