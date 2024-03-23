import Navbar from './components/Navbar'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RefreshIcon from '@mui/icons-material/Refresh';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CloseIcon from '@mui/icons-material/Close';
import ReorderIcon from '@mui/icons-material/Reorder';
import MinimizeIcon from '@mui/icons-material/Minimize';
import DevPortfolio from './components/DevPortfolio';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Link } from 'react-router-dom';

function App() {

  return (
    <div 
      className='bg-sand min-h-screen max-w-screen overflow-x-hidden box-border mx-0 flex gap-4 justify-start flex-col'
    >
      <Navbar/>
      <main style={{
        backgroundSize: '40px 40px',
        backgroundImage: 'linear-gradient(to right, #faf7f299 1px, transparent 1px), linear-gradient(to bottom, #faf7f299 1px, transparent 1px), radial-gradient(circle, #faf7f299 1px, rgba(0, 0, 0, 0) 1px)',
        backgroundAttachment: 'fixed'
      }}>
        <div className='flex flex-col items-center w-max mx-auto py-12'>
          <p className='uppercase font-display text-6xl py-2 md:text-8xl font-bold tracking-wide z-10'>
            Hello, world
          </p>
          <p className='uppercase font-display text-6xl py-2 md:text-8xl font-bold tracking-wide text-white/50'>
            Hello, world
            </p>
          <p className='uppercase font-display text-6xl py-2 md:text-8xl font-bold tracking-wide text-white/50'>
            Hello, world
          </p>
          <p className='uppercase font-display text-6xl py-2 md:text-8xl font-bold tracking-wide text-white/50'>
            Hello, world
          </p>

          <div className='flex flex-col md:flex-row absolute gap-24 lg:gap-40 z-0 items-center'>
            <img src='assets/undraw_developer_nobg.png' className='w-60 md:w-[450px]  -mt-8 md:mt-4'/>
            <div className='max-w-80 bg-sand px-8 py-4 shadow-xl text-xl tracking-wide italic'>Creative hybrid & full-stack web developer based in Manila, Philippines.</div>
          </div>
        </div>

        <div className='h-36 bg-black py-12'>
          <ul className="hidden md:flex md:flex-row text-sand gap-12 justify-center items-center p-0 m-0 font-display tracking-widest font-bold text-xl text-center uppercase h-full">
              <li><a href='https://linkedin.com/in/paola-nocom'>linkedin.com/in/paola-nocom</a></li>
              <li><a href='https://github.com/missmansanas'>github.com/missmansanas</a></li>
          </ul>
        </div>


        <div id='about' className='flex flex-col md:flex-row justify-center p-8 bg-powder md:items-center min-h-[90vh]'>
          <div className=''>
            <p className='uppercase font-display text-6xl md:text-8xl font-bold tracking-wide text-seafoam'>
              About
            </p>
            <p className='uppercase font-display text-6xl md:text-8xl font-bold tracking-wide text-seafoam'>
              About
            </p>
            <p className='uppercase font-display text-6xl md:text-8xl font-bold tracking-wide text-seafoam'>
              About
            </p>
            <p className='uppercase font-display text-6xl md:text-8xl font-bold tracking-wide text-seafoam'>
              About
            </p>

          </div>
          <div className='w-[580px] bg-zinc-100 h-max rounded-md'>
            <div className='p-2 bg-stone-300 rounded-tl-md rounded-tr-md flex flex-row justify-between items-center'>
              <div className='flex flex-row gap-2 items-center'>
                <ArrowBackIcon fontSize='sm' color='disabled'/>
                <ArrowForwardIcon fontSize='sm' color='disabled'/>
                <RefreshIcon fontSize='sm' color='disabled'/>
                <HomeOutlinedIcon fontSize='sm' color='disabled'/>
              </div>
              <div className='rounded-lg w-1/2 bg-stone-100 py-1 px-2 text-xs text-stone-400'>
                https://github.com/missmansanas
              </div>
              <div className='flex flex-row gap-2 items-center'>
                <MinimizeIcon fontSize='sm' color='disabled' />
                <ReorderIcon fontSize='sm' color='disabled'/>
                <CloseIcon fontSize='sm' color='disabled'/>
              </div>
            </div>
            <div className='flex flex-col gap-4 pl-4 md:px-8 py-12 w-3/5 md:w-full'>
              <div className="flex flex-row gap-4 items-center">
                <img src='assets/portrait.png' className='w-24 rounded-full aspect-square object-cover border-4 border-seafoam p-1'/>
                <div className='flex flex-col gap-1'>
                  <h2 className='text-xl font-bold flex gap-2 items-center'>Paola N. <span className='font-light text-sm'>(she/her)</span></h2>
                  <p className='text-sm font-light'>Metro Manila, Philippines</p>
                  <p className="">developer / creative / learner</p>
                </div>

              </div>
              <div className='flex flex-col px-2 gap-2'>
                <p className='flex flex-row gap-2 my-2 items-center'><CheckCircleOutlineIcon className='text-zinc-700'/>Currently open to opportunities</p>
                <p>I'm a career-shifter on the marketing-to-developer pipeline. I've pivoted from making enticing and eloquent content to making interactive and beautiful websites.</p>
                <p>My stack is currently focused on ReactJS, TailwindCSS, MongoDB, NodeJS, and ExpressJS. I'm also exploring PHP, WordPress and UI/UX on the side.</p>

              </div>

            </div>
          </div>
        </div>

        <div className='h-36 bg-black py-12'>
          <ul className="md:hidden flex flex-col text-sand h-full place-content-center p-0 m-0 font-display tracking-widest font-bold text-md text-center uppercase">
              <li><a href='https://linkedin.com/in/paola-nocom'>linkedin.com/in/paola-nocom</a></li>
              <li><a href='https://github.com/missmansanas'>github.com/missmansanas</a></li>
          </ul>
        </div>

        <div id='work' className="min-h-40 bg-sand py-12">

            <p className='uppercase font-display text-6xl md:text-8xl font-bold tracking-wide text-white/50 text-center'>
              Selected Works
            </p>
            <div className='mx-auto w-max bg-seafoam rounded-lg shadow-lg hover:border-2 hover:shadow-inner duration-300 px-6 py-3 my-6 text-xl'>
              <a href="https://paolaportfolio.vercel.app/" target='_blank' rel='nofollow noreferrer'>Go to new portfolio site →</a>

            </div>
        </div>

      </main>
    </div>
  )
}

export default App
