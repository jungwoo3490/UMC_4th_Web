import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



import { Provider } from 'react-redux';
import { createStore } from 'redux';

const isVisible = [false, false, false, false, false, false, false];

let store = createStore(reducer);

function reducer(state = isVisible, action) {
    if (action.type === "0번 버튼 클릭") {
        if (state[0] === true) {
            state = [false, false, false, false, false, false, false];
            return state;
        }
        else {
            state = [false, false, false, false, false, false, false];
            state[0] = true;
            return state;
        }
    }
    else if (action.type === "1번 버튼 클릭") {
        if (state[1] === true) {
            state = [false, false, false, false, false, false, false];
            return state;
        }
        else {
            state = [false, false, false, false, false, false, false];
            state[1] = true;
            return state;
        }
    }
    else if (action.type === "2번 버튼 클릭") {
        if (state[2] === true) {
            state = [false, false, false, false, false, false, false];
            return state;
        }
        else {
            state = [false, false, false, false, false, false, false];
            state[2] = true;
            return state;
        }
    }
    else if (action.type === "3번 버튼 클릭") {
        if (state[3] === true) {
            state = [false, false, false, false, false, false, false];
            return state;
        }
        else {
            state = [false, false, false, false, false, false, false];
            state[3] = true;
            return state;
        }
    }
    else if (action.type === "4번 버튼 클릭") {
        if (state[4] === true) {
            state = [false, false, false, false, false, false, false];
            return state;
        }
        else {
            state = [false, false, false, false, false, false, false];
            state[4] = true;
            return state;
        }
    }
    else if (action.type === "5번 버튼 클릭") {
        if (state[5] === true) {
            state = [false, false, false, false, false, false, false];
            return state;
        }
        else {
            state = [false, false, false, false, false, false, false];
            state[5] = true;
            return state;
        }
    }
    else if (action.type === "6번 버튼 클릭") {
        if (state[6] === true) {
            state = [false, false, false, false, false, false, false];
            return state;
        }
        else {
            state = [false, false, false, false, false, false, false];
            state[6] = true;
            return state;
        }
    }
    else {
        return state;
    }
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
