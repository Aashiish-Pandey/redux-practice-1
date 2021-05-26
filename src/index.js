import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import allReducers from "./reducers/index";
import {Provider} from 'react-redux'

const store = createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

import App from "./App";

ReactDOM.render(
    <Provider store = {store}>
      <App />
    </Provider>

, document.getElementById("root"));
