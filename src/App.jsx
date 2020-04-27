import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx'
import Nav from './components/Nav/Nav.jsx'
import Profile from './components/Profile/Profile.jsx'
import Dialog from './components/Dialogs/Dialog.jsx'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import Friends from "./components/Friends/Friends";
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <Dialog dialogs={props.state.dialogsPage.dialogs} messages={props.state.dialogsPage.messages}/>}/>
                <Route path='/profile' render={() => <Profile updateNewPostText={props.updateNewPostText} profilePage={props.state.profilePage} addPost={props.addPost}/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/friends' render={() => <Friends/>}/>
            </div>
        </div>)
}

export default App;
