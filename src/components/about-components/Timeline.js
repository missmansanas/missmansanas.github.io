import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Timeline = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  }

  const myHistory = [
    {
      date: "February 2023",
      title: "🤓 Developer-Instructor Era",
      description: "I started working at a Sydney-based coding bootcamp. I first passed a 3-month internal training in MERN stack and Web3 (Ethereum) development. While waiting for live course launch, I conducted  roughly tri-weekly, free coding tutorials for beginners. We reached audiences across Asia, ANZ and Canada!",
      recent: "true",
    },
    {
      date: "December 2022",
      title: "👩🏻‍💻 New Career Unlocked!",
      description: "I graduated from a full-stack Web Development Course at KodeGo Coding Bootcamp!",
      recent: "true",
    },
    {
      date: "2014 - 2021",
      title: "🔏 You Must Pay To Unlock This Content.",
      description: "Just kidding! This was my advertising & marketing era. I started out as an account executive, eventually transferring to copywriting and digital marketing with a focus on SEO and content. Lorem ipsum, dolor sit happens!",
      recent: "false",
    },
    {
      date: "March 2014",
      title: "👩🏻‍🎓 Graduated From University",
      description: "I got my bachelor's degree in Communications, studying a mish-mash of advertising, public relations, journalism, and media studies. Phew!",
      recent: "false",
    },
    {
      date: "July 1993",
      title: "👼🏻 My Birthday!",
      description: "I was born and now you get to view my lovely website.",
    },
  ]

  return (
    <motion.fieldset
      className={`px-6 border border-base-100 rounded rounded-xl w-full bg-base-100/25 ${!open && 'h-0 py-6'}`}
      initial={false}
      animate={{ height: open ? "max-content" : 0 }}
      transition={{ duration: 0.5 }}
      exit={{ height: 0 }}
      >

      <legend className="text-xl pl-2 pr-6 font-medium hover:cursor-pointer" onClick={handleOpen}>
          My Journey {open ? <KeyboardArrowDownIcon/> : <KeyboardArrowRightIcon/> }
      </legend>

      <motion.ol
        className={open ? "mx-4 relative border-l border-base-300" : "hidden"}
        animate={{ opacity: !open ? 0 : 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        >
        {myHistory.map((item) => {
          return (
            <li className="mt-8 mb-12 mx-10">
              <div class={`absolute w-3 h-3 ${item.recent === "true" ? 'bg-secondary' : 'bg-base-100'} rounded-full mt-1.5 -left-1.5 border border-base-300`}></div>

              <time class="mb-1 text-sm font-normal leading-none text-base-content/70">
                {item.date}
              </time>

              <h3 class="text-lg font-semibold text-base-content my-1">
                {item.title}
              </h3>

              <p class="mb-4 mr-4 text-base-content/70">
                {item.description}
              </p>

            </li>
          )
        })}
      </motion.ol>

    
    </motion.fieldset>
  )
}

export default Timeline