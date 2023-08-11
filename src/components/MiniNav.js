import React from 'react';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import InstagramIcon from '@mui/icons-material/Instagram';
import CreateIcon from '@mui/icons-material/Create';
import GitHubIcon from '@mui/icons-material/GitHub';

const MiniNav = () => {
  return (
    <div className="mockup-window border bg-base-300/50 shadow-md
      h-auto hidden md:block
      w-1/2 lg:w-full">
      <div className="flex bg-base-200/50 gap-8
      flex-row justify-start items-start">
      <ul className="menu bg-transparent w-full rounded-box">
        <li><a href='https://threads.net/@missmansanas' target='_blank'>
          <AlternateEmailIcon/> Threads
        </a></li>
        <li><a href='https://instagram.com/missmansanas' target='_blank'>
          <InstagramIcon/> Instagram
        </a></li>
        <li><a href='https://missmansanas.substack.com' target='_blank'>
          <CreateIcon/> Substack
        </a></li>
        <li><a href='https://github.com/missmansanas' target='_blank'>
          <GitHubIcon/> GitHub
        </a></li>
      </ul>
      </div>
    </div>
  )
}

export default MiniNav