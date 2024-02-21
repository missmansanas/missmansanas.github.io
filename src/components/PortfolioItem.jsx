import React from 'react'
import { motion } from 'framer-motion'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const PortfolioItem = ({title, imageUrl, description, tags, link}) => {
  return (
    <div className='max-w-[580px] bg-zinc-100 py-4 px-8 flex flex-col gap-4 rounded-md'>
      <motion.img 
        src={imageUrl}
        className='rounded opacity-70 object-contain'
        alt={title}
        initial={{ opacity: "70%" }}
        whileHover={{ opacity: 100 }}
        transition={{ duration: 0.3 }}
        />
      <h2 className='text-3xl font-light tracking-wider italic'>{title}</h2>

      <div className='flex flex-row flex-wrap gap-2'>
        {tags.map(tag => {
          return (
            <div className="rounded-xl border border-zinc-700 px-2 py-1 text-sm">{tag}</div>
          )
        })}

      </div>
      <p>{description}</p>
      <a href={link} className='rounded bg-sunshine mx-auto px-4 py-1 font-display font-bold tracking-widest uppercase self-end justify-self-end'>View <ArrowForwardIcon fontSize='md'/></a>
      
    </div>
  )
}

export default PortfolioItem