import React from "react";
import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img src='https://pic.xenomorph.ru/2015-06/1433421189_wide01.jpg'></img>
            </div>
            <div>
                ava+discription
            </div>
            <MyPosts/>
        </div>
    )
};

export default Profile;