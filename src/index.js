import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, bindActionCreators } from 'redux';

import reducer from './reducer';
import * as actions from './actions';

import './index.css';

const store = createStore(reducer);

const { dispatch, subscribe, getState } = store;

subscribe(() => {
    document.getElementById('counter').textContent = getState().counter;
});

// const bindActionCreator =
//     (creator, dispatch) =>
//     (...args) => {
//         dispatch(creator(...args));
//     };

const { inc, dec, rnd, reset } = bindActionCreators(actions, dispatch);

document.getElementById('inc').addEventListener('click', inc);

document.getElementById('dec').addEventListener('click', dec);

document.getElementById('reset').addEventListener('click', reset);

document.getElementById('rnd').addEventListener('click', () => {
    const value = Math.floor(Math.random() * 10);
    rnd(value);
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <></>
    </React.StrictMode>
);
