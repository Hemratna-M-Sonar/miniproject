
import React, {useState, Fragment} from 'react';
import {NavLink} from 'react-router-dom'; 
import { Transition } from '@headlessui/react'
import '../css/navbar.css';
import {removeToken, getToken} from '../services/localStorageService.js';
const Navbar = () => {


    const [toggle, setToggle] = useState(false);
    const [profile, setProfle] = useState(false);
    const [isTransition, setIsTransition] = useState(false);
    const [isHamburger, setIsHamburger] = useState(false);

    const token = getToken();
    console.log(token);
    const handleLogOut = () => {
        removeToken("token");
        setProfle(!profile); 
        setIsTransition(!isTransition)
    }
  return (
    <>
    <nav className="bg-black">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* <!-- Mobile menu button--> */}
                <button  onClick={() => {setToggle(!toggle); setIsHamburger(!isHamburger)}} type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white focus:outline-none" aria-controls="mobile-menu" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
 
                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                </button>
            </div>

            <div className="mt-1 flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                    <img className="block lg:hidden logoImage" style={{width: '180px'}} src="images/logo.png" alt="Your Company" />
                    <img className="hidden lg:block logoImage" src="images/logo.png" alt="Your Company" />
                </div>
                <div className="hidden sm:ml-6 mt-[2.5px] sm:block">
                    <div className="flex space-x-4">
  
                        <NavLink to="/" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Home</NavLink>

                        <NavLink to="/services" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</NavLink>


                        <NavLink to="/help" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Help</NavLink>

                        <NavLink to="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</NavLink>

                        {
                            !token ? 
                       
                        <div className="py-1.5 space-x-4 auth">
                            <NavLink to="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium " aria-current="page">Login</NavLink>

                            <NavLink to="/register" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sign up</NavLink>
                        </div>
                            : 
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 auth">
                                <div className="relative ml-3">
                                    <div>
                                        <button type="button" className="flex rounded-full bg-gray-800 text-sm focus:outline-none" id="user-menu-button" aria-expanded="false" aria-haspopup="true" onClick={()=>{setProfle(!profile); setIsTransition(!isTransition)}}>
                                        <span className="sr-only">Open user menu</span>
                                        <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                        </button>
                                    </div>

                                    <Transition
                                        as={Fragment}
                                        show={isTransition}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                    <div className={`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${profile ? '' : 'hidden'} profileDiv`} role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">

                                        <NavLink to="/" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">Your Profile</NavLink>
                                        <NavLink to="/" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1">Settings</NavLink>
                                        <NavLink to="/" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-2" onClick={handleLogOut}>Log out</NavLink>
                                    </div>
                                </Transition>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
            
            </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <Transition
                as={Fragment}
                show={isHamburger}
                enter="transition ease-in-out duration-250"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in-out duration-250"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
        >
        <div className={` ${toggle ? 'sm:hidden' : 'hidden' }`} id="mobile-menu">
            <div className="space-y-1 px-2 pt-2 pb-3">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            <NavLink to="/" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Home</NavLink>

            <NavLink to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</NavLink>

            <NavLink to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services</NavLink>

            <NavLink to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Safety</NavLink>

            <NavLink to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Help</NavLink>

            <NavLink to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</NavLink>

            <NavLink to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Login</NavLink>

            <NavLink to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Sign up</NavLink>
            </div>
        </div>
        </Transition>
    </nav>
    </>
  )
}

export default Navbar