import React, {useState} from 'react'
import "../css/home.css";
import RideOrDrive from './RideOrDrive';
import Services from './Services';

const Home = () => {
  const [currentForm, setCurrentForm] = useState(true);
  const ride = () => {
    setCurrentForm(true);
  }
  const drive = () => {
    setCurrentForm(false);
  }
  
  return (
    <>
      <div className="z-50 booking w-[42.5%] h-[75vh] bg-white absolute inset-x-[7.5%] top-[18.5%]">
        <div className="w-full h-[22.5%] flex border-b">
          <div className="w-[50%] grid place-items-center cursor-pointer"  onClick={ride}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
          </svg>
          <h3 className="-mt-7">Ride</h3>

          </div>
          <div className="w-[50%] grid place-items-center cursor-pointer"  onClick={drive}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
          </svg>
          <h3 className="-mt-7">Drive</h3>
          </div>
        </div>
        {
          currentForm ? 
          <RideOrDrive 
            title= "Request a ride now"
            type1= "text"
            type2= "text"
            name1="source"
            name2="destination"
            id1="source"
            id2="destination"
            ph1= "Enter pickup location"
            ph2= "Enter Destination"
            btn1= "Request now"
            btn2= "Schedule for later"
          /> 
          : 
          <RideOrDrive 
            title= "Get paid by driving"
            type1= "email"
            type2= "password"
            name1="email"
            name2="password"
            id1="email"
            id2="password"
            ph1= "Enter your email"
            ph2= "Enter your password"
            btn1= "Sign in"
            btn2= "Sign up"
          />
        }
      </div>
      <div className="relative w-full top-3/4">
        <img src="images/homebg_full.webp" alt="Home Image" />
      </div>

      <Services />


      <div className="h-[100vh] m-7 flex">
        <div className="w-[50%] h-full">
          <img src="images/gettaxianytime.jpg" alt="" />
        </div>
        <div className="flex flex-col justify-center pl-20">
          <h1 className="font-bold text-3xl my-3">Get a taxi Anytime, Anywhere.</h1>
          <p className="max-w-[80%]">Book a taxi anytime and anywhere you want and get a taxi within 20 minutes.</p>
          <a href="/" className="my-3 text-blue-700">Learn More</a>
        </div>
      </div>
      
      <div className="h-[100vh] m-7 flex">
        <div className="flex flex-col justify-center pl-20">
          <h1 className="font-bold text-3xl my-3">We care for you.</h1>
          <p className="max-w-[80%]">We're here to provide you with a hassle free experience that makes your life easier.</p>
          <a href="/" className="my-3 text-blue-700">Learn More</a>
        </div>
        <div className="w-[50%] h-full">
          <img src="images/careforyou2.jpg" alt="" />
        </div>
      </div>
    </>
  )
}

export default Home;