import React from "react";
import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts updateNewPostText={props.updateNewPostText} posts={props.profilePage.postData} newPostText={props.profilePage.newPostText} addPost={props.addPost}/>
        </div>
    )
};

export default Profile;