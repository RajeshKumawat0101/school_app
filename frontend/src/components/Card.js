import React, { useState } from 'react'
import './componentsCss/cards.css'
import CourseDesc from './CourseDesc';
import { Link } from 'react-router-dom';
//import CourseView from './courseDesc/CourseView';

export const course=[];
function Card ({items}){
   // const cnt=0
    const handleRender=(e)=>{
        e.preventDefault();
        console.log("hiii jii");
       // cnt=cnt+1;
        course.push(items);
       // course.push(cnt);
        console.log(course);
    }


    //const [isvalid,setIsValid]= useState(true);
     return (
     <div class="services-contents">
        <div class="service-box">
            <div class="service-img">
                <img src={items?.image} alt="hjhj" />
            </div>
            <div class="service-desc">
            <h2>{items?.name}</h2>
            <p>{items?.Desc} </p>
            <div class="course-btn">
                <button class="course-btn-btn" onClick={handleRender} ><Link to='/courseDesc' >Click Here </Link>  </button>
            </div>
        </div>
    </div>
</div>


     )





















//     <div>
//  <div className="card w-96 bg-base-100 shadow-xl hover:scale-110 duration-200">
//   <figure><img  alt="Shoes" /></figure>
//   <div className="card-body">
//     <h2 className="card-title">
//       {items?.name}
//       <div className="badge badge-secondary">{items?.title}</div>
//     </h2>
//     <p>{items?.catagory}</p>
//     <div className="card-actions justify-between">
//       <div className="badge badge-outline">{items?.price} </div> 
//       <div className="badge badge-outline hover:bg-slate-500 hover:text-white">buy now </div>
//     </div>
//   </div>
// </div>
//     </div>
  
}

export default Card
