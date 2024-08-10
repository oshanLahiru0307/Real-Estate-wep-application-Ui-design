import React from 'react'
import {FaGooglePay} from 'react-icons/fa'
import {IoLogoAppleAppstore} from 'react-icons/io5'
import {FiTwitter,FiFacebook} from 'react-icons/fi'
import {AiOutlineInstagram,AiOutlineYoutube,AiOutlineGithub} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='mt-5'>
      <div className='w-full py-7'>
        <div className='flex flex-col justify-center items-center space-y-5'>
          <h1 className='text-xl md:text-3xl font-bold'>Download The Real Estate app</h1>
          <div className='flex space-x-5'>
            <div className='flex items-center space-x-4 px-2 bg-white rounded drop-shadow-xl'>
              <FaGooglePay size={'3rem'}/>
              <div>
                <p className='text-sm font-bold'>Get On</p>
                <h1>Google Play</h1>
              </div>
            </div>

            <div className='flex items-center space-x-4 px-2 bg-white rounded drop-shadow-xl'>
              <IoLogoAppleAppstore size={'1.5rem'}/>
              <div>
                <p className='text-sm font-bold'>Get On</p>
                <h1>Apple Store</h1>
              </div>
            </div>

          </div>
        </div>
      </div>

      <footer className='w-full py-3 bg-neutral-800 text-white'>
        <div className='w-11/12 md:1/3 m-auto flex flex-col items-center text-center space-y-3'>
          <h1>RealEstate</h1>
        <ul className='flex items-center space-x-5 text-sm'>
          <li>Features</li>
          <li>Trending</li>
          <li>About</li>
        </ul>
        <div className='flex items-center space-x-5'>
          <FiTwitter size={'1.5rem'}/>
          <AiOutlineInstagram size={'2rem'}/>
          <AiOutlineYoutube size={'2rem'}/>
          <FiFacebook size={'2rem'}/>
          <AiOutlineGithub size={'1.5rem'}/>
        </div>
        <p className='p-3 text-sm text-gray-400'>Lorem ipsum, placeholder or dummy text used in typesetting and graphic</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
