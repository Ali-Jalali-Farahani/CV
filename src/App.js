import logo from './logo.svg';
import './App.css';

//components
import Navbar from './components/Navbar/Navbar';
import Resume_summary from './components/Resume_summary/Resume_summary';
import Educational_background from './components/Educationa_background/Educational_background';

function App() {
  return (
    <>
      <Navbar />
      <Resume_summary />
      <Educational_background/>

      <h1 style={{textAlign:"center",margin: "200px 0px"}}>در حال ساخت</h1>
      <br />
    </>
  );
}

export default App;
