import React ,{useState ,useEffect} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from 'react-slick';
import Card from './Card';
import axios from 'axios';
const FreeBook = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

      const [book , setBook] = useState([]);

      useEffect(()=>{
            
        const getbook = async ()=>{
          try {
            const res= await axios.get("http://localhost:4000/book");
            console.log(res.data);
  
            const filterData =  res.data.filter((data)=> data.catagory==="free");

            setBook(filterData);
          } catch (error) {
            console.log("erroe os courese" , error);
          }
    
        };
        getbook();
      },[])

  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20  px-3 '>
        <div>
            <h1 className='font-semibold text-xl pb-2'> free course offers</h1>
            <p>Over 500+ professionally designed, fully responsive, expertly crafted component examples you can drop into your Tailwind projects and customize to your heart’s content.</p>
        </div>
     <div className="slider-container">
      <Slider {...settings}>
        {book.map((item)=>(
            
            <Card items={item} key={item.id} />
        ))}
      </Slider>  
    </div>
    </div>
  )
}

export default FreeBook
