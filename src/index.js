import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import allReducers from './reducers/index';

const store = createStore(allReducers);

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
