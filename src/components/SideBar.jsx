import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoMdAddCircleOutline } from "react-icons/io";
import { RiFileListLine } from "react-icons/ri";


const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r-1 border-gray-300'>
        <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>
            <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l' to='/add'>
                <IoMdAddCircleOutline/>
                <p className='hidden md:block '>Add Job</p>
            </NavLink>
            <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l' to='/list'>
                <RiFileListLine/>
                <p className='hidden md:block '>List Jobs</p>
            </NavLink>
            <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l' to='/applied-jobs'>
                <RiFileListLine/>
                <p className='hidden md:block '>Applied Jobs</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar