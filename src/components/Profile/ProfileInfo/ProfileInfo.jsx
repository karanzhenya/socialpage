import React from "react";
import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img width="100%"src='https://cdn3.mygazeta.com/i/2014/12/awucv0x-Imgur.jpg'></img>
            </div>
            <div className={style.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
};

export default ProfileInfo;