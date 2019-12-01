import * as React from 'react';
import { ApplicationContextValues } from './helpers';

export const applicationContextInitialValue: ApplicationContextValues = {};

const ApplicationContext = React.createContext<ApplicationContextValues>(applicationContextInitialValue);
function useApplicationContext() {
  return React.useContext(ApplicationContext);
}

export { ApplicationContext, useApplicationContext };
