import React from 'react'

const ProfileCard = () => {
  return (
    <div className="mockup-window border bg-base-300/50 shadow-md
      w-full h-auto
      md:w-full">
      <div className="flex px-8 py-8 bg-base-200/50 gap-8
      flex-row justify-start items-start
      lg:flex-col lg:justify-center lg:items-center
      ">
        <div className="avatar online">
          <div className="w-16 lg:w-24 rounded-full">
            <img src="https://picsum.photos/200/300" />
          </div>
        </div>
        <p>Hi, there! You can call me Apple or Paola. I'm a creator from Manila, Philippines.</p>

      </div>
    </div>

  )
}

export default ProfileCard