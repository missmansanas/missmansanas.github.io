import React from 'react'
import PortfolioItem from './PortfolioItem'


const DevPortfolio = () => {
  return (
    <div className='flex flex-col md:flex-row md:flex-wrap justify-start box-border w-full gap-8 p-8'>

      <PortfolioItem
        imageUrl="https://picsum.photos/500/350"
        title="Tarot App"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        tags={["React", "Tailwind"]}
        link="#"
      />

      <PortfolioItem
        imageUrl="https://picsum.photos/300/250"
        title="Tarot App"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        tags={["React", "Tailwind"]}
        link="#"
      />

      <PortfolioItem
        imageUrl="https://picsum.photos/600/350"
        title="Tarot App"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        tags={["React", "Tailwind"]}
        link="#"
      />

    </div>
  )
}

export default DevPortfolio