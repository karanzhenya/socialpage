import React from 'react';
import style from './../Dialog.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.avatar}><img className={style.img} src={props.ava}></img></div>
            <NavLink className={style.navlink} to ={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;