import React from 'react'
import { motion } from 'framer-motion'

const PortfolioItem = ({key, imageUrl, title, tags, description, link, variants, theme}) => {

  return (
    <motion.div className="card shrink p-2 bg-white/30 max-w-md box-border shadow-xl"
      key={key}
      variants={variants}
      >
    <figure className='mx-2 mt-2'>
      <motion.img 
        src={imageUrl}
        className='rounded rounded-xl opacity-70'
        alt={title}
        initial={{ opacity: "70%" }}
        whileHover={{ opacity: 100 }}
        transition={{ duration: 0.3 }}
        />
    </figure>
    <div className="card-body">
      <h2 className="card-title">
        {title}
      </h2>
      <div className="flex flex-row flex-wrap gap-2">
        {tags.map(tag => {
          return (
            <div className={`badge ${theme === "black" ? 'badge-base' : 'badge-secondary'} badge-outline p-3`}>{tag}</div>
            )
        })}
      </div>
      <p className='text-sm text-justify'>{description}</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary"><a href={link} target='_blank'>View</a></button>
      </div>
    </div>
  </motion.div>

  )
}

export default PortfolioItem