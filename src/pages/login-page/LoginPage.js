import React, { useEffect, useState } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
import { clearError, login } from '../../redux/slices/authSlice';
import { toast } from 'react-toastify';

export const LoginPage = () => {

const [username , setUserName] = useState("")
const [password, setPassword] = useState("")

    const dispatch= useDispatch()
    const navigate = useNavigate()
    const {user, error,isAuthenticated} = useSelector(state=>state.auth)
    const loginHandler= (username , password)=>{
        dispatch(login({username , password}))
    }

    useEffect(()=>{
        if(error){
            toast.error("Invalid User, not found")
        }
        if(isAuthenticated){
            toast.success(`Welcome ${user.firstName } ${user.lastName}`)
            navigate("/")
        }
        if(user){
            navigate("/")
        }
        
        dispatch(clearError())

    },[error, isAuthenticated])
  return (
    <>
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-20  flex flex-wrap justify-center items-center">
                <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col   w-full mt-10 md:mt-0">
                    <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Login</h2>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">UserName</label>
                        <input type="email" value={username} id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onInput={(e)=>setUserName(e.target.value)}/>
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                        <input type="password" value={password} id="password" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onInput={(e)=>setPassword(e.target.value)}/>
                    </div>
                    
                    <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"  onClick={()=>loginHandler(username , password)}>Login</button>
                    <button className="text-white bg-indigo-500 border-0 py-2 px-8 my-4 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={()=>{setUserName("shubham@2610");setPassword("testuser123") }}>Login with test credentials</button>
                    <h2>Do not have account ? <Link to='/signup'> Signup&#62;</Link></h2>
                </div>
            </div>
        </section>
    </>
  )
}
