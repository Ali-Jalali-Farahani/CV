import './App.css';
import {useState,useEffect} from 'react';

//components
import Navbar from './components/Navbar/Navbar';
import Resume_summary from './components/Resume_summary/Resume_summary';
import Educational_background from './components/Educationa_background/Educational_background';
import Individual_characteristics from './components/Individual_characteristics/Individual_characteristics';
import Skills_container from './components/Skills_container/Skills_container';

//context
import { My_context } from "./Contexts/My_context";

function App() {
  const [changeToEnglish, setChangeToEnglish] = useState(false);

  const [mobileSize, setMobileSize] = useState(false);

  // Check if the screen size is mobile or not
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 576) {
        setMobileSize(false);
      } else {
        setMobileSize(true);
      }
    }
    );
    window.innerWidth > 576 ? setMobileSize(false) : setMobileSize(true);
  }, []);

  return (
    <>
      <My_context.Provider value={{ changeToEnglish,setChangeToEnglish,mobileSize}}>
        <Navbar />
        <Resume_summary/>
        <Educational_background/>
        <Skills_container/>
        <Individual_characteristics/>
      </My_context.Provider>
    </>
  );
}

export default App;
