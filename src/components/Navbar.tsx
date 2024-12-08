import React from 'react'
import { IoMenuOutline } from "react-icons/io5";


const Navbar = () => {
  return (
    <div className='container pt-6'>
        <div className='flex justify-between items-center'>
            <div className='text-xl font-medium'>Portfolio</div> 
            <ul className='gap-10 lg:gap-16 hidden md:flex'>
                <li className='menuLink'><a href='#hero'>Home</a></li>
                <li className='menuLink'><a href='#skills'>Skills</a></li>
                <li className='menuLink'><a href='#projects'>Projects</a></li>
                <li className='menuLink'><a href='#about'>About</a></li>
                <li className='menuLink'><a href='#contact'>Contact</a></li>
            </ul>
            <IoMenuOutline className='md:hidden' size={30} />
        </div>
      
    </div>
  )
}

export default Navbar
