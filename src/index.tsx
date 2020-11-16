import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './App';

// import 'antd/dist/antd.css';
import './main.scss';

import reducer from './store/reducer';

// import { foo, sum } from './utils';
import { sum } from './utils';
// import * as utils from './utils';

const store = createStore(reducer, applyMiddleware(thunk));

// console.log(store.getState());
console.log(sum(1, 2));
// console.log(utils.sum(1, 2));
// console.log(foo());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
