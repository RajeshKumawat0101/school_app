import React from 'react'
import Header from '../components/Header';
import Body from '../components/Body';
import FreeBook from '../components/FreeBook';
import Footer from '../components/Footer';
import NewSection from '../components/NewSection';
import About from '../components/About';
import ImageSlider from '../components/ImageSlider';
import Blog from '../components/Blog';
const Home = () => {
  return (
    <div>
   <Header ></Header>
   <ImageSlider/>
   <Body></Body>
   <FreeBook/>
   <NewSection/>
   <About/>
   <Blog/>
    <Footer/> 
    </div>
  )
}

export default Home
