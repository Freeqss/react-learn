import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
const MyPosts = () => {
    return (
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add posts</button>
                    <button>Remove</button>
                </div>
                <div>
                    New post
                    </div>
                    <div className={s.posts}>
                        <Post msg = 'Привет чорт' />
                        <Post msg = "Маму ебал"/>
                        <Post msg = "Ты лох" />
                    </div>
            </div>
    );
}
export default MyPosts