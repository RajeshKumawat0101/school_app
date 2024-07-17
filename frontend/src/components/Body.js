import React from 'react'
import banner from '../assets/bannwer.webp'
const Body = () => {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20  px-3 flex flex-col md:flex-row my-10 '>
      <div className='w-full order-2 md:order-1 md:w-1/2 mt-6  md:mt-32'>
      <div className='space-y-12'>
      <h1 className='text-4xl font-bold'>  Hello ,Welcome here to learn something New everyday !!!</h1>
      <p className='text-xl'>learn So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.</p>
      <label className="input input-bordered flex items-center gap-2">
       <input type="text" className="grow" placeholder="daisy@site.com" />
        </label>
       <button className="btn btn-active   btn-secondary">Secondary</button>

      </div>
      </div>
      <div className='mt-8 md:mt-16 order-1 '>
        <img src={banner} alt='this is bner' className='rounded-xl' />
         </div>
    </div>
    </>
  )
}

export default Body
