import React from 'react'
import { Link } from 'react-router-dom'
//import axios from 'axios'
import Photos from './Photos'
import { image } from './componentsList/ImageData'
const Gellary = () => {

  //const [gellary , setGellary] = useState([]);

  // useEffect(()=>{
        
  //   const getbook = async ()=>{
  //     try {
  //       const res= await axios.get("http://localhost:4000/image");
  //       console.log(res.data);
  //       const filterData= res.data.filter((data)=> data.type==="gellary");
  //       setGellary(filterData);
  //     } catch (error) {
  //       console.log("erroe os courese" , error);
  //     }

  //   };
  //   getbook();
  // },[])


  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20  px-3'>
      <div className='mt-28 items-center justify-center text-center'>
        <h1 className='font-bold text-2xl md:text-4xl'> gellary </h1>
       
        <Link to="/">
        <button className="btn mt-10 hover:bg-slate-400 btn-active btn-secondary">back</button>
        </Link>
      </div>


      
      <div className='mt-12 p-3 gap-4 grid grid-cols-1 md:grid-cols-3'>
        { image.map((item)=>(
            <Photos items={item} key={item.id} />
        ))}
      </div>
    </div>
    </>
  )
}

export default Gellary;