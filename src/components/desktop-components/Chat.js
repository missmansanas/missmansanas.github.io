import React from 'react'

const Chat = ({text}) => {
  return (
    <div className="chat-bubble chat-bubble-info text-white w-full">
      {text}
    </div>
  )
}

export default Chat