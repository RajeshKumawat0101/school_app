import React  from 'react'
import { course } from './Card';
import { Link } from 'react-router-dom';
const CourseDesc = () => {
  const removeArray=()=>{
     console.log(course);
  }
  return (
    <>
    <div>
       <div className='max-w-screen-2xl container mx-auto md:px-20 flex items-center justify-center flex-col  px-3'>
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
        <Link to="/course">
        <button className="btn mt-10 hover:bg-slate-400 btn-active btn-secondary" onClick={removeArray} >back</button>
        </Link>
      </div>
      <div className='mt-12 p-3 gap-4  grid-cols-1 md:grid-cols-3 flex flex-col font-bold'>
       <div className=''>
      <div className='flex ' >
      <h1>Course Name :</h1>
      <hi>{course[course.length-1].name} </hi>
      </div>
      <div className='flex'>
      <h3>course Desc :</h3>
      <hi>{course[course.length-1].Desc} </hi>
      </div>
      </div>
      <div className=''>
         <div className='flex'>
          <h1>Price : </h1>
         <h3>{course[course.length-1].price} rupee</h3>

         </div>
         <div className='flex'>
          <h3>Catagory :</h3>
         <h3>{course[course.length-1].catagory} </h3>     

         </div>
         <Link to="/register">
        <button className="btn mt-10 hover:bg-slate-400 btn-active btn-secondary">buy now</button>
        </Link>
      </div>
      </div>
    </div>
    </div>
    </>
  )
}
export default CourseDesc
