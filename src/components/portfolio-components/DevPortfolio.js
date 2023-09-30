import React from 'react'
import PortfolioItem from './PortfolioItem'
import { motion, AnimatePresence } from 'framer-motion'


const DevPortfolio = ({ theme }) => {

  const parent = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0,
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
  }

  const child = {
    hidden: {
      opacity: 0,
      height: 0
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3
      }
    }
  }

  const portfolioItems = [
    {
      image: require(`../../assets/images/tarot-app.png`),
      title: "Simple Tarot App",
      description: "Let RNG read your fortune! A simple React-based, card-dealing app featuring a card of the day, and an unlimited three-card reading. Built with JavaScript's randomness.",
      tags: [
        "React (CRA)",
        "TailwindCSS",
        "Framer Motion",
        "React-Router-DOM",
      ],
      link: "https://missmansanas.github.io/tarot-reading",
    },
    {
      image: require(`../../assets/images/chat-dapp.png`),
      title: "Simple Decentralized Chat App",
      description: "Experience the future of chatting with our prototype decentralized app, blending Solidity magic and ethers.js for secure, peer-to-peer conversations. MetaMask wallet and Mumbai Testnetwork required to test.",
      tags: [
        "HTML",
        "Bootstrap",
        "JavaScript",
        "Solidity",
        "EthersJS",
      ],
      link: "https://missmansanas.github.io/chat-dapp",
    },
    {
      image: require(`../../assets/images/productivity-app.png`),
      title: "To-do List + Pomodoro App",
      description: "Introducing the ultimate productivity assistant: a to-do list + pomodoro web app! Stay organized and focused with ease.",
      tags: [
        "React (Vite)",
        "TailwindCSS",
        "React-Router-DOM",
      ],
      link: "https://missmansanas.github.io/productivity-app",
    },
    {
      image: require(`../../assets/images/portfolio.png`),
      title: "Portfolio Website",
      description: "You're currently here!",
      tags: [
        "React (CRA)",
        "TailwindCSS",
        "DaisyUI",
        "Framer Motion",
        "React-Router-DOM",
      ],
      link: "/",
    },
  ]

  return (
    <>
    {portfolioItems && 
      <motion.div
        className='flex flex-wrap flex-row justify-center flex-wrap box-border w-full gap-8 p-8'
        variants={parent}
        animate="visible"
        initial="hidden"
        >

        {portfolioItems.map((item, i) => {
          return (
            <PortfolioItem
              key={i}
              imageUrl={item.image}
              title={item.title}
              description={item.description}
              tags={item.tags}
              link={item.link}
              variants={child}
              theme={theme}
            />
          )
        })}

      </motion.div>
    }
    </>
  )
}

export default DevPortfolio