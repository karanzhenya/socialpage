import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
let postData = [
    {id: 1, message: "Hi! How are you?", likesCount: 12},
    {id: 2, message: "It's my  first post", likesCount: 11},
    {id: 3, message: "Mother of GOD", likesCount: 44}
];
let dialogs = [
    {id: 1, name: 'Zhenya'},
    {id: 2, name: 'Dima'},
    {id: 3, name: 'Andrey'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Denis'}
];
let messages = [
    {id: 1, message: "Hi. It is me!"},
    {id: 2, message: "How are you?"},
    {id: 3, message: "What are your problem?"},
    {id: 4, message: "Yo"},
    {id: 5, message: "blablabla"}
]
ReactDOM.render(

  <React.StrictMode>
    <App posts={postData} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
