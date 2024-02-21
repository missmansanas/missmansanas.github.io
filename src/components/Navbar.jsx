import React, { useEffect, useState } from 'react'
import FlareIcon from '@mui/icons-material/Flare';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';

const Navbar = () => {
  const matches = useMediaQuery('(min-width:640px)');
  const [open, setOpen] = useState(false);

  return (
    <div className='w-full flex justify-between p-4'>
      <p className='flex flex-row items-center gap-2'><FlareIcon fontSize="large" className='text-sienna'/><span className='font-bold'>Paola Nocom</span></p>

      {matches ? (
        <div className='flex gap-4 items-center'>
          <a href='#about'>About</a>
          <a href='#work'>Work</a>
          <a href='mailto:paolanocom@gmail.com' className='bg-sienna text-white rounded rounded-full px-3 py-1'>Contact Me</a>
        </div>
      ) : (
        <>

        <MenuIcon onClick={()=> setOpen(!open) } />
        <div className={`${!open ? 'hidden' : 'absolute top-12 right-5 flex flex-col gap-4 items-end shadow-xl bg-sand p-3 rounded-xl z-50'}`}>
          <a href='#about'>About</a>
          <a href='#work'>Work</a>
          <a href='mailto:paolanocom@gmail.com' className='bg-sienna text-white rounded rounded-full px-3 py-1'>Contact Me</a>
        </div>
        </>
      )
      
      }
    </div>
  )
}

export default Navbar