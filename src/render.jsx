import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addPost, updateNewPostText} from './redux/state'
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = (state) => {
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App updateNewPostText={updateNewPostText} state={state} addPost={addPost}/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);};
serviceWorker.unregister();
