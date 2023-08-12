import { useState, useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import InstagramIcon from '@mui/icons-material/Instagram';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const ProfileCard = () => {
  const [open, setOpen] = useState(false);

  const mobileScreen = useMediaQuery(`(min-width: 768px)`);
  useEffect(()=>{
    if (mobileScreen){
      setOpen(true);
    }
}, [mobileScreen]);

  return (
    <div className="mockup-browser border bg-base-300/50 shadow-md
    w-full h-auto
    md:w-full">
      {/* Browser Toolbar */}
      <div className="mockup-browser-toolbar flex flex-row-reverse justify-between items-center pl-4" onClick={() => setOpen(!open)}>
        <span className="text-sm flex items-center gap-2">
          <AccountCircleOutlinedIcon fontSize='small'/> Profile
        </span>
      </div>

      {/* Body of the Profile Card */}
      <div className={open? "flex p-4 bg-base-200/50 gap-6 text-sm flex-col justify-center items-start lg:flex-col lg:justify-center lg:items-center" : "hidden"}>

        {/* Profile Section */}
        <div className='grid grid-cols-3 gap-4 justify-center items-start w-full'>

          {/* Avatar - takes up 1/3 col */}
            <div className="avatar online w-20 h-20 col-span-1 justify-self-center p-1">
              <div className="w-full h-full rounded-full ring ring-secondary ring-offset-base-100 ring-offset-1">
                <img src={require('../assets/images/profile-pic.jpeg')} />
              </div>
            </div>

          {/* Profile details - takes up 2/3 col */}
          <div className="col-span-2 flex flex-col gap-1 py-2">
            <p className='font-bold'>Apple / Paola <span className='font-light text-xs'>(she/her)</span></p>
            <p className='font-light'>Manila, Philippines</p>
            <p>developer, writer, thinker</p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex flex-row justify-evenly items-center w-full">
          <p><span className='font-bold text-lg'>9</span> years of work</p>
          <p><span className='font-bold text-lg'>5.4k</span> coffees</p>
          <p><span className='font-bold text-lg'>5.2k</span> coffees</p>
        </div>

        {/* Social Media Links Section */}
        <div className="bg-transparent rounded-box gap-2 text-xs place-content-evenly place-items-center w-full 
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
        </div>
      </div>
    </div>

  )
}

export default ProfileCard