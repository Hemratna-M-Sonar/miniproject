import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import { useRegisterUserMutation } from '../services/userAuthApi';
import {storeToken} from '../services/localStorageService';

// const UserRegistration = () => {


// }
const Signup = () => {
    const [error, setError] = useState({
        status:false,
        msg:"",
        type:""
    });

    const navigate = useNavigate();
    const [registerUser, {isLoading}] = useRegisterUserMutation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data=new FormData(e.currentTarget);
        const actualData = {
            name: data.get('name'),
            email: data.get('email'),
            password: data.get('password'),
            confirmPassword: data.get('confirmPassword'),
            tc: data.get('tc')

        }
        console.log(actualData);
        if (actualData.name && actualData.email && actualData.password && actualData.confirmPassword && actualData.tc){

            if (actualData.password === actualData.confirmPassword){
                 
                const res = await registerUser(actualData);
                console.log(res)
                if (res.data.status === "Success"){
                    // token store krna hai
                    storeToken(res.data.token)
                    navigate('/'); 
                } 
                if (res.data.status === "failed") {
                    setError({status:true, msg: res.data.message, type:"error"}) 
                }
            } else {
                setError({status:true, msg: 'Password does not match', type:"error"})
            }

        } else {
            setError({status:true, msg: 'All fields are required', type:"error"})
        }
    }
  return (
    <>
        <div className="flex h-[90vh] items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
            <div>
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                Create your Free Account
                </h2>
            </div>
            <form className="mt-15 space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md shadow-sm">
                <div className="mb-3">
                    <label htmlFor="name" className="sr-only">
                    Email address
                    </label>
                    <p className="font-semibold">Name</p>
                    <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 sm:text-sm"
                    // placeholder="Email address"
                    />
                </div>
                <div>
                    <label htmlFor="email-address" className="sr-only">
                    Email address
                    </label>
                    <p className="font-semibold">Email Address</p>
                    <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 sm:text-sm"
                    // placeholder="Email address"
                    />
                </div>
                <div className="my-3">
                    <label htmlFor="password" className="sr-only">
                    Password
                    </label>
                    <p className="font-semibold">Password</p>
                    <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 sm:text-sm"
                    // placeholder="Password"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="sr-only">
                    Confirm Password
                    </label>
                    <p className="font-semibold">Confirm password</p>
                    <input
                    id="confirmpassword"
                    name="confirmPassword"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 sm:text-sm"
                    // placeholder="Password"
                    />
                </div>
                </div>

                <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <input
                    id="tc"
                    name="tc"
                    type="checkbox"
                    value={true}
                    required
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Terms and Conditions
                    </label>
                </div>

                {/* <div className="text-sm">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot your password?
                    </a>
                </div> */}
                </div>

                <div>
                <button
                    type="submit"
                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    {/* <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> */}
                    </span>
                    Sign up
                </button>
                </div>
            </form>
            {

            error ? <span className="flex items-center my-3 justify-center border py-1">{error.msg} </span> : ""
            }
            </div>
        </div>
    </>
  )
}

export default Signup