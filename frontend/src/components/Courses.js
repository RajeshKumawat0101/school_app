import React, { useEffect, useState } from 'react'

import Card from './Card'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Courses = () => {

  const [book , setBook] = useState([]);

  useEffect(()=>{
        
    const getbook = async ()=>{
      try {
        const res= await axios("http://localhost:4000/book");
        console.log(res.data);
        const filterData =  res.data.filter((data)=> data.catagory==="paid");

        setBook(filterData);
      } catch (error) {
        console.log("erroe os courese" , error);
      }

    }
    getbook();
  },[])


  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20  px-3'>
      <div className='mt-28 items-center justify-center text-center'>
        <h1 className='font-bold text-2xl md:text-4xl'> we' re delight to have you </h1>
        <p className='mt-6'> How horrible it is, how horrible
              that Cronenberg film where Goldblum’s trapped
              
              with a fly inside his Material
              Transformer: bits of the man emerging
              
              gooey, many-eyed; bits of the fly
              worrying that his agent’s screwed him—
              
              I almost flinch to see the body later
              that’s left its...
              
        </p>
        <Link to="/">
        <button className="btn mt-10 hover:bg-slate-400 btn-active btn-secondary">back</button>
        </Link>
      </div>
      <div className='mt-12 p-3 gap-4 grid grid-cols-1 md:grid-cols-3'>
        { book.map((item)=>(
            <Card items={item} key={item.id} />
        ))}
      </div>
    </div>
    </>
  )
}

export default Courses
