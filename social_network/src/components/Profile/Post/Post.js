import React from 'react';
import './Post.css';

const Post = (props) => {
    return (        
        <div>
            {props.message}
            <div>like{props.countLike}</div>
        </div>          
           
    )
}

export default Post;