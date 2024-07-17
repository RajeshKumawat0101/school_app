import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import { auth } from './firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';
export const isvalid=[];
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [valid ,setValid]= useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     await signInWithEmailAndPassword(auth,email,password);
      console.log("User logged in Successfully");
       window.location.href="/profile";
       //setValid(false);
      }
     catch (error) {
      console.log(error.message);
      
    }
  };

  

  return (
    <>
    <div>  
    <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form >
    <h3 className="font-bold text-lg">Login </h3>
    <p className="py-4">
    <form  onSubmit= {handleSubmit} className="max-w-md mx-auto">
  <div className="relative z-0 w-full mb-5 group">
      <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e)=>setEmail(e.target.value)}/>
      <label HtmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  onChange={(e)=>setPassword(e.target.value)} />
      <label HtmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
  </div>

  <div className='flex justify-around'>
  <button type="submit"  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none justify-end focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"  ><Link to='/quiz'> Submit </Link></button>
  <p> Not Register? <Link to="/signup" className='text-blue-500 underline cursor-pointer'
  onClick={()=>document.getElementById('my_modal_3').showModal()}
  >Sign up</Link></p>
  
  </div> 
  </form>
    </p>
  </div>
</dialog>

{/*  */}

    </div>
    </>
  )
}

export default Login
