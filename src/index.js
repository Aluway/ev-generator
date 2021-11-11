import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//redux setup

import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
import reduxPromise from "redux-promise";

//redux persist setup

const store = applyMiddleware(reduxPromise)(createStore)(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
