import React from 'react';
import './MyPosts.css';
import Post from './../Post/Post';

const MyPosts = () => {
    let postsData = [
        {message: 'привет', likes: 5, id: 1},
        {message: 'как дела', likes: 8, id: 2},
        {message: 'я тут', likes: 12, id: 3},
        {message: 'тратата', likes: 12, id: 4},
        {message: 'лалала', likes: 12, id: 5},
    ]

    let postItems = 
        postsData.map( p => (<Post message= {p.message} countLike={p.likes}/>))
    return (
        <div>
            my posts
            <div>new post</div>
            <div>
                {/* <Post message= {postsData[0].message} countLike={postsData[0].likes}/>
                <Post message={postsData[1].message} countLike={postsData[1].likes}/>
                <Post message={postsData[2].message} countLike={postsData[2].likes}/> */}
                {postItems}
            </div>
        </div>
    )
}

export default MyPosts;