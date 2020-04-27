import React from "react";
import style from './Header.module.css';
import screen from './screen.png'


const Header = () => {
    return (
        <header className={style.header}>
            <img
                src={screen}></img>
        </header>
    )
}

export default Header;