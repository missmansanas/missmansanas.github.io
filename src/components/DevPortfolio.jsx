import React from 'react'
import PortfolioItem from './PortfolioItem'

const DevPortfolio = () => {

  const portfolioItems = [
    {
      image: 'assets/tarot-app.png',
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
      image: 'assets/productivity-app.png',
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
      image: 'assets/chat-dapp.png',
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
      image: 'assets/makoltaverse.png',
      title: "Fictional Media Portal",
      description: "Immerse in the universe of Makolta, the fictional setting of an upcoming literary and transmedia project.",
      tags: [
        "React (Vite)",
        "NodeJs",
        "ExpressJS",
        "MongoDB",
        "Vercel"
      ],
      link: "https://makolta.vercel.com",
    },

  ]

  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-12'>
    
      {portfolioItems &&
        portfolioItems.map((item, i) => {
          return (
            <PortfolioItem
              key={i}
              imageUrl={item.image}
              title={item.title}
              description={item.description}
              tags={item.tags}
              link={item.link}
            />
          )
        })
      }
    </div>
  )
}

export default DevPortfolio