import * as React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './App';

import 'antd/dist/antd.css';
import './main.scss';

import reducer from './store/reducer';

const store = createStore(reducer, applyMiddleware(thunk));

console.log(store.getState());

render(
<Provider store={store}>
  <App/>
</Provider>, document.getElementById('app'));
