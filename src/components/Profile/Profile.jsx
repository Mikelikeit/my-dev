import React from 'react';
import styles from './Profile.module.css'
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";




const Profile = (props) => {
    return (
        <div className={styles.profile}>
            <div>
                <img src='https://www.meme-arsenal.com/memes/85ea5e50b5d7cc992a728c20803814e9.jpg'/>
            </div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer />
        </div>

    );
}

export default Profile;