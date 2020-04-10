import React from "react";
import style from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    let postData = [
        {id: 1, message: "Hi! How are you?", likesCount: 12},
        {id: 2, message: "It's my  first post", likesCount: 11}
    ]
    let postsElement = postData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                <textarea></textarea>
                </div>
                <div><button>Add post</button>
                <button>Remove</button>
                </div>
            </div>
            <div className={style.posts}>
                {postsElement}
            </div>
        </div>
    )
};

export default MyPosts;