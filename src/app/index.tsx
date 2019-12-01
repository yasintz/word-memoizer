import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApplicationContext } from './context';
import Routes from '~/pages';
import { ApplicationProviderProps } from './helpers';
import { PopupContextProvider } from '~/contexts/popup';

function App(props: ApplicationProviderProps) {
  const contextValue = {};

  return (
    <BrowserRouter>
      <ApplicationContext.Provider value={contextValue}>
        <PopupContextProvider>
          <Routes />
        </PopupContextProvider>
      </ApplicationContext.Provider>
    </BrowserRouter>
  );
}

export default App;
