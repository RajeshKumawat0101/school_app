import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
//import Qzie from './Qzie'
import { Link } from 'react-router-dom';
export const profileData=[];
const RegisterForm = () => {
    const [name ,setName]= useState("");
    const [email ,setEmail]= useState("");
    const [password, setPassword] = useState("");
    const [phone ,setPhone]= useState("");
    const [profession,setProfession]= useState("");
    const navigate = useNavigate()
    const handleSubmit=async(e)=>{
           e.preventDefault();
            await axios.post("http://localhost:4000/user/register" ,{name,email,password,phone,profession}).then((result)=>{
                 console.log(result);
                 profileData.push(result);
                 navigate('/loginUser');
            }). catch((error)=>{
            console.log("erroe os courese" , error.message);
          })

        }

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
  
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
    </div>
  
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" onSubmit={handleSubmit} method="POST">
      <div>
          <label for="name" className="block text-sm font-medium leading-6 text-gray-900">Full name</label>
          <div className="mt-2">
            <input id="name" name="name" value={name} onChange={(e)=>setName(e.target.value)} type="text"  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div className="mt-2">
            <input id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} type="email" autocomplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
  
        <div>
          <div className="flex items-center justify-between">
            <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
            <div className="text-sm">
              <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
            </div>
          </div>
          <div className="mt-2">
            <input id="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} type="password" autocomplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div>
          <label for="number" className="block text-sm font-medium leading-6 text-gray-900">number</label>
          <div className="mt-2">
            <input id="number" name="number" value={phone} onChange={(e)=>setPhone(e.target.value)} type="tel"  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div>
          <label for="profession" className="block text-sm font-medium leading-6 text-gray-900">profession</label>
          <div className="mt-2">
            <input id="profession" name="profession" value={profession} onChange={(e)=>setProfession(e.target.value)} type="text"  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
  
        <div>
          <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><Link to='/'>register</Link> </button>
        </div>
      </form>
  
      <p className="mt-10 text-center text-sm text-gray-500">
        Not a member?
        <a href="/loginUser" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">login</a>
      </p>

    </div>
  </div>
  
  )
}

export default RegisterForm
