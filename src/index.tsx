import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import { configureStore } from './reduxParts/store';


const stores = configureStore();

ReactDOM.render(
  <Provider store={ stores } >
    <App />
  </Provider>,
  document.getElementById('root')
);


