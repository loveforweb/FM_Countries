import './styles/index.scss';

import * as serviceWorker from './serviceWorker';

import App from './app';
import React from 'react';
import ReactDOM from 'react-dom';
import { ReactQueryDevtools } from 'react-query-devtools';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ReactQueryDevtools initialIsOpen />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
