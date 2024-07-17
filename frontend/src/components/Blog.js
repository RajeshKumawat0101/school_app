import React,{useRef,useState,useEffect} from "react";
import "./componentsCss/Menu.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import Slider from "react-slick";
import { image } from "./componentsList/ImageData";
import Photos from "./Photos";
//import axios from 'axios';
const Blog = () => {

  // const box= document.querySelector('.slider');
  //  const prevbtn=()=>{
  //    const width =box.clientWidth;
  //    box.scrollLeft= box.scrollLeft-width;
  //    console.log(width);
  //  }
  //  const nextbtn=()=>{
  //   const width =box.clientWidth;
  //   box.scrollLeft= box.scrollLeft+width;
  //   console.log(width);
  //  }
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // };
  // const [himage , setHimage] = useState([]);

  // useEffect(()=>{
        
  //   const getImage = async ()=>{
  //     try {
  //       const res= await axios.get("http://localhost:4000/image");
  //       console.log(res.data);

  //       const filterData =  res.data.filter((data)=> data.type==="homeImage");
  //         console.log(filterData);
  //       setHimage(filterData);
  //     } catch (error) {
  //       console.log("erroe os courese" , error);
  //     }

  //   };
  //   getImage();
  // },[])

  const [active2 , setActive2] = useState(0);
  const mainSliderRef = useRef(null);
  const mainSliderItemsRef= useRef([]);
  // const [valid ,setValid] = useState(false);
  useEffect(() => {
      if (mainSliderRef.current && mainSliderItemsRef.current[active2]) {
        mainSliderRef.current.style.left =
          -mainSliderItemsRef.current[active2].offsetLeft + "px";
      }
    }, [active2]);

 
  return (
    <>
    <div style={{width:"90vw" ,paddingTop:"30px"}} >
      {/* <!-- image slider section starts --> */}

      <div className="slider">
        <div className="list flex flex-col "  ref={mainSliderRef} >
        {/* <Slider {...settings} className="flex flex-row justify-center "> */}
          {image.map((item, index) =>{ 
            return (
            <div key={index} ref = {(el) => (mainSliderItemsRef.current[index] = el)}>
               <img src={item.src} alt="" style={{objectFit: "cover"}} />
            </div>

           
          )})}
          {/* </Slider> */}
        </div>
        <div className="buttons">
          <button
            id="prev"
            onClick={() =>
              setActive2((prev) => (prev - 1 + image.length) % image.length)}
          >
            {"<"}{" "}
          </button>
          <button
            id="next"
            onClick={() => setActive2((prev) => (prev + 1) % image.length)}
          >
            {" "}
            {"> "}{" "}
          </button>
        </div>
        
      </div>
    </div>

   <div>
    
   </div>
    </>
  );
};

export default Blog;
