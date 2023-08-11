import './App.css';
import { useEffect, useState } from 'react';
import BrowserNav from './components/BrowserNav';
import Hero from './components/Hero';
import DesktopNav from './components/MiniNav';
import ProfileCard from './components/ProfileCard';

function App() {
  const [theme, setTheme] = useState('autumn');

  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="App h-[100vh]
      flex p-4 gap-4 justify-start 
      flex-col items-center
      lg:flex-row-reverse lg:items-start">
      <div className='flex flex-row lg:flex-col gap-4 w-full lg:w-[500px] items-center'>
        <ProfileCard/>
        <DesktopNav/>
      </div>


      <div className="mockup-browser bg-base-200 border h-full box-border w-full shadow-md flex flex-col">
        <div className="mockup-browser-toolbar flex flex-row">
          <div className="input border border-base-300">https://missmansanas.com</div>
        </div>
        <div className="flex flex-col justify-start bg-base-200 h-full overflow-y-auto">

          <BrowserNav setTheme={setTheme} />
          {/* <Hero/> */}
        </div>

      </div>
    </div>
  );
}

export default App;
