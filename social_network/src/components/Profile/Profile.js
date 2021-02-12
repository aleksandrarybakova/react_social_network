import React from 'react';
import './Profile.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/Profile.Info.js';

const Profile = () => {
    return (
        <div className="content">
            <ProfileInfo/>            
            <MyPosts/>            
        </div>
    )
}

export default Profile;