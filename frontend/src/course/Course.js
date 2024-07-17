import React from 'react'
import Header from '../components/Header';
import Courses from '../components/Courses'
import Footer from '../components/Footer';

const Course = () => {
  return (
    <div>
  <Header ></Header>
  <div className='min-h-full'>
  <Courses/>
  </div>
  
    <Footer/> 
    </div>
  )
}

export default Course
