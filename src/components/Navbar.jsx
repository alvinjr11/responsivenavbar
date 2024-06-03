import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import  ClearIcon from '@mui/icons-material/Clear';
const Navbar = () => {
    const [extendedNavbar,setExtendedNavbar]=useState(false)
    console.log(extendedNavbar);
  return (
    <div className="bg-blue-500 text-black h-20 px-6">
        <div className="flex justify-between max-w-7xl mx-auto">
            <div className="h-20 flex items-center">
                <h1 className='text-4xl text-bold'>Logo</h1>
            </div>
            <div className='flex gap-6'>
                <ul className={`lg:static flex flex-col lg:flex-row lg:items-center absolute gap-6  gap-6 text-xl duration-500 ${extendedNavbar?"left-5 top-24":"left-[-150px] top-24"}`}>
                    <li className='hover:text-yellow-500 cursor-pointer'>home</li>
                    <li className='hover:text-yellow-500 cursor-pointer'>about</li>
                    <li className='hover:text-yellow-500 cursor-pointer'>career</li>
                    <li className='hover:text-yellow-500 cursor-pointer'>Login</li>
                    <li className='hover:text-yellow-500 cursor-pointer'>Signup</li>
                </ul>
                <div className='flex lg:hidden h-20 items-center' onClick={()=>{setExtendedNavbar(currentstate=>!currentstate);
                }}>
                    {
                        extendedNavbar?<ClearIcon/>:<MenuIcon/>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar