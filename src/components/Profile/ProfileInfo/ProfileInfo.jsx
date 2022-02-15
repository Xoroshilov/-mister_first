import React, {useState} from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png"
import ProfileDataReduxForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    if(!profile) {
        return <Preloader/>
    }

    let onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false);
        })

    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
                { isOwner && <input type={"file"} onChange={onMainPhotoSelected}/> }

                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>

                {editMode
                    ? <ProfileDataReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData  profile={profile} isOwner={isOwner} goToEditMode={() => {setEditMode(true)}}/>
                }
            </div>
        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return ( <div>
        <div>
            {isOwner && <button onClick={goToEditMode}>edit</button>}
        </div>
        <div>
        <strong>{profile.fullName}</strong>
    </div>
    <div>
        <b className={s.profileStatus}>About me</b>: {profile.aboutMe}
    </div>
    <div>
        <b>Looking for a job</b>: {profile.lookingForAJob ? 'Yes': 'No'}
    </div>
    <div>
        <b className={s.profileStatus}>My professional skills</b>: {profile.lookingForAJobDescription}
    </div>
    <div>
        <b>Contacts</b>: {Object.keys(profile.contacts).map(key => { return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
    })}
    </div>
    </div>)
}


const Contacts = ({contactTitle, contactValue}) => {
return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;