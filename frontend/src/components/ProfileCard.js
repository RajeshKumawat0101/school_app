
import React  from 'react'
//import logo from "../assets/logo.png"
//import EditProfile from './EditProfile';
import { Link } from 'react-router-dom';
import { profileData } from './RegisterForm';
const ProfileCard=()=>{
 
  return (
    <>
    <div id = 'user-profile' className='user-profile flex-col bg-white bg-origin-border'>
      <div id='profile-logo' className='profile-logo flex'>
        {/* //<img className='m-2 h-9 rounded-btn' src={logo} alt = "profile-logo"/> */}
        <button className='border-solid border-e-red-950 m-2'><Link to='/editprofile'> Edit Profile</Link></button>
      </div>
      <h4>UserName : {profileData[profileData.length-1].name}</h4>
      <h4>Email : {profileData[profileData.length-1].email}</h4>
      <h4>Phone : {profileData[profileData.length-1].phone}</h4>
      <h4>Profession : {profileData[profileData.length-1].profession}</h4>
    </div>
    </>
  );

}

export default ProfileCard;
