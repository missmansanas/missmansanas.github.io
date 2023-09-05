import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {

  const greeting = "Hi, I'm Paola!";

  return (
    <div className="h-full flex flex-col p-8 w-full box-border">
        <div className="z-10 md:mt-10">
          <h1 className="text-5xl md:text-8xl milchella">
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
          <p className="py-3 text-2xl md:leading-normal md:text-3xl max-w-3xl">
            I love creating things online.
            A reformed marketing gal, I've pivoted from making eloquent, user-focused copy to making beautiful, user-friendly websites!
          </p>
          <Link to="/portfolio"><button className="btn btn-primary my-3">View portfolio</button></Link>
        </div>

        <motion.img src={require('../../assets/images/display-picture.jpeg')} alt=""
          className='mask mask-squircle opacity-50 absolute 
          h-[200px] -right-10 bottom-2
          md:h-60 md:bottom-8
          lg:h-2/3 lg:-right-24'
          initial={{ opacity: "0%" }}
          animate={{ opacity: "50%",
          transition: { duration: 1 } }}
          whileHover={{ opacity: "75%" }}
          />
    </div>
  )
}

export default Hero