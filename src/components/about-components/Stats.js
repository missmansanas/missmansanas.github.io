import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Stats = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  }

    const stats = [
			{ name: 'Empathy', value: '9.5' },
			{ name: 'Intellect', value: '9' },
			{ name: 'Organization', value: '8.5' },
			{ name: 'Intuitiveness', value: '8' },
			{ name: 'Coaching', value: '7.5' },
			{ name: 'Communication', value: '7' },
			{ name: 'Perceptiveness', value: '6.5' },
		];

  return (
      <motion.fieldset
        className={`w-72 lg:w-4/12 box-border border border-base-100 bg-base-100/25 rounded rounded-xl p-6 ${!open && 'h-0'}`}
        initial={false}
        animate={{ height: open ? "max-content" : 0 }}
        transition={{ duration: 0.2 }}
        exit={{ height: 0 }}
        >
        <legend className="text-xl pl-2 pr-6 font-medium hover:cursor-pointer" onClick={handleOpen}>
            My Traits {open ? <KeyboardArrowDownIcon/> : <KeyboardArrowRightIcon/> }
        </legend>
        <motion.div
          className={open ? "grid grid-cols-3 gap-3 items-center" : "hidden"}
          animate={{ opacity: !open ? 0 : 1 }}
          transition={{ duration: 0.2, delay: 0.3 }}
          >
          {stats.map((stat) => {
            return (<>
              <label className='truncate text-sm lowercase'>
                {stat.name}
              </label>
              <motion.progress
                className={`progress progress-accent col-span-2 w-full`}
                value={stat.value}
                max="10"
                animate={{ width: open ? "100%" : "0" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                >
              </motion.progress>
              </>
            )
          })}
          <p className="text-xs mt-5 col-span-3">Traits are from a mixture of personality tests - MBTI, Big Five, Strengths Finder, etc.</p>
        </motion.div>
      </motion.fieldset>
  )
}

export default Stats