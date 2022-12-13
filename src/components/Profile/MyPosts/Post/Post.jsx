import React from "react";
import s from './Post.module.css'
const Post = (props) => {
    return (
        <div className={s.item}>
            <img alt = "" src = 'https://chudo-prirody.com/uploads/posts/2021-08/1628905045_202-p-skachat-foto-milikh-kotikov-216.jpg'/>
            {props.msg}
            <div className={s.like}>
                <span>Like</span>
            </div>
        </div>
    )
}
export default Post