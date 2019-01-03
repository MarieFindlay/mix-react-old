import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import { createStore } from "redux";
import rootReducer from "./reducers/reducers";
import { Provider } from "react-redux";
import { devToolsEnhancer } from "redux-devtools-extension";

import cocktails from "./constants/cocktails";

import App from "./components/App";

import { cocktailsPerPage } from "./constants/pagination";

const store = createStore(rootReducer, devToolsEnhancer());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
