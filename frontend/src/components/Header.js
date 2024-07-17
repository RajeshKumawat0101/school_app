import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.jpg'
import '../App.css'
import Login from './Login';
import { Link } from 'react-router-dom';

const Header = () => {
  const [stricky ,setStricky]= useState(false);
  const [valid,setValid]= useState(false);
  useEffect(()=>{
    const handle =()=>{
      if(window.scrollY>0){
        setStricky(true);
      }else{
        setStricky(false);
      }
    }
   window.addEventListener("scroll" , handle);
   return()=>{
    window.removeEventListener("scroll" ,handle);
   }
  })  
  const Navbar = (
    <>
    <li className='font-bold '><a href='/'>home</a></li>
    <li className='font-bold '><a onClick={()=>{
      <Login/>
    }}>Admission</a></li>
    <li className='font-bold '><Link to='/result'>RESULT</Link></li>
    <li className='font-bold '><Link to='/gellary'>GALLARY</Link></li>
    <li className='font-bold '><Link to='/contect'>contect</Link></li>
    <li className='font-bold '><Link to='/course'>coures</Link></li>
    </>
  )
  return (
    <>
    <div className={`max-w-screen-2xl container mx-auto md:px-20  px-3 fixed top-0 left-0 right-0 z-50 ${
      stricky? "sticky-navbar shadow-md bg-slate-200 duration-300 transition-all ease-in-out" :" "
    }`} >
    <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {Navbar}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">infinite</a>
  </div>
  <div className="navbar-end mx-auto p-2">
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {Navbar}
    </ul>
  </div>
  <div className='px-2 py-2'>
  <label className="input input-bordered flex items-center gap-2">
  <input type="text" className="hidden md:block grow" placeholder="Search" />
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
</label>
  </div>
   
  {valid?<>  <button  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none justify-end focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"   ><Link to='/profile'> profile </Link></button>
</>:<button  >
    <Link className="btn bg-black text-amber-50 " 
        onClick={()=>{
          document.getElementById('my_modal_3').showModal();
          // setValid(true);
           console.log("hiiiiii");
        } 
        }
     to='/' >Login</Link>
      <Login/>
  </button>}

  </div>
</div>
    </div>
    </>

  )
}

export default Header

