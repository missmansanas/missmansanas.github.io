import React from 'react'
import { Link } from 'react-router-dom'
import FlareIcon from '@mui/icons-material/Flare';

const Navbar = () => {
  return (
    <div className='w-full flex justify-between p-4'>
    <p className='flex flex-row items-center gap-2'><FlareIcon fontSize="large" className='text-sienna'/><span className='font-bold'>Paola Nocom</span></p>
    <div className='flex gap-4 items-center'>
      <a href='#about'>About</a>
      <a href='#work'>Work</a>
      <a href='mailto:paolanocom@gmail.com' className='bg-sienna text-white rounded rounded-full px-3 py-1'>Contact Me</a>
    </div>
    </div>
  )
}

export default Navbar