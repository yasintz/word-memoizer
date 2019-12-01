import * as React from 'react';
import { render } from 'react-dom';
import YasintzApiCalls from 'yasintz-api-calls';
import { mutations, queries } from '~/api';
import { globalStyleCreator } from '~/styled';
import App from '~/app';
import { main as i18nMain } from '~/i18n';
import '~/assets/style';

const rootEl = document.getElementById('root');
const GlobalStyle = globalStyleCreator();

i18nMain();

render(
  <>
    <GlobalStyle />
    <YasintzApiCalls mutations={mutations} queries={queries}>
      <App />
    </YasintzApiCalls>
  </>,
  rootEl,
);
