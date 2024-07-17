import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export const profileData= [];
const EditProfile =()=>{
    const [name ,setName]=useState("");
    const [email ,setEmail]=useState("");
    const [phone ,setPhone]=useState("");
    const [profession,setProfession]=useState("");
    
    const handleSubmit=async(e)=>{
        e.preventDefault();
        await axios.get("http://localhost:4000/profile" ,{name,email,phone,profession}).then((result)=>{
          console.log(result);
         profileData.push(result);
     }). catch((error)=>{
     console.log("erroe os courese" , error.message);
   })
   console.log(profileData);
  }
      
    


    return (
      <div className="flex justify-center">
      <div className="bg-white w-full max-w-xs">
        <h2 className="text-gray-700 font-bold">Edit Profile</h2>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit} method="POST">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name:
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type='text' name='name' value={name} onChange={(e)=>setName(e.target.value)}  />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email:
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" type='email' name='email' value={email} onChange={(e)=>setEmail(e.target.value)}  />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" >
              Phone:
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"  type='tel' name='phone' value={phone} onChange={(e)=>setPhone(e.target.value)}  />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Profession:
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"  type='text' name='profession' value={profession} onChange={(e)=>setProfession(e.target.value)}  />
            </label>
          </div> 
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit"><Link to='/'>SAVE</Link></button> 
        </form>
      </div>
      </div>  
    );
}

export default EditProfile;