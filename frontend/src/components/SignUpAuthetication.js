import React, { useState } from 'react'
import { auth, db } from './firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc ,doc } from 'firebase/firestore';

const SignUpAuthetication = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth,email,password);
      const user= auth.currentUser;
      console.log(user);
      if(user){
        await setDoc(doc(db,"user" ,user.uid),{
          email:user.email

        })
      }

      console.log("User logged in Successfully");
     
      }
     catch (error) {
      console.log(error.message);
    }
  };



  return (
    <div>
     
      <form  onSubmit= {handleSubmit} className="max-w-md mx-auto">
  
  <div className="relative z-0 w-full mb-5 group">
      <input type="email" value={email} name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " 
           onChange={(e)=>setEmail(e.target.value)} />
      <label HtmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="password" value={password} name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " 
        onChange={(e)=>setPassword(e.target.value)} />
      <label HtmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
  </div>
  <button type="submit">submit</button>
  </form>
    </div>
  )
}

export default SignUpAuthetication
