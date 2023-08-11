import React from 'react'

const DevPortfolio = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 justify-center box-border w-full gap-8 p-8'>

      <div className="card shrink w-auto bg-base-100 shadow-xl image-full">
        <figure><img src="https://picsum.photos/640/480" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">View</button>
          </div>
        </div>
      </div>

      <div className="card shrink w-auto bg-base-100 shadow-xl image-full">
        <figure><img src="https://picsum.photos/600/400" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">View</button>
          </div>
        </div>
      </div>

      <div className="card shrink w-auto bg-base-100 shadow-xl image-full">
        <figure><img src="https://picsum.photos/640/400" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">View</button>
          </div>
        </div>
      </div>

      <div className="card shrink w-auto bg-base-100 shadow-xl image-full">
        <figure><img src="https://picsum.photos/600/480" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">View</button>
          </div>
        </div>
      </div>


      
    </div>
  )
}

export default DevPortfolio