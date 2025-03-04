import React from 'react'
import { TbLogout } from "react-icons/tb";

const Navbar = ({setToken}) => {
  return (
    <div>
      <header className='bg-white shadow-md px-8 flex justify-between py-[17px]'>
        <h1 className='text-grad font-semibold text-xl'>freelanxDashboard</h1>

        <div onClick={()=>setToken("")} className='flex items-center gap-1 cursor-pointer border border-gray-300 px-2 hover:shadow-sm'>
          <TbLogout/>
          <p  className='font-semibold'>Logout</p>
        </div>
      </header>
    </div>
  )
}

export default Navbar