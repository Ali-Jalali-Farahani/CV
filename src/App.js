import './App.css';
import {useState} from 'react';

//components
import Navbar from './components/Navbar/Navbar';
import Resume_summary from './components/Resume_summary/Resume_summary';
import Educational_background from './components/Educationa_background/Educational_background';
import Individual_characteristics from './components/Individual_characteristics/Individual_characteristics';
import Skills_container from './components/Skills_container/Skills_container';

//context
import { SwitchLanguage } from "./Contexts/Switch_language";

function App() {
  const [changeToEnglish, setChangeToEnglish] = useState(false);

  return (
    <>
      <SwitchLanguage.Provider value={{ changeToEnglish, setChangeToEnglish }}>
        <Navbar />
        <Resume_summary/>
        <Educational_background/>
        <Skills_container/>
        <Individual_characteristics/>
      </SwitchLanguage.Provider>
    </>
  );
}

export default App;
