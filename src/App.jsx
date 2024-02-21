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
            <div className='p-4'>
              <p className='w-3/5 md:w-full'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus itaque cumque ut ea praesentium commodi deserunt, nihil unde ipsum error ducimus rem, culpa excepturi iusto. Error quidem velit mollitia maiores magnam harum vero minus officiis reprehenderit.</p>

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
