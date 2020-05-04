import store from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App updateNewPostText={store.updateNewPostText.bind(store)} state={state} addPost={store.addPost.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );};
serviceWorker.unregister();

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

