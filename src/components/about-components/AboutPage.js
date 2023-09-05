import React from 'react'
import Stats from './Stats'
import Timeline from './Timeline'
import TechStack from './TechStack'
import { motion } from 'framer-motion'

const AboutPage = () => {

  return (
    <motion.div layout
      className='p-8 flex gap-8 w-full flex-wrap place-content-between'
      transition={{ layout: { duration: 1 } }}
      >
      <Timeline/>
      <Stats />
      <TechStack/>
    </motion.div>
  )
}

export default AboutPage