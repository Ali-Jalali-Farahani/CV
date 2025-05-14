import './App.css';

//components
import Navbar from './components/Navbar/Navbar';
import Resume_summary from './components/Resume_summary/Resume_summary';
import Educational_background from './components/Educationa_background/Educational_background';
import Individual_characteristics from './components/Individual_characteristics/Individual_characteristics';
import Skills_container from './components/Skills_container/Skills_container';

function App() {
  return (
    <>
      <Navbar />
      <Resume_summary/>
      <Educational_background/>
      <Skills_container/>
      <Individual_characteristics/>
    </>
  );
}

export default App;
