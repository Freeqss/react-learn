import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
    return (
        <div className={s.content}>
            <img src={'https://p4.wallpaperbetter.com/wallpaper/221/1008/838/art-background-dual-fantasy-wallpaper-preview.jpg'}/>
            <div>
                avatar + description
            </div>
                <MyPosts />
            </div>
    );
}
export default Profile