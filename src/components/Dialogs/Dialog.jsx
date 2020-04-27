import React from 'react';
import style from './Dialog.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialog = (props) => {

    let dialogsElement = props.dialogs.map(d => <DialogItem ava={d.ava} name={d.name} id={d.id}/>);
    let messagesElement = props.messages.map(m => <Message message={m.message}/>);
    let newMessageText = React.createRef();
    let addMessage = () => {
       let textMessage = newMessageText.current.value;
    alert(textMessage)
    }
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={style.messages}>
                {messagesElement}
            </div>
            <div className={style.text}>
                <textarea ref={newMessageText}></textarea>
            </div>
            <div className={style.button}>
                <button onClick={addMessage}>Add</button>
            </div>
        </div>
    )
}

export default Dialog;