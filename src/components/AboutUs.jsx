import React from 'react'
import {MdHomeRepairService} from 'react-icons/md'


const AboutUs = () => {
  return (
    <div className='w-11/12 m-auto flex flex-col md:flex-row justify-between items-center md:space-x-10 space-y-10 md:space-y-0 py-20 '>
      <div className=' flex space-x-4 md:space-x-5'>
        <div className='mt-10 space-y-4'>
          <div className='w-48 flex -col items-center bg-white text-center p-5 drop-shadow rounded-md'>
            <MdHomeRepairService size={'1.8rem'}/>
            <h1 className='text-xl font-bold'>Good Services</h1>
            <p className='text-xs'>Lorem ipsum dolar sit consectetur adipisicing elit. A, consecteturl Eum, natusl</p>
          </div>
          <div className='w-48 flex -col items-center bg-white text-center p-5 drop-shadow rounded-md'>
            <MdHomeRepairService size={'1.8rem'}/>
            <h1 className='text-xl font-bold'>Good Services</h1>
            <p className='text-xs'>Lorem ipsum dolar sit consectetur adipisicing elit. A, consecteturl Eum, natusl</p>
          </div>
        </div>
        <div className='space-y-4'>
          <div className='w-48 flex -col items-center bg-white text-center p-5 drop-shadow rounded-md'>
            <MdHomeRepairService size={'1.8rem'}/>
            <h1 className='text-xl font-bold'>Good Services</h1>
            <p className='text-xs'>Lorem ipsum dolar sit consectetur adipisicing elit. A, consecteturl Eum, natusl</p>
          </div>
          <div className='w-48 flex -col items-center bg-white text-center p-5 drop-shadow rounded-md'>
            <MdHomeRepairService size={'1.8rem'}/>
            <h1 className='text-xl font-bold'>Good Services</h1>
            <p className='text-xs'>Lorem ipsum dolar sit consectetur adipisicing elit. A, consecteturl Eum, natusl</p>
          </div>
        </div>
      </div>

        <div className='w-11/12 md:w-1/2 space-y-5'>
          <h1 className='text-6xl text-bold'>
            Know <span className='text-yellow-400'>About US</span>
          </h1>
          <p className='text-sm text-gray-400'>Lorem ipsum dolar sit consectetur adipisicing elit. A, consecteturl Eum, natusl
          Lorem ipsum dolar sit consectetur adipisicing elit. A, consecteturl Eum, natusl
          Lorem ipsum dolar sit consectetur adipisicing elit. A, consecteturl Eum, natusl
          </p>
          <button className='px-5 py-2 bg-yellow-400 rounded-md'>Read more</button>
        </div>
    </div>
  )
}

export default AboutUs
