import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import Chat from './Chat';

const Chatbox = () => {
  
const chatbox = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0,
      staggerChildren: 3, // time between children animation
      duration: 1
    }
  }
};
const chats = {
  hidden: {
    y: "100vh",
    opacity: 0
  },
  visible: i => ({
    opacity: 1,
    y: [((messages.length - i) * 10), 0],
    transition: {
      type: "spring",
      stiffness: 100,
      mass: 0.3
    }
  })
};

const messages = [
  "Hey there",
  "Lorem ipsum",
]

  return (
    <AnimatePresence>
      <motion.div layout
        className="chat chat-start absolute bottom-0 w-96"
        animate="visible"
        initial="hidden"
        variants={chatbox}
      >
        <motion.div className="chat-image avatar" variants={chats}>
          <div className="w-10 rounded-full">
            <img src={require('../../assets/images/portrait.jpg')} />
          </div>
        </motion.div>

        {messages.map((message, i) => {
          return (
          <motion.div
            key={i}
            custom={i}
            variants={chats}
            className='w-full my-1'
          >
            <Chat text={message}/>
          </motion.div>
          )
        })}
      </motion.div>
    </AnimatePresence>
  )
}

export default Chatbox