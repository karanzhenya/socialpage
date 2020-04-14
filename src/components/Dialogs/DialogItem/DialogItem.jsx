import React from 'react';
import style from './../Dialog.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={style.dialogs + ' ' + style.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem;