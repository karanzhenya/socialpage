import React from "react";
import style from './FriendsList.module.css'

const FriendsList = (props) => {
    return (
        <div className={style.friendList}>
            <div className={style.friendItem}>First</div>
            <div className={style.friendItem}>Second</div>
            <div className={style.friendItem}>Third</div>
        </div>
    )
}

export default FriendsList;