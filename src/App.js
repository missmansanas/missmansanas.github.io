import './App.css';
import DesktopNav from './components/MiniNav';
import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <div className="App
      flex p-4 gap-4 justify-start 
      flex-col items-center
      lg:flex-row lg:items-start">
      <div className='flex flex-row-reverse lg:flex-col gap-4 w-full lg:w-[500px] items-center'>
        <ProfileCard/>
        <DesktopNav/>
      </div>


      <div className="mockup-browser border border-base-300 h-[96vh] box-border w-full shadow-md">
        <div className="mockup-browser-toolbar">
          <div className="input border border-base-300">https://daisyui.com</div>
        </div>
        <div className="flex justify-center px-4 py-16 border-t border-base-300">Hello!</div>
      </div>
    </div>
  );
}

export default App;
