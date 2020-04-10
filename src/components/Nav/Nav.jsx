import React from "react";
import style from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={style.nav}>
        <div><a href='/profile'>Profile</a></div>
        <div><a href='/dialog'>Messages</a></div>
        <div><a href='/news'>News</a></div>
        <div><a href='music'>Music</a></div>
        <div><a href='settings'>Settings</a></div>
    </nav>)
}

export default Nav;