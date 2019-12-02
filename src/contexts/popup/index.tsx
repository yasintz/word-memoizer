import * as React from 'react';
import { PopupContext } from './context';
import { PopupsWrapper } from './popups-wrapper';
import { PopupContextType } from './helpers';

/* PopupContextProvider Helpers */
interface PopupContextProviderProps {}

function PopupContextProvider(props: React.PropsWithChildren<PopupContextProviderProps>) {
  const value: PopupContextType = {};

  return (
    <PopupContext.Provider value={value}>
      {props.children}
      <PopupsWrapper {...value} />
    </PopupContext.Provider>
  );
}

const _PopupContextProvider = PopupContextProvider;

export { _PopupContextProvider as PopupContextProvider };
