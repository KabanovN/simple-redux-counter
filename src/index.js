import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';

import './index.css';

const initialState = { counter: 0 };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INC':
            return {
                ...state,
                counter: state.counter + 1,
            };
        case 'DEC':
            return {
                ...state,
                counter: state.counter - 1,
            };
        case 'RND':
            return {
                ...state,
                counter: state.counter * action.payload,
            };
        case 'RESET':
            return {
                ...state,
                counter: 0,
            };
        default:
            return state;
    }
};

const store = createStore(reducer);

store.subscribe(() => {
    document.getElementById('counter').textContent = store.getState().counter;
});

const inc = () => ({ type: 'INC' });
const dec = () => ({ type: 'DEC' });
const rnd = (value) => ({ type: 'RND', payload: value });
const reset = () => ({ type: 'RESET' });

document.getElementById('inc').addEventListener('click', () => {
    store.dispatch(inc());
});

document.getElementById('dec').addEventListener('click', () => {
    store.dispatch(dec());
});

document.getElementById('reset').addEventListener('click', () => {
    store.dispatch(reset());
});

document.getElementById('rnd').addEventListener('click', () => {
    const value = Math.floor(Math.random() * 10);
    store.dispatch(rnd(value));
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <></>
    </React.StrictMode>
);
