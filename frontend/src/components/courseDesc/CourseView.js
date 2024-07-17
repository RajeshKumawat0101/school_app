import React from 'react'
import Header from '../Header'
import CourseDesc from '../CourseDesc'
import Footer from '../Footer'
const CourseView = () => {
  return (
    <div>
      <Header></Header>
      <div className='min-h-full'>
         <CourseDesc/>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default CourseView
