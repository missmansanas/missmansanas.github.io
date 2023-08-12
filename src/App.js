import './App.css';
import { useEffect, useState } from 'react';
import BrowserNav from './components/BrowserNav';
import Hero from './components/Hero';
import DesktopNav from './components/DesktopNav';
import ProfileCard from './components/ProfileCard';
import DevPortfolio from './components/DevPortfolio';
import AboutPage from './components/AboutPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SnackbarAlerts from './components/SnackbarAlerts';

function App() {
  const [theme, setTheme] = useState('autumn');

  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', theme);
  }, [theme]);

  return (
  <BrowserRouter>
  
    <div className="App h-[100vh] flex p-4 gap-4 justify-start selection:bg-accent selection:text-accent-content
      flex-col items-center
      lg:flex-row-reverse lg:items-start">
      <div className='flex flex-col md:flex-row lg:flex-col gap-4 w-full lg:w-[500px] items-start'>
        <ProfileCard/>
        <DesktopNav/>
        {/* <SnackbarAlerts/> */}

      </div>

      <div className="mockup-browser bg-base-200/50 border h-full box-border w-full shadow-md flex flex-col overflow-hidden">
        {/* Browser Toolbar */}
        <div className="mockup-browser-toolbar flex flex-row-reverse">
            <div className="hidden md:input border border-base-300 text-base-content/60">https://missmansanas.com</div>
        </div>
        <BrowserNav setTheme={setTheme} />
        <div className="flex flex-col justify-start bg-base-200/50 h-full w-full box-border overflow-y-auto">
          <Routes>
            <Route index path="/" element={ <Hero/> } /> 
            <Route path="/portfolio" element={ <DevPortfolio/> } />
            <Route path="/about" element={ <AboutPage/> } />
          </Routes>
        </div>

      </div>
    </div>

  </BrowserRouter>
  );
}

export default App;
