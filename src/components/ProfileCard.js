import React from 'react'

const ProfileCard = () => {
  return (
    <div className="mockup-window border bg-base-300 shadow-md
      w-full h-auto
      md:w-[500px]">
      <div className="flex px-8 py-8 bg-base-200 gap-8
      flex-row justify-start items-start
      lg:flex-col lg:justify-center lg:items-center
      ">
        <div className="avatar online">
          <div className="w-16 lg:w-36 rounded-full">
            <img src="https://picsum.photos/200/300" />
          </div>
        </div>
        <p>Hellooooo</p>
      </div>
    </div>
  )
}

export default ProfileCard