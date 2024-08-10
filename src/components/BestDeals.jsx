import React from 'react'
import House1 from '../assets/house7.jpg'
import House2 from '../assets/house8.jpg'
import House3 from '../assets/house9.jpg'
import House4 from '../assets/house10.jpg'
import House5 from '../assets/house11.jpg'
import House6 from '../assets/house12.jpg'

import {IoLocationOutline} from 'react-icons/io5'

const BestDeals = () => {
  return (
    <div className='w-9/12 m-auto text-center py-10'>

      <div className='text-4xl font-bold'>

        <h1>Best Deals Not be Missed</h1>
        <p className='text-xs text-gray-400 p-10'>
          Lorem ipsum, placeholder or dummy text used in typesetting and graphic
           design for previewing layouts. It features scrambled Latin text, which 
           emphasizes the design over content of the layout. It is the standard placeholder
        </p>

      </div>

      <div className='deals w-full grid lg:grid-flow-col grid-rows2 gap-8'>

        <div className='deal relative w-full col-span-2 row-span-2'>
          <img src={House1} alt='h1' className='w-full h-full rounded-xl object-cover'/>
          <div className='w-full absolute bottom-0 p-4 text-white bg:gradient-to-t from-black rounded-b-xl space-y-2'>
          <h1 className='text-1xl text-left font-bold'>Place</h1>
          <p className='flex item-center space-x-2 text-sm'><IoLocationOutline/>Kissinme, Florida Us</p>
          </div>
        </div>
        <div className='deal relative col-span-1 row-span-2'>
          <img src={House2} alt='h1' className='w-full h-full rounded-xl object-cover'/>
          <div className='w-full absolute bottom-0 p-4 text-white bg:gradient-to-t from-black rounded-b-xl space-y-2'>
          <h1 className='text-1xl text-left font-bold'>Place</h1>
          <p className='flex item-center space-x-2 text-sm'><IoLocationOutline/>Kissinme, Florida Us</p>
          </div>
        </div>
        <div className='deal relative col-span-1 row-span-1'>
          <img src={House3} alt='h1' className='w-full h-full rounded-xl object-cover'/>
          <div className='w-full absolute bottom-0 p-4 text-white bg:gradient-to-t from-black rounded-b-xl space-y-2'>
          <h1 className='text-1xl text-left font-bold'>Place</h1>
          <p className='flex item-center space-x-2 text-sm'><IoLocationOutline/>Kissinme, Florida Us</p>
          </div>
        </div>
        <div className='deal relative col-span-1 row-span-1'>
          <img src={House4} alt='h1' className='w-full h-full rounded-xl object-cover'/>
          <div className='w-full absolute bottom-0 p-4 text-white bg:gradient-to-t from-black rounded-b-xl space-y-2'>
          <h1 className='text-1xl text-left font-bold'>Place</h1>
          <p className='flex item-center space-x-2 text-sm'><IoLocationOutline/>Kissinme, Florida Us</p>
          </div>
        </div> 
        <div className='deal relative col-span-1 row-span-1'>
          <img src={House5} alt='h1' className='w-full h-full rounded-xl object-cover'/>
          <div className='w-full absolute bottom-0 p-4 text-white bg:gradient-to-t from-black rounded-b-xl space-y-2'>
          <h1 className='text-1xl text-left font-bold'>Place</h1>
          <p className='flex item-center space-x-2 text-sm'><IoLocationOutline/>Kissinme, Florida Us</p>
          </div>
        </div> 
        <div className='deal relative col-span-1 row-span-1'>
          <img src={House6} alt='h1' className='w-full h-full rounded-xl object-cover'/>
          <div className='w-full absolute bottom-0 p-4 text-white bg:gradient-to-t from-black rounded-b-xl space-y-2'>
          <h1 className='text-1xl text-left font-bold'>Place</h1>
          <p className='flex item-center space-x-2 text-sm'><IoLocationOutline/>Kissinme, Florida Us</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default BestDeals
