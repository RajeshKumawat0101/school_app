import React, { useRef, useState ,useEffect} from 'react'
import './componentsCss/newSection.css'
import Slider from '../assets/bannwer.webp'
import Gif_New from '../assets/logo.jpg'
import New_icon from '../assets/bannwer.webp'
import { Link } from 'react-router-dom'
// import Qzie from './Qzie'
// import Login from "./Login"
const NewSection = () => {
  
    const items = [
        {
          id: 1,
          src: ` ${Slider}`,
        },
        {
          id: 2,
          src: `${Slider}`,
        },
        {
          id: 3,
          src: `${Slider}`,
        },
        {
          id: 4,
          src: `${Slider}`,
        },
        {
          id: 5,
          src: `${Slider}`,
        },
        {
          id: 6,
          src: `${Slider}`,
        },
      ];

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

//   const validHandle=()=>{
//     setValid(true);
//     console.log("valid");
//   }

  return (
    <div className='website-container'>
        {/* <!-- news and notification section starts --> */}

<section className="services" id="management">

    <header className="section-header">
        <h1 style={{fontWeight: "600px"}}>News And Notification
        </h1>
        {/* <!-- <p>We have experienced and talented faculty to manage the reponsibility of school.</p> --> */}
    </header>

    <div className="main-slider-and-notification">
        <div className="main-slider-box">
            <div className="main-slider">
                <div className="main-slider-list" ref={mainSliderRef} >
                    {items.map((item ,index) => (
                           <div className="main-slider-item" key={index} ref = {(el) => (mainSliderItemsRef.current[index] = el)} >
            
                           <img src={item.src} alt="" style={{objectFit: "cover"}} /> ,
                       </div>
                   ) )}
                   
                     <div className="main-slider-item">
                        <img src={Slider} alt="" />
                    </div>
                    <div className="main-slider-item">
                        <img src={Slider} alt="" />
                    </div>
                    <div className="main-slider-item">
                        <img src= {Slider}  alt="" />
                    </div>
                    <div className="main-slider-item">
                        <img src={Slider}  alt="" />
                    </div> 
                </div>
                <div className="main-slider-buttons">
                    <button id="prev"   onClick={() =>
              setActive2((prev) => (prev - 1 + items.length) % items.length)
            } >
                       {"< "}</button>


                            <button id="next"   onClick={() => setActive2((prev) => (prev + 1) % items.length)} >{" > "}</button>
                </div>
            </div>
        </div>
        <div className="notification">
            <div className="heading">
                <div className="heading-text">
                    <h4>Notification</h4>
                </div>
                <div className="heading-box2"></div>
                <div className="heading-box3"></div>
            </div>
            <div className="notification-container">
                <marquee scrollamount="2" behavior="" direction="up" onmouseover="this.stop();"
                    onmouseout="this.start();">
                    <li className="new-notification"><i className="fa fa-caret-right"
                            style={{color: "#084298", alignItems: "center"}}></i>
                        <div className="overflow" style={{height: "30px" ,borderBottom: "#0000ff"}}    ><Link to="/register"  > quiz start ............... <img src={Gif_New} alt="Strategy by Ravi Sir"
                                    style={{width:"22px" , height: "9px" , float: "none "}} className="mCS_img_loaded" /></Link>
                        </div>
                     
                    </li>

                    <li className="new-notification"><i className="fa fa-caret-right"></i>
                        <div className="overflow"><a href="#"> test start ..
                                ex.. <img src={New_icon} alt="Strategy by Ravi Sir"
                                    style={{width: "22px" , height: "9px" ,float: "none"}} className="mCS_img_loaded" /></a>
                        </div>

                    </li>

                    <li className="new-notification"><i className="fa fa-caret-right"></i>
                        <div className="overflow"><a href="#home">Lorem ipsum dolor sit amet consectetur at. Saepe
                                ex.. <img src={Gif_New} alt="Strategy by Ravi Sir"
                                    style={{width: "22px" , height: "9px" , float: "none"}} className="mCS_img_loaded" /></a>
                        </div>

                    </li>

                    <li className="new-notification"><i className="fa fa-caret-right"></i>
                        <div className="overflow"><a href="#home">Lorem ipsum dolor sit amet consectetur
                                at.dvcsdvsdvsdvsfvs sdv Saepe ex.. <img src="new_icon_blink.gif"
                                    alt="Strategy by Ravi Sir" style={{width: "22px" , height: "9px" ,float: "none"}}
                                    className="mCS_img_loaded" /></a></div>

                    </li>
                    <li className="new-notification"><i className="fa fa-caret-right"></i>
                        <div className="overflow"><a href="#home">Lorem ipsum dolor sit amet consectetur at. Saepe
                                ex.. <img src="new_icon_blink.gif" alt="Strategy by Ravi Sir"
                                    style={{width: "22px" , height: "9px" ,float: "none"}} className="mCS_img_loaded" /></a>
                        </div>

                    </li>
                </marquee>

            </div>
        </div>
    </div>
</section>



    </div>
  )
}

export default NewSection
