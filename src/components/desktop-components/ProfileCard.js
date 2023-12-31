import { useState, useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import InstagramIcon from '@mui/icons-material/Instagram';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { motion } from 'framer-motion';

const ProfileCard = ({theme}) => {
  const [open, setOpen] = useState(true);

  const mobileScreen = useMediaQuery(`(min-width: 768px)`);
  useEffect(()=>{
    if (mobileScreen){
      setOpen(true);
    }
}, [mobileScreen]);

  return (
    <div className="mockup-browser border bg-base-300/50 shadow-md w-full h-auto">

      {/* Browser Toolbar */}
      <div className="mockup-browser-toolbar flex flex-row-reverse justify-between items-center pl-4" onClick={() => setOpen(!open)}>
        <span className="text-sm flex items-center gap-2">
          <AccountCircleOutlinedIcon fontSize='small'/> Profile
        </span>
      </div>

      {/* Body of the Profile Card */}
      <div className={open? "flex py-4 px-6 bg-base-200/50 gap-6 text-sm flex-col justify-center items-start" : "hidden"}>

        {/* Profile Section */}
        <div className='grid grid-cols-3 gap-4 justify-center items-start w-full'>

          {/* Avatar - takes up 1/3 col */}
            <div className="avatar online w-20 h-20 col-span-1 justify-self-center p-1">
              <div className={`w-full h-full rounded-full ring ${theme !== "black" ? "ring-secondary" : 'ring-white/70'} ring-offset-base-100/50 ring-offset-2`}>
                <img src={require('../../assets/images/portrait.jpg')} className='opacity-70'/>
              </div>
            </div>

          {/* Profile details - takes up 2/3 col */}
          <div className="col-span-2 flex flex-col gap-1 py-2">
            <p className='font-bold'>Apple / Paola <span className='font-light text-xs'>(she/her)</span></p>
            <p className='font-light'>Manila, Philippines</p>
            <p>developer, writer, thinker</p>
          </div>

        </div>

        {/* Status Section */}
        <motion.div className={`flex flex-row gap-2 py-1 text-md justify-center w-full rounded rounded-full
          ${theme !== "black" ? 'text-secondary' : 'text-primary-content'}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1 }}
          >

          <motion.svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"
            initial={{ scale: 1, rotate: 0 }}
            animate={{
              scale: [1, 1.5, 1.5, 1.5, 1],
              rotate: [0, 0, 360, 0, 0 ], }}
              transition={{
                delay: 1.5,
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 15
              }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </motion.svg>

          <span cl>Currently open to opportunities!</span>
        </motion.div>

        {/* Stats Section
        <div className="flex flex-row justify-evenly items-center w-full">
          <p><span className='font-bold text-lg'>9</span> years of work</p>
          <p><span className='font-bold text-lg'>5.4k</span> coffees</p>
          <p><span className='font-bold text-lg'>4</span> projects</p>
        </div> */}

        {/* Social Media Links Section */}
        <div className="bg-transparent rounded-box gap-4 text-xs justify-between items-center w-full 
        flex flex-row
        lg:grid lg:grid-cols-3 ">
          <a href='https://threads.net/@missmansanas' target='_blank'>
            <AlternateEmailIcon/><span className="hidden lg:inline"> Threads</span>
          </a>
          <a href='https://instagram.com/missmansanas' target='_blank'>
            <InstagramIcon/><span className="hidden lg:inline"> Instagram</span>
          </a>
          <a href='https://missmansanas.substack.com' target='_blank'>
            <FeedOutlinedIcon/><span className="hidden lg:inline"> Substack</span>
          </a>
          <a href='https://github.com/missmansanas' target='_blank'>
            <GitHubIcon/><span className="hidden lg:inline"> GitHub</span>
          </a>
          <a href="mailto:paolanocom@gmail.com" target='_blank'>
            <EmailOutlinedIcon/><span className="hidden lg:inline"> Email</span>
          </a>
        </div>
      </div>
    </div>

  )
}

export default ProfileCard