import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/Redux-store";
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import StoreContext from "./StoreContext";

let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <StoreContext.Provider value={store}>
            <App />
            </StoreContext.Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    renderEntireTree(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
