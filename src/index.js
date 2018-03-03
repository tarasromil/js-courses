import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './modules/store';


ReactDOM.render(
  <Provider store={store}>
    <App />,
    document.getElementById('root')
  </Provider>
);
