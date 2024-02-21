import Navbar from './components/Navbar'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RefreshIcon from '@mui/icons-material/Refresh';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CloseIcon from '@mui/icons-material/Close';
import ReorderIcon from '@mui/icons-material/Reorder';
import MinimizeIcon from '@mui/icons-material/Minimize';
import DevPortfolio from './components/DevPortfolio';

function App() {

  return (
    <div 
      className='bg-sand min-h-screen flex gap-4 justify-start flex-col'
    >
      <Navbar/>
      <main className=''>
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
            <img src='assets/portrait-nobg.png' className='w-60 md:w-72 bg-seafoam/80 -mt-8 md:mt-4'/>
            <div className='max-w-80 bg-sand px-8 py-4 shadow-xl text-xl tracking-wide italic'>Creative hybrid & full-stack web developer based in Manila, Philippines.</div>
          </div>
        </div>

        <div className='h-36 bg-black py-12'>
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
          <div className='w-[580px] bg-zinc-100 h-96 rounded-md'>
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
            <div className='flex flex-col gap-4 p-4 w-3/5 md:w-full'>
              <div className="flex flex-row gap-4 items-center">
                <img src='assets/portrait.png' className='w-24 rounded-full aspect-square object-cover border-4 border-seafoam p-1'/>
                <div className='flex flex-col gap-1'>
                  <h2 className='text-xl font-bold flex gap-2 items-center'>Paola N. <span className='font-light text-sm'>(she/her)</span></h2>
                  <p className='text-sm font-light'>Metro Manila, Philippines</p>
                  <p className="">developer / creative / learner</p>
                </div>

              </div>
              <div className='flex flex-col px-2 gap-2'>
                <p>I'm a career-shifter on the marketing-to-developer pipeline. I've pivoted from making enticing and eloquent content to making interactive and beautiful websites.</p>
                <p>My stack is currently focused on ReactJS, TailwindCSS, MongoDB, NodeJS, and ExpressJS.</p>

              </div>

            </div>
          </div>
        </div>

        <div className='h-20 bg-black py-12'>
        </div>

        <div id='work' className="min-h-40 bg-sand py-12">

            <p className='uppercase font-display text-6xl md:text-8xl font-bold tracking-wide text-white/50 text-center'>
              Selected Works
            </p>
            <DevPortfolio/>
        </div>

      </main>
    </div>
  )
}

export default App
