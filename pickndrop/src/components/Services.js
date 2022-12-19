import React from 'react'
import ServiceComponent from './ServiceComponent';

const Services = () => {
  return (
    <>
    <div className="h-[100vh]">
      <h1 className="text-center font-semibold text-3xl my-5">Our Services</h1>
      <div className="flex flex-wrap justify-center items-center">
        <div className="w-[35rem] h-[15rem] m-3 flex cursor-pointer">
          <div className="w-[50%] h-full flex items-center justify-center">
            <img src="images/auto-lg.webp" alt="" />
          </div>
          <div className="px-3 flex flex-col justify-center ml-3">
            <h1 className="text-xl font-semibold">Auto Rikshaw</h1>
            <p className="max-w-full text-sm mt-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, veritatis?</p>
          </div>
        </div>
        <div className="w-[35rem] h-[15rem] m-3 flex cursor-pointer">
          <div className="w-[50%] h-full flex items-center justify-center">
            <img src="images/bike-lg.webp" alt="" />
          </div>
          <div className="px-3 flex flex-col justify-center ml-3">
            <h1 className="text-xl font-semibold">Bike Service</h1>
            <p className="max-w-full text-sm mt-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, veritatis?</p>
          </div>
        </div>
        <div className="w-[35rem] h-[15rem] m-3 flex cursor-pointer">
          <div className="w-[50%] h-full flex items-center justify-center">
            <img src="images/carintracity.webp" alt="" />
          </div>
          <div className="px-3 flex flex-col justify-center ml-3">
            <h1 className="text-xl font-semibold">Intracity Car</h1>
            <p className="max-w-full text-sm mt-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, veritatis?</p>
          </div>
        </div>
        <div className="w-[35rem] h-[15rem] m-3 flex cursor-pointer">
          <div className="w-[50%] h-full flex items-center justify-center">
            <img src="images/carwatch.webp" alt="" />
          </div>
          <div className="px-3 flex flex-col justify-center ml-3">
            <h1 className="text-xl font-semibold">Rental Car</h1>
            <p className="max-w-full text-sm mt-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, veritatis?</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
<p>hello</p>

export default Services;