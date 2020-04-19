import React from "react";
import style from './Header.module.css';
import image from './logo.png';


const Header = () => {
    return (
        <header className={style.header}>
            <img
                src={image}></img>
        </header>
    )
}

export default Header;