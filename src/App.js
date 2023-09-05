import './App.css';
import { useEffect, useState } from 'react';
import Hero from './components/desktop-components/Hero';
import DesktopNav from './components/desktop-components/DesktopNav';
import ProfileCard from './components/desktop-components/ProfileCard';
import DevPortfolio from './components/portfolio-components/DevPortfolio';
import AboutPage from './components/about-components/AboutPage';
import ThemeChanger from './components/desktop-components/ThemeChanger';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
        <ProfileCard theme={theme} />
        <DesktopNav setTheme={setTheme} theme={theme} />

      </div>

      <div className="mockup-browser bg-base-200/50 border h-full box-border w-full shadow-md flex flex-col overflow-hidden">
        {/* Browser Toolbar */}
        <div className="mockup-browser-toolbar flex flex-row-reverse">
            <div className="hidden md:input border border-base-300 text-base-content/60">https://missmansanas.com</div>
        </div>
        <div className="flex flex-col justify-start bg-base-200/50 h-full w-full box-border overflow-y-auto">
          <Routes>
            <Route index path="/" element={ <Hero/> } /> 
            <Route path="/portfolio" element={ <DevPortfolio theme={theme} /> } />
            <Route path="/about" element={ <AboutPage/> } />
          </Routes>
        </div>

      </div>
    </div>

  </BrowserRouter>
  );
}

export default App;
