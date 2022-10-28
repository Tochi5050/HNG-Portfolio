import React from 'react'
import Slack from './assets/slack logo.png'
import Zuri from './assets/Zuri_logo.png'
import Ingressive from './assets/Ingressive_logo.png'
import Github from './assets/Github.png'

export const ButtonsList = () => {
  return (
    <div>
      <div className="cursor-pointer w-[90%] h-[76px] bg-gray-100 hover:bg-gray-300 ml-[1.45rem] rounded-lg sm:cursor-pointer sm:w-[50%] sm:h-[76px] sm:bg-gray-100 sm:hover:bg-gray-300 sm:ml-[11rem] sm:rounded-lg md:cursor-pointer md:w-[50%] md:h-[76px] md:bg-gray-100 md:hover:bg-gray-300 md:ml-[13rem] md:rounded-lg lg:cursor-pointer lg:w-[50%] lg:h-[76px] lg:bg-gray-100 lg:hover:bg-gray-300 lg:ml-[17.8rem] lg:rounded-lg xl:ml-[23.2rem]">
        <p className=" font-roboto text-center ml-[-2rem] mr-[-18px] mt-6 pt-6 sm:text-center sm:ml-1 mr-[-18px] sm:mt-6 sm:pt-6" id="twitter">
          @ctochi46
        </p>
      </div>

      <div className="cursor-pointer w-[90%] h-[76px] bg-gray-100 hover:bg-gray-300 ml-[1.45rem] rounded-lg md:cursor-pointer md:w-[50%] md:h-[76px] md:bg-gray-100 md:hover:bg-gray-300 md:ml-[13rem] md:rounded-lg sm:cursor-pointer sm:w-[50%] sm:h-[76px] sm:bg-gray-100 sm:hover:bg-gray-300 sm:ml-[11rem] sm:rounded-lg lg:cursor-pointer lg:w-[50%] lg:h-[76px] lg:bg-gray-100 lg:hover:bg-gray-300 lg:ml-[17.8rem] lg:rounded-lg xl:ml-[23.2rem]">
        <p className="font-roboto text-center ml-[-2rem] mr-[-18px] mt-6 pt-6 sm:text-center sm:ml-1 mr-[-18px] sm:mt-6 sm:pt-6">
          <a href="https://training.zuri.team/" id="btn_zuri">
          Zuri Team
          </a>
        </p>
      </div>

      <div className="cursor-pointer w-[90%] h-[76px] bg-gray-100 hover:bg-gray-300 ml-[1.45rem] rounded-lg md:cursor-pointer md:w-[50%] md:h-[76px] md:bg-gray-100 md:hover:bg-gray-300 md:ml-[13rem] md:rounded-lg sm:cursor-pointer sm:w-[50%] sm:h-[76px] sm:bg-gray-100 sm:hover:bg-gray-300 sm:ml-[11rem] sm:rounded-lg lg:cursor-pointer lg:w-[50%] lg:h-[76px] lg:bg-gray-100 lg:hover:bg-gray-300 lg:ml-[17.8rem] lg:rounded-lg xl:ml-[23.2rem]">
        <p className="font-roboto text-center ml-[-2rem] mr-[-18px] mt-6 pt-6 sm:text-center sm:ml-1 mr-[-18px] sm:mt-6 sm:pt-6">
        <a href="http://books.zuri.team" id="books">
          Find books about design & coding
          </a>
        </p>
      </div>

      <div className="cursor-pointer w-[90%] h-[76px] bg-gray-100 hover:bg-gray-300 ml-[1.45rem] rounded-lg md:cursor-pointer md:w-[50%] md:h-[76px] md:bg-gray-100 md:hover:bg-gray-300 md:ml-[13rem] md:rounded-lg sm:cursor-pointer sm:w-[50%] sm:h-[76px] sm:bg-gray-100 sm:hover:bg-gray-300 sm:ml-[11rem] sm:rounded-lg lg:cursor-pointer lg:w-[50%] lg:h-[76px] lg:bg-gray-100 lg:hover:bg-gray-300 lg:ml-[17.8rem] lg:rounded-lg xl:ml-[23.2rem]">
        <p className="font-roboto text-center ml-[-2rem] mr-[-18px] mt-6 pt-6 sm:text-center sm:ml-1 mr-[-18px] sm:mt-6 sm:pt-6">
        <a href=" https://books.zuri.team/python-for-beginners?ref_id=Tochi" id="book_python">
          Get the best python books here!
          </a>
        </p>
      </div>

      <div className="cursor-pointer w-[90%] h-[76px] bg-gray-100 hover:bg-gray-300 ml-[1.45rem] rounded-lg md:cursor-pointer md:w-[50%] md:h-[76px] md:bg-gray-100 md:hover:bg-gray-300 md:ml-[13rem] md:rounded-lg sm:cursor-pointer sm:w-[50%] sm:h-[76px] sm:bg-gray-100 sm:hover:bg-gray-300 sm:ml-[11rem] sm:rounded-lg lg:cursor-pointer lg:w-[50%] lg:h-[76px] lg:bg-gray-100 lg:hover:bg-gray-300 lg:ml-[17.8rem] lg:rounded-lg xl:ml-[23.2rem]">
        <p className="font-roboto text-sm text-center ml-[-2rem] mr-[-18px] mt-6 pt-6 sm:text-center sm:ml-1 mr-[-18px] sm:mt-6 sm:pt-6">
        <a href="https://background.zuri.team" id="pitch">
         Wanna know about your dev?, start here!
         </a>
        </p>
      </div>

      <div className="cursor-pointer w-[90%] h-[76px] bg-gray-100 hover:bg-gray-300 ml-[1.45rem] rounded-lg md:cursor-pointer md:w-[50%] md:h-[76px] md:bg-gray-100 md:hover:bg-gray-300 md:ml-[13rem] md:rounded-lg sm:cursor-pointer sm:w-[50%] sm:h-[76px] sm:bg-gray-100 sm:hover:bg-gray-300 sm:ml-[11rem] sm:rounded-lg lg:cursor-pointer lg:w-[50%] lg:h-[76px] lg:bg-gray-100 lg:hover:bg-gray-300 lg:ml-[17.8rem] lg:rounded-lg xl:ml-[23.2rem]">
        <p className="text-center ml-[-2rem] mr-[-18px] mt-6 pt-6 sm:text-center sm:ml-1 mr-[-18px] sm:mt-6 sm:pt-6 sm:">
        <a href="https://books.zuri.team/design-rules" id="book_design">
          Get free design books for your next idea
          </a>
        </p>
      </div>

      <div className='flex flex-row'>
      <img src={Slack} className="cursor-pointer w-6 h-6 rounded-full mt-6 mb-[3rem] ml-[10rem] sm:cursor-pointer sm:w-6 sm:h-6 sm:rounded-full sm:mt-6 sm:mb-[3rem] sm:ml-[20.5rem] md:cursor-pointer md:w-6 md:h-6 md:rounded-full md:mt-6 md:mb-[3rem] md:ml-[23rem] lg:cursor-pointer lg:w-6 lg:h-6 lg:rounded-full lg:mt-6 lg:mb-[3rem] lg:ml-[32rem] xl:ml-[43.2rem]" id="slack" alt="Slack Logo"/>
      <p hidden id="slack">Tochi</p>

      <img src={Github} className="cursor-pointer w-6 h-6 rounded-full mt-6 mb-[3rem] ml-[1rem] sm:cursor-pointer sm:w-6 sm:h-6 sm:rounded-full sm:mt-6 sm:mb-[3rem] sm:ml-[1rem] md:cursor-pointer md:w-6 md:h-6 md:rounded-full md:mt-6 md:mb-[3rem] md:ml-[1rem] lg:cursor-pointer lg:w-6 h-6 lg:rounded-full lg:mt-6 lg:mb-[3rem] lg:ml-[1rem] xl:ml-[1rem]" id="slack" alt="Github Logo"/>
      </div>


      <div className="border-b-2 ml-[38px] mt-[60px] mr-[18px]  sm:border-b-2 sm:ml-[11rem] sm:mt-[80px] sm:mr-[11rem] md:border-b-2 md:ml-[13rem] md:mt-[60px] md:mr-[10.5rem] lg:border-b-2 lg:ml-[280px] lg:mt-[60px] lg:mr-[208px] xl:ml-[23rem] xl:mr-[19rem]"></div>

      <div className="flex-none flex-column leading-10 ml-9 mb-8 mt-10 sm:flex sm:flex-row sm:justify-around sm:mt-10">
      <img src={Zuri} alt="Zuri Internship Logo"/>
      <p>HNG Internship 9 Frontend Task</p>
      <img src={Ingressive} alt="Ingressive for Good"/>
      </div>

    </div>
  );
}

