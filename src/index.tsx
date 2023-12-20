import React from 'react';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import CreateStore from './store';
import Routes from './config/Routes';
import * as ReactDOMClient from 'react-dom/client';

const store = CreateStore();
// @ts-ignore
const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Routes />
    </Provider>
);

serviceWorker.unregister();
