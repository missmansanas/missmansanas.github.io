import React from 'react'

const PortfolioItem = ({imageUrl, title, tags, description, link}) => {
  return (
    <div className="card shrink h-auto bg-base-100 shadow-xl image-full">
    <figure><img src={imageUrl} alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">
        {title}
        {tags.map(tag => {
          return (
            <div className="badge badge-secondary">{tag}</div>
            )
        })}
      </h2> 
      <p>{description}</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary"><a href={link}>View</a></button>
      </div>
    </div>
  </div>

  )
}

export default PortfolioItem