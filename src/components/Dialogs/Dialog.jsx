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

const Message = (props) => {
    return (
        <div className={style.message}>{props.message}</div>
    )
}

const Dialog = () => {

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

    let dialogsElement = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElement = messages.map(m => <Message message={m.message}/>)
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={style.messages}>
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialog;