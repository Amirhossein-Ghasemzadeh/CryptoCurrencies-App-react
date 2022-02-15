import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'antd/dist/antd.css';
import store from './app/store';

ReactDOM.render(
  <React.StrictMode>
    <Routes>
      <Provider store={store}>
        <App />
      </Provider>
    </Routes>
  </React.StrictMode>,
  document.getElementById('root')
);
