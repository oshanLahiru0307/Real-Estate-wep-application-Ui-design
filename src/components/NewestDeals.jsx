import React from 'react'
import {BsSuitHeart} from 'react-icons/bs'
import {IoBedOutline, IoLocateOutline} from 'react-icons/io5'
import {GiBathtub, GiHomeGarage} from 'react-icons/gi'
import {AiOutlineDoubleRight} from 'react-icons/ai'


import house1 from '../assets/house1.jpg'
import house2 from '../assets/house2.jpg'
import house3 from '../assets/house3.jpg'
import house4 from '../assets/house4.jpg'
import house5 from '../assets/house5.jpg'
import house6 from '../assets/house6.jpg'
import house7 from '../assets/house12.jpg'
import house8 from '../assets/house7.jpg'
import house9 from '../assets/house14.jpg'
import house10 from '../assets/house10.jpg'


const NewestDeals = () => {
  return (
    <div className='py-10'>
      <p className='w-16 px-4 py-1 bg-yellow-100 rounded-lg text-sm'>NEW</p>
      <h1 className='text-4xl font-bold'>NEWEST DELAS</h1>
      <div className='deals grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 py-10'>
 
        <div className='deal h-[350px] bg-white drop-shadow-2xl rounded-xl'>
          <div className='relative h-[60%]'>
            <img src={house1} size={'1.5rem'} className='w-full object-cover rounded-t-xl' alt='img'/>
            <div className='absolute top-0 right-0 p-4'>
              <BsSuitHeart size={'1.5rem'} className='text-white'/>
            </div>
          </div>

        <div className='p-4 space-y-4'>
          <div className='flex space-x-5 items-center'>

            <div className='flex items-center space-x-1'>
              <IoBedOutline/>
              <p className='text-sm text-gray-400'>5 bed</p>
            </div>

            <div  className='flex items-center space-x-1'>
              <GiBathtub/>
              <p className='text-sm text-gray-400'>3 bat</p>
            </div>

            <div className='flex items-center space-x-1'>
              <IoBedOutline/>
              <p className='text-sm text-gray-400'>1 gar</p>
            </div>
            </div>
            <h1 className='text-2xl font-semibold'>$110,000</h1>

            <div className='flex items-center space-x-2'>
              <IoLocateOutline/>
              <p className='text-sm text-gray-400'>Kissimee, Florida US</p>
            </div>
          </div>
        </div>

        <div className='deal h-[350px] bg-white drop-shadow-2xl rounded-xl'>
          <div className='relative h-[60%]'>
            <img src={house2} size={'1.5rem'} className='w-full object-cover rounded-t-xl' alt='img'/>
            <div className='absolute top-0 right-0 p-4'>
              <BsSuitHeart size={'1.5rem'} className='text-white'/>
            </div>
          </div>

        <div className='p-4 space-y-4'>
          <div className='flex space-x-5 items-center'>

            <div className='flex items-center space-x-1'>
              <IoBedOutline/>
              <p className='text-sm text-gray-400'>5 bed</p>
            </div>

            <div  className='flex items-center space-x-1'>
              <GiBathtub/>
              <p className='text-sm text-gray-400'>4 bat</p>
            </div>

            <div className='flex items-center space-x-1'>
              <IoBedOutline/>
              <p className='text-sm text-gray-400'>1 gar</p>
            </div>
            </div>
            <h1 className='text-2xl font-semibold'>$150,000</h1>

            <div className='flex items-center space-x-2'>
              <IoLocateOutline/>
              <p className='text-sm text-gray-400'>Kissimee, Florida US</p>
            </div>
          </div>
        </div>

        <div className='deal h-[350px] bg-white drop-shadow-2xl rounded-xl'>
          <div className='relative h-[60%]'>
            <img src={house3} size={'1.5rem'} className='w-full object-cover rounded-t-xl' alt='img'/>
            <div className='absolute top-0 right-0 p-4'>
              <BsSuitHeart size={'1.5rem'} className='text-white'/>
            </div>
          </div>

        <div className='p-4 space-y-4'>
          <div className='flex space-x-5 items-center'>

            <div className='flex items-center space-x-1'>
              <IoBedOutline/>
              <p className='text-sm text-gray-400'>5 bed</p>
            </div>

            <div  className='flex items-center space-x-1'>
              <GiBathtub/>
              <p className='text-sm text-gray-400'>3 bat</p>
            </div>

            <div className='flex items-center space-x-1'>
              <IoBedOutline/>
              <p className='text-sm text-gray-400'>1 gar</p>
            </div>
            </div>
            <h1 className='text-2xl font-semibold'>$110,000</h1>

            <div className='flex items-center space-x-2'>
              <IoLocateOutline/>
              <p className='text-sm text-gray-400'>Kissimee, Florida US</p>
            </div>
          </div>
        </div>

        <div className='deal h-[350px] bg-white drop-shadow-2xl rounded-xl'>
          <div className='relative h-[60%]'>
            <img src={house4} size={'1.5rem'} className='w-full object-cover rounded-t-xl' alt='img'/>
            <div className='absolute top-0 right-0 p-4'>
              <BsSuitHeart size={'1.5rem'} className='text-white'/>
            </div>
          </div>

        <div className='p-4 space-y-4'>
          <div className='flex space-x-5 items-center'>

            <div className='flex items-center space-x-1'>
              <IoBedOutline/>
              <p className='text-sm text-gray-400'>3 bed</p>
            </div>

            <div  className='flex items-center space-x-1'>
              <GiBathtub/>
              <p className='text-sm text-gray-400'>2 bat</p>
            </div>

            <div className='flex items-center space-x-1'>
              <IoBedOutline/>
              <p className='text-sm text-gray-400'>1 gar</p>
            </div>
            </div>
            <h1 className='text-2xl font-semibold'>$90,000</h1>

            <div className='flex items-center space-x-2'>
              <IoLocateOutline/>
              <p className='text-sm text-gray-400'>Kissimee, Florida US</p>
            </div>
          </div>
        </div>

        <div className='deal h-[350px] bg-white drop-shadow-2xl rounded-xl'>
          <div className='relative h-[60%]'>
            <img src={house5} size={'1.5rem'} className='w-full object-cover rounded-t-xl' alt='img'/>
            <div className='absolute top-0 right-0 p-4'>
              <BsSuitHeart size={'1.5rem'} className='text-white'/>
            </div>
          </div>

        <div className='p-4 space-y-4'>
          <div className='flex space-x-5 items-center'>

            <div className='flex items-center space-x-1'>
              <IoBedOutline/>
              <p className='text-sm text-gray-400'>5 bed</p>
            </div>

            <div  className='flex items-center space-x-1'>
              <GiBathtub/>
              <p className='text-sm text-gray-400'>3 bat</p>
            </div>

            <div className='flex items-center space-x-1'>
              <IoBedOutline/>
              <p className='text-sm text-gray-400'>1 gar</p>
            </div>
            </div>
            <h1 className='text-2xl font-semibold'>$110,000</h1>

            <div className='flex items-center space-x-2'>
              <IoLocateOutline/>
              <p className='text-sm text-gray-400'>Kissimee, Florida US</p>
            </div>
          </div>
        </div>

        <div className='deal h-[350px] bg-white drop-shadow-2xl rounded-xl'>
          <div className='relative h-[60%]'>
            <img src={house6} size={'1.5rem'} className='w-full object-cover rounded-t-xl' alt='img'/>
            <div className='absolute top-0 right-0 p-4'>
              <BsSuitHeart size={'1.5rem'} className='text-white'/>
            </div>
          </div>

        <div className='p-4 space-y-4'>
          <div className='flex space-x-5 items-center'>

            <div className='flex items-center space-x-1'>
              <IoBedOutline/>
              <p className='text-sm text-gray-400'>4 bed</p>
            </div>

            <div  className='flex items-center space-x-1'>
              <GiBathtub/>
              <p className='text-sm text-gray-400'>2 bat</p>
            </div>

            <div className='flex items-center space-x-1'>
              <IoBedOutline/>
              <p className='text-sm text-gray-400'>1 gar</p>
            </div>
            </div>
            <h1 className='text-2xl font-semibold'>$70,000</h1>

            <div className='flex items-center space-x-2'>
              <IoLocateOutline/>
              <p className='text-sm text-gray-400'>Kissimee, Florida US</p>
            </div>
          </div>
        </div>

        <div className='deal h-[350px] bg-white drop-shadow-2xl rounded-xl'>
          <div className='relative h-[60%]'>
            <img src={house7} size={'1.5rem'} className='w-full object-cover rounded-t-xl' alt='img'/>
            <div className='absolute top-0 right-0 p-4'>
              <BsSuitHeart size={'1.5rem'} className='text-white'/>
            </div>
          </div>

        <div className='p-4 space-y-4'>
          <div className='flex space-x-5 items-center'>

            <div className='flex items-center space-x-1'>
              <IoBedOutline/>
              <p className='text-sm text-gray-400'>4 bed</p>
            </div>

            <div  className='flex items-center space-x-1'>
              <GiBathtub/>
              <p className='text-sm text-gray-400'>3 bat</p>
            </div>

            <div className='flex items-center space-x-1'>
              <IoBedOutline/>
              <p className='text-sm text-gray-400'>1 gar</p>
            </div>
            </div>
            <h1 className='text-2xl font-semibold'>$90,000</h1>

            <div className='flex items-center space-x-2'>
              <IoLocateOutline/>
              <p className='text-sm text-gray-400'>Kissimee, Florida US</p>
            </div>
          </div>
        </div>

        <div className='deal h-[350px] bg-white drop-shadow-2xl rounded-xl'>
          <div className='relative h-[60%]'>
            <img src={house8} size={'1.5rem'} className='w-full object-cover rounded-t-xl' alt='img'/>
            <div className='absolute top-0 right-0 p-4'>
              <BsSuitHeart size={'1.5rem'} className='text-white'/>
            </div>
          </div>

        <div className='p-4 space-y-4'>
          <div className='flex space-x-5 items-center'>

            <div className='flex items-center space-x-1'>
              <IoBedOutline/>
              <p className='text-sm text-gray-400'>5 bed</p>
            </div>

            <div  className='flex items-center space-x-1'>
              <GiBathtub/>
              <p className='text-sm text-gray-400'>3 bat</p>
            </div>

            <div className='flex items-center space-x-1'>
              <IoBedOutline/>
              <p className='text-sm text-gray-400'>1 gar</p>
            </div>
            </div>
            <h1 className='text-2xl font-semibold'>$120,000</h1>

            <div className='flex items-center space-x-2'>
              <IoLocateOutline/>
              <p className='text-sm text-gray-400'>Kissimee, Florida US</p>
            </div>
          </div>
        </div>

        <div className='deal h-[350px] bg-white drop-shadow-2xl rounded-xl'>
          <div className='relative h-[60%]'>
            <img src={house9} size={'1.5rem'} className='w-full object-cover rounded-t-xl' alt='img'/>
            <div className='absolute top-0 right-0 p-4'>
              <BsSuitHeart size={'1.5rem'} className='text-white'/>
            </div>
          </div>

        <div className='p-4 space-y-4'>
          <div className='flex space-x-5 items-center'>

            <div className='flex items-center space-x-1'>
              <IoBedOutline/>
              <p className='text-sm text-gray-400'>3 bed</p>
            </div>

            <div  className='flex items-center space-x-1'>
              <GiBathtub/>
              <p className='text-sm text-gray-400'>2 bat</p>
            </div>

            <div className='flex items-center space-x-1'>
              <IoBedOutline/>
              <p className='text-sm text-gray-400'>1 gar</p>
            </div>
            </div>
            <h1 className='text-2xl font-semibold'>$70,000</h1>

            <div className='flex items-center space-x-2'>
              <IoLocateOutline/>
              <p className='text-sm text-gray-400'>Kissimee, Florida US</p>
            </div>
          </div>
        </div>

        <div className='deal h-[350px] bg-white drop-shadow-2xl rounded-xl'>
          <div className='relative h-[60%]'>
            <img src={house10} size={'1.5rem'} className='w-full object-cover rounded-t-xl' alt='img'/>
            <div className='absolute top-0 right-0 p-4'>
              <BsSuitHeart size={'1.5rem'} className='text-white'/>
            </div>
          </div>

        <div className='p-4 space-y-4'>
          <div className='flex space-x-5 items-center'>

            <div className='flex items-center space-x-1'>
              <IoBedOutline/>
              <p className='text-sm text-gray-400'>5 bed</p>
            </div>

            <div  className='flex items-center space-x-1'>
              <GiBathtub/>
              <p className='text-sm text-gray-400'>3 bat</p>
            </div>

            <div className='flex items-center space-x-1'>
              <IoBedOutline/>
              <p className='text-sm text-gray-400'>1 gar</p>
            </div>
            </div>
            <h1 className='text-2xl font-semibold'>$80,000</h1>

            <div className='flex items-center space-x-2'>
              <IoLocateOutline/>
              <p className='text-sm text-gray-400'>Kissimee, Florida US</p>
            </div>
          </div>
        </div>
      
    </div>

    <div className='w-full flex justify-center py-5'>
      <button className='bg-yellow-200 px-5 py-2 rounded-md text-xl flex items-center space-x-2'>View more>></button>
    </div>
  </div>
  )
}

export default NewestDeals
