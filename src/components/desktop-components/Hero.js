import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {

  const greeting = "// Hi, I'm Paola!";

  return (
    <div className="h-full flex flex-col p-8 w-full box-border justify-center">
        <div className="z-10 md:mt-10 font-mono">
          <h1 className="text-lime-600 text-3xl md:text-4xl">
            {greeting.split('').map((letter, i) => {
              return (
                <motion.span
                key={i}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{ duration: 0.1, delay: i * 0.15 }}
                >
                  {letter}
                </motion.span>
              )
            })}
          </h1>
          <p className="py-8 text-xl md:text-2xl">
            <div>full-stack <span className='text-blue-500'>web developer</span> = <span className='text-orange-400'>{'{'}</span> </div>
              <div className='ml-8'>
                I code beautiful, user-focused web experiences <br/>
                specializing in <span className='text-purple-500'>MERN stack</span>;
              </div>
            <div className='text-orange-400'>{'}'}</div>
          </p>
          <Link to="/portfolio"><button className="btn btn-primary my-3 border-2 border-white">View portfolio <ArrowForwardIcon/> </button></Link>
        </div>

        {/* <motion.img src={require('../../assets/images/display-picture.jpeg')} alt=""
          className='mask mask-squircle opacity-50 absolute 
          h-[200px] -right-10 bottom-2
          md:h-60 md:bottom-8
          lg:h-2/3 lg:-right-24'
          initial={{ opacity: "0%" }}
          animate={{ opacity: "50%",
          transition: { duration: 1 } }}
          whileHover={{ opacity: "75%" }}
          /> */}
    </div>
  )
}

export default Hero