import React from 'react'
import Ingressive from './assets/Ingressive_logo.png'

const Contacts = () => {
  return (
    <div>
      <h1 className='
      font-body 
      ml-2 sm:ml-[1rem] md:ml-[.8rem] lg:ml-[6rem] xl:ml-[22rem]
      mt-[2rem]
      font-semibold 
      text-[2.5rem]'>
        Contact Me
      </h1>
      <p className='
      text-xl 
      ml-2 sm:ml-[1rem] md:ml-[1rem] lg:ml-[6rem] xl:ml-[22rem]
      sm:leading-normal
      font-body 
      '>
        Hi there, contact me to ask me about anything you have in mind
      </p>

      <div>
      <p className='
      font-semibold 
      font-body 
      mt-12
      ml-2 sm:ml-[1rem] lg:ml-[6rem] xl:ml-[22rem]
      text-lg
      text-[1.3rem]
      '>
        First name
        </p>
      <input id="first_name" placeholder="Enter your first name" className='
      font-body 
      mt-2 
      text-lg 
      py-2 
      px-3
      sm:ml-[1rem]
      h-[4rem] 
      rounded-lg 
      w-[22.6rem] sm:w-[38.6rem] md:w-[44rem] lg:w-[48.7rem]
      rounded-lg 
      border 
      border-solid 
      ml-2 lg:ml-[6rem] xl:ml-[22rem]
      text-[1.3rem]
      ' />
      </div>

      <div>
      <p className='
      font-semibold 
      font-body 
      mt-12 
      ml-2 sm:ml-[1rem] lg:ml-[6rem] xl:ml-[22rem]
      text-lg
      text-[1.4rem]
      '>
        Last name
        </p>
      <input id="last_name" placeholder="Enter your Last name" className='
      font-body 
      mt-2 
      text-lg 
      py-2 
      h-[4rem]
      px-3 
      h-[4rem]
      rounded 
      w-[22.6rem] sm:w-[38.6rem] md:w-[44rem] lg:w-[48.7rem]
      rounded-lg 
      border 
      border-solid 
      ml-2 sm:ml-[1rem] lg:ml-[6rem] xl:ml-[22rem]
      text-[1.3rem]
      ' />
      </div>

      <div>
      <p className='
      font-semibold 
      font-body
      text-[1.4rem] 
      mt-12 
      ml-2 sm:ml-[1rem] lg:ml-[6rem] xl:ml-[22rem]
      text-lg'>
        Email
        </p>
      <input id="email" placeholder="yourname@email.com" className='
      font-body 
      mt-2 
      text-lg 
      py-2 
      px-3 
      text-[1.3rem] 
      w-[22.6rem] sm:w-[38.6rem] md:w-[44rem] lg:w-[48.7rem]
      h-[4rem]
      rounded-lg 
      border 
      border-solid 
      ml-2 sm:ml-[1rem] lg:ml-[6rem] xl:ml-[22rem]' 
      />
      </div>

      <div>
      <p className='
      font-semibold 
      font-body 
      mt-12 
      ml-2 sm:ml-[1rem] lg:ml-[6rem] xl:ml-[22rem] 
      text-lg
      text-[1.4rem]
      '>
        Message
        </p>
      <textarea id="message" placeholder="Send me a message and I will reply you as soon as possible..." className='
      font-body 
      mt-2 
      text-lg 
      py-2 
      px-3 
      rounded 
      w-[22.6rem] sm:w-[38.6rem] md:w-[44rem] lg:w-[48.7rem]
      h-[6rem]
      text-[1.3rem] 
      rounded-xl 
      border 
      border-solid 
      ml-2 sm:ml-[1rem] lg:ml-[6rem] xl:ml-[22rem]' 
      ></textarea>
      </div>

      <div className='flex flex-row mt-12'>
        <input className='
        w-14 
        h-6 
        mt-[.2rem] 
        ml-3 sm:ml-[.5rem] lg:ml-[5rem] xl:ml-[21rem] 
        mt-6 
        rounded-full 
        border-gray-300' type="checkbox" />
        <label className='
        ml-2 
        text-[1.1rem] 
        font-body'>You agree to providing your data to Chimezie Tochi who may contact you</label>
      </div>

      

        <div className="
        rounded-lg 
        border-x-[11.4rem] sm:border-x-[19.5rem] md:border-x-[22rem] lg:border-x-[24.5rem]
        border-y-[.8rem] 
        ml-2 sm:ml-[1rem] md:ml-[1rem] lg:ml-[6rem] xl:ml-[22rem]
        w-[7.2rem] 
        border-blue-500 
        border-solid
        mt-12 " 
        id="btn__submit">
          <h4 className='
          ml-[-8rem] 
          mr-[-8rem]
          text-center 
          text-white
          text-[1.1rem]'>
            Send Message
            </h4>
          </div>
        
          <div className='border-b-2 ml-3 mr-3 mt-[8rem]'></div>
       
      <div className="flex-none flex-column leading-10 ml-9 mb-8 mt-6 sm:flex sm:flex-row sm:justify-around sm:mt-10">
      <div className='flex flex-row sm:ml-[-2rem]'>
      <p className='text-[2rem] font-bold 
      font-body'>Zuri</p>
      <span className='mt-6 rounded-full border-x-[.3rem] sm:border-x-[.375rem] border border-solid w-2 h-2 border-red-600'></span>
      <p className='text-[2rem] font-bold 
      font-body'>Internship</p>
      </div>
      <p>HNG Internship 9 Frontend Task</p>
      <img src={Ingressive} alt="Ingressive for Good"/>
      </div>
         
      </div>
    
  )
}

export default Contacts