import React from 'react'
import Header from '../components/Header'
import Gellary from '../components/Gallery'
import Footer from '../components/Footer'
const GellaryPage = () => {
  return (
    <div>
      <Header></Header>
      <div className='min-h-full'>
  <Gellary/>
  </div>
  <Footer></Footer>
    </div>
  )
}

export default GellaryPage
