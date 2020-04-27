import React from "react";
import style from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();
    let addPost = () => {
        props.addPost()
    };
    let onChangePost = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };
    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onChangePost} value={props.newPostText} ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
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