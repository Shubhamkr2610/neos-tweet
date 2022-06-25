import React from 'react'
import './header.css'
import { logo } from '../../assets';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap py-2 px-12 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src={logo} alt="logo" className="w-12 h-12 text-white p-2 bg-white-500 rounded-full" />
            <span className="ml-3 text-xl">Neos-tweet</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center  bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base">
          <Link to='/login'>
            <LoginOutlinedIcon/>
          </Link>
          </nav>  
        </div>
      </header>
    </>
    
  )
}
