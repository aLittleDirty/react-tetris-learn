import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './containers/';
import './unit/const';  // 定义俄罗斯方块等各种常量
import './control';  // 监听键盘的up down

// import { subscribeRecord } from './unit';

// subscribeRecord(store); // 将更新的状态记录到localStorage

render(
  <Provider store={store}>
    <App />
  </Provider>
    , document.getElementById('root')
);
