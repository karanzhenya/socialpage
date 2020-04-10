import React from "react";
import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img width="100%"src='https://pic.xenomorph.ru/2015-06/1433421189_wide01.jpg'></img>
            </div>
            <div className={style.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
};

export default ProfileInfo;