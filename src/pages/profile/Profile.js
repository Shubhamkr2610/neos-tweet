import React from 'react';
import {useSelector} from 'react-redux';
import { logout } from '../../redux/slices/authSlice';
import { useDispatch } from 'react-redux/es/exports';
import {useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';


    export const Profile = () => {
        const dispatch = useDispatch();
        const navigate = useNavigate()
        const {user} = useSelector((state)=> state.auth)

        const logoutHandler = ()=>{
            dispatch(logout())
            toast.error("Logged out successfully")
            navigate("/") 
        }
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-20  flex flex-wrap justify-center items-center">
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col   w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Profile</h2>
                    
            <div className="relative mb-4">
              <p  className="w-full bg-white rounded border border-gray-300 text-gray-900 text-lg font-medium  py-2 px-3 leading-8" >First name - {user.firstName}</p>
              <p  className="w-full bg-white rounded border border-gray-300 text-gray-900 text-lg font-medium  py-2 px-3 leading-8" >Last name - {user.lastName}</p>
              <p  className="w-full bg-white rounded border border-gray-300 text-gray-900 text-lg font-medium  py-2 px-3 leading-8" >Email - {user.email}</p>
            </div>
                    
            <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={logoutHandler}>Logout</button>
          </div>
        </div>
      </section>
    </>
  )
}
