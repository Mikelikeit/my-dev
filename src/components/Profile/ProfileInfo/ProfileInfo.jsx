import React from 'react';
import style from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";



const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={style.profileInfo}>
            <div>
                <h2>{props.profile.fullName}</h2>
            </div>
            <div>
                <h3><ProfileStatus status={props.status} updateStatus={props.updateStatus}/></h3>
            </div>
            <div>
                <img src={props.profile.photos.large}/>
            </div>

            <div>
              About Me:  {props.profile.aboutMe}
            </div>
            <div>
                Contacts Info:
            </div>
            <div>
                {props.profile.contacts.facebook}
            </div>
            <div>
                {props.profile.contacts.vk}
            </div>
            <div>
                {props.profile.contacts.twitter}
            </div>
            <div>
                {props.profile.contacts.instagram}
            </div>
            <div>
                {props.profile.contacts.github}
            </div>
            <div>
                {props.profile.contacts.github}
            </div>
            <div>
                Looking for a Job Description:  {props.profile.lookingForAJobDescription}
            </div>


        </div>
    );
}

export default ProfileInfo;