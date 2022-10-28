import React from 'react'
import Profile_Img from './assets/Profile_img.jpg'
import Share_Link from './assets/share_btn.png'

export const Image = () => {
  return (
    <div>
    <img src={Share_Link} className="ml-[18.5rem] mt-[2rem] mb-[-4rem] sm:mt-2 sm:ml-[32.5rem] sm:mt-[2rem] sm:mb-[-4rem] md:mt-16 md:ml-[32.5rem] md:mt-[2rem] md:mb-[-4rem] lg:ml-[45rem] lg:mt-[2rem] lg:mb-[-4rem] xl:ml-[62rem] xl:mt-[2rem] xl:mb-[-4rem]" alt="Profile Pic" id="share_link"/> 
    <img src={Profile_Img} className="w-24 h-24 rounded-full mt-16 ml-[9.8rem] sm:w-24 sm:h-24 sm:rounded-full sm:mt-16 sm:ml-[20rem] md:w-24 md:h-24 md:rounded-full md:mt-16 md:ml-[22.5rem] lg:ml-[31rem] xl:ml-[42rem]" alt="Profile Pic" id="profile__img"/> 
    <p className="font-bold font-roboto text-center ml-[.2rem] mr-[-18px] leading-[66px] decoration-[8px] text-slate-900 sm:font-roboto sm:font-bold sm:text-center sm:ml-[-4rem] sm:mr-[-6rem] sm:leading-[66px] sm:decoration-[8px] sm:text-slate-900  md:font-roboto md:font-bold md:text-center md:ml-[-2rem] sm:mr-[-6rem] md:leading-[66px] md:decoration-[8px] md:text-slate-900 lg:ml-[-1rem]">Chimezie Tochi</p>
    </div>
  )
}

// export default Image