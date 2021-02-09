import React from 'react';
import './MyPosts.css';
import Post from './../Post/Post';

const MyPosts = () => {
    return (
        <div>
            my posts
            <div>new post</div>
            <div>
                <Post message="привет" countLike="5"/>
                <Post message="123" countLike="7"/>
                <Post message="апрарп" countLike="3"/>
                
            </div>
        </div>
    )
}

export default MyPosts;