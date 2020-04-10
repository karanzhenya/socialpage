import React from 'react';
import style from './Dialog.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}
            </NavLink>
        </div>
    )
}

const Message =(props) => {
    return (
        <div className={style.message}>{props.message}</div>
    )
}

const Dialog = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogItem name='Zhenya' id='1'/>
                <DialogItem name='Dima' id='2'/>
                <DialogItem name='Andrey' id='3'/>
                <DialogItem name='Sasha' id='4'/>
                <DialogItem name='Denis' id='5'/>
            </div>
            <div className={style.messages}>
                <Message message='Hi. It is me!' />
                <Message message='How are you?' />
                <Message message='What are your problem?' />
            </div>
        </div>
    )
}

export default Dialog;