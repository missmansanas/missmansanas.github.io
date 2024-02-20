import { useState } from 'react'
import { motion } from 'framer-motion'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const TechStack = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  }

  const skills = [
    { name: 'HTML/CSS', value: '9.5', proficiency: 'high'},
    { name: 'JavaScript', value: '8.5', proficiency: 'high'},
    { name: 'Git/GitHub', value: '8', proficiency: 'high'},
    { name: 'React.JS', value: '7', proficiency: 'high'},
    { name: 'Tailwind', value: '7', proficiency: 'high'},
    { name: 'Bootstrap', value: '6', proficiency: 'moderate'},
    { name: 'Next.JS', value: '5', proficiency: 'beginner'},
    { name: 'Express.JS', value: '4', proficiency: 'beginner'},
    { name: 'Node.JS', value: '4', proficiency: 'beginner'},
    { name: 'MongoDB', value: '4', proficiency: 'beginner'},
    
  ];

  return (
    <motion.fieldset
      className={`w-80 lg:w-7/12 box-border border border-base-100 bg-base-100/25 rounded rounded-xl p-6 ${!open && 'h-0'}`}
      initial={false}
      animate={{ height: open ? "max-content" : 0 }}
      transition={{ duration: 0.2 }}
      exit={{ height: 0 }}
      >
      <legend className="text-xl pl-2 pr-6 font-medium hover:cursor-pointer" onClick={handleOpen}>
          My Skill Stack {open ? <KeyboardArrowDownIcon/> : <KeyboardArrowRightIcon/> }
      </legend>
      <motion.div
        className={open ? "grid grid-cols-2 lg:grid-cols-3 gap-3 items-center" : "hidden"}
        animate={{ opacity: !open ? 0 : 1 }}
        transition={{ duration: 0.2, delay: 0.3 }}
        >
        {skills.map((skill) => {
          return (<>
            <label className='truncate text-sm'>
              {skill.name} <span className='text-base-content/50 text-xs'>({skill.proficiency})</span>
            </label>
            <motion.progress
              className={`progress col-span-1 lg:col-span-2 w-full ${skill?.value >= 6 ? 'progress-success' : 'progress-info' }`}
              value={skill.value}
              max="10"
              animate={{ width: open ? "100%" : "0" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              >
            </motion.progress>
            </>
          )
        })}
        <p className="text-xs mt-5 col-span-2 lg:col-span-3">Disclaimer: Progress bar for illustration purposes only 😉</p>
      </motion.div>
    </motion.fieldset>
  )
}

export default TechStack