import React, { useRef, useState } from 'react'
import './componentsCss/Quiz.css'

import {data} from '../components/componentsList/data'
const Qzie = ({isRegister}) => {

  
  let [index ,setIndex]=useState(0);
    let [question,setQuestion]= useState(data[index]);
   let  [lock ,setLock] =useState(false);
   let  [score ,setScore ]=useState(0);
   let [result ,setResult]= useState(false)
    let Option1 =useRef(null);
    let Option2 =useRef(null);
    let Option3 =useRef(null);
    let Option4 =useRef(null);

   
const option_array =[Option1,Option2,Option3,Option4]

    const checkAns=(e,ans)=>{
      console.log("hiii")
       if(lock===false){
         if(question.ans===ans){
            e.target.classList.add("correct");
            setLock(true);
            setScore(prev=>prev+1);
         }
         else{
            e.target.classList.add("wrong");
            setLock(true);
            option_array[question.ans-1].current.classList.add("correct");
         }
      }
    }

   const next=()=>{
     if(lock===true){
      if(index===data.length-1){
        setResult(true);
        console.log(data);
        return 0;
      }
      setIndex(++index);
      setQuestion(data[index]);
      setLock(false);
      option_array.map((option)=>{
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
        return null;
      })
     }
   }
   const reset=()=>{
        setIndex(0);
        setLock(false);
        setScore(0);
        setLock(false);
        setResult(false);
   }
   
{
  return (
  
      <div className='container1'>
        <h1>Quiz App</h1>
        <hr/>
        {result && isRegister ?<></>:<>
          <h2>{index+1} :{question?.question }</h2>
        <ul>  
          <div className='input-redio'>
              <input type="radio" id="html"  ref={Option1}  onClick={(e)=>{checkAns(e ,1)}}  name="fav_language" value="HTML" />
              <label for="html">{question.option1}</label>
          </div>
         
          <div className='input-redio'>
              <input type="radio" id="html" ref={Option2}  onClick={(e)=>{checkAns(e ,2)}} name="fav_language" value="HTML" />
              <label for="html" >{question.option2}</label>
          </div>
          <div className='input-redio'>
              <input type="radio" ref={Option3}  onClick={(e)=>{checkAns(e ,3)}} id="html"  name="fav_language" value="HTML" />
              <label for="html" >{question.option3}</label>
          </div>
          <div className='input-redio'>
              <input type="radio" ref={Option4}  onClick={(e)=>{checkAns(e ,4)}} id="html"  name="fav_language" value="HTML" />
              <label for="html" >{question.option4}</label>
          </div>
            {/* <li ref={Option1}  onClick={(e)=>{checkAns(e ,1)}}>{question.option1}</li>
            <li ref={Option2}  onClick={(e)=>{checkAns(e ,2)}}>{question.option2}</li>
            <li ref={Option3}  onClick={(e)=>{checkAns(e ,3)}}>{question.option3}</li>
            <li ref={Option4}  onClick={(e)=>{checkAns(e ,4)}}>{question.option4}</li> */}
        </ul>
      <button onClick={next}> next</button>
      <div className='index'> {index+1} of {data.length} question</div>
        </>}

        {result?<><h2>you Scored {score} out of{data.length}</h2>
        <button onClick={reset}>reset</button></> :<></>}
        
    </div> 
  )
} 
}


export default Qzie
