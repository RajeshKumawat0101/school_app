import React, { useState ,useEffect } from 'react'
import axios from 'axios'; 
//import '../componentsCss/cards.css'
import { Link ,useNavigate} from 'react-router-dom';
//import {data} from '../componentsList/data'
///import question from '../../../../backend/book_model/Question_model'; 
const Admin = () => {
   const [questionp,setQuestionp] = useState("");
   const [option1,setOption1]= useState("");
   const [option2,setOption2]= useState("");
   const [option3,setOption3]= useState("");
   const [option4,setOption4]= useState("");
   const [ans ,setAns]         =useState(0);
   const [data, setData] = useState([]);
   //let List= {};
   const navigate=useNavigate();
   const handleSubmit=async(e)=>{
    console.log(questionp);
       e.preventDefault();
        await axios.post("http://localhost:4000/question/" ,{questionp,option1,option2,option3,option4,ans}).then((result)=>{
             console.log(result);

            if(result.json ==='create question '){
             navigate('/');
             }
        }). catch((error)=>{
        console.log("erroe os courese" , error.message);
      })
     
      console.log(data);
    }
  
   useEffect(()=>{
            
    const getquiz = async ()=>{
      try {
        const res= await axios.get("http://localhost:4000/question/getQuiz");
        console.log(res.data);

        const filterData =  res.data.filter((data)=> data.catagory==="free");

        setData(filterData);
      } catch (error) {
        console.log("erroe os courese" , error);
      }

    };
    getquiz();
  },[])
   
   

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
  
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"> test series question setup </h2>
    </div>
  
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" onSubmit={handleSubmit} method="POST">
      <div className="flex">
         <label for="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label> 
        <button id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">All categories <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button>
        <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
            <li>
                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">jee </button>
            </li>
            <li>
                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">jee+advance</button>
            </li>
            <li>
                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">NEET</button>
            </li>
           
            </ul>
        </div>
</div>
      <div>
          <label for="name" className="block text-sm font-medium leading-6 text-gray-900"> enter question</label>
          <div className="mt-2">
            <input id="name" name="name" value={questionp} onChange={(e)=>setQuestionp(e.target.value)} type="text"  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div>
          <label for="option1" className="block text-sm font-medium leading-6 text-gray-900"> option 1</label>
          <div className="mt-2">
            <input id="option1" name="option1" value={option1} onChange={(e)=>setOption1(e.target.value)} type="text" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
  
        <div>
          <label for="option2" className="block text-sm font-medium leading-6 text-gray-900"> option 2</label>
          <div className="mt-2">
            <input id="option2" name="option2" value={option2} onChange={(e)=>setOption2(e.target.value)} type="text" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div>
          <label for="option3" className="block text-sm font-medium leading-6 text-gray-900"> option 3</label>
          <div className="mt-2">
            <input id="option3" name="option3" value={option3} onChange={(e)=>setOption3(e.target.value)} type="text" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div>
          <label for="option4" className="block text-sm font-medium leading-6 text-gray-900"> option 4</label>
          <div className="mt-2">
            <input id="option4" name="option4" value={option4} onChange={(e)=>setOption4(e.target.value)} type="text" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div>
          <label for="ans" className="block text-sm font-medium leading-6 text-gray-900"> option 4</label>
          <div className="mt-2">
            <input id="option4" name="ans" value={ans} onChange={(e)=>setAns(e.target.value)} type="number" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
  
        <div className='flex  justify-between'>
          <button type="submit" className=" w-1/3 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">add question </button>
        {/* </div>
        <div> */}
      </div>
      </form>

      <button className="w-1/4  m-8 rounded-md  bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
            >
       upload  </button>
       <button className="w-1/4  m-8 rounded-md  bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
       ><Link to='/' >next button</Link></button>
    

    </div>
  </div>
  
  )
}

export default Admin
