import React from 'react'

const Stats = () => {
  return (
    <div className='hidden md:grid grid-cols-3 gap-1 w-full items-center'>
      <label className='text-sm'>Strength </label><progress className="progress progress-primary col-span-2 w-full" value="50" max="100"></progress>
      <label className='text-sm'>Magic </label><progress className="progress progress-primary col-span-2 w-full" value="90" max="100"></progress>
      <label className='text-sm'>Agility </label><progress className="progress progress-primary col-span-2 w-full" value="60" max="100"></progress>
      <label className='text-sm'>Charisma </label><progress className="progress progress-primary col-span-2 w-full" value="75" max="100"></progress>
      <label className='text-sm'>Wisdom </label><progress className="progress progress-primary col-span-2 w-full" value="80" max="100"></progress>

    </div>
  )
}

export default Stats