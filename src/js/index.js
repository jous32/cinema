import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
//import store from "../js/store/index";
import configureStore from './store/configureStore';
import App from "../js/components/App";

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
