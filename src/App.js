import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap'

//components
import Navbar from './components/Navbar/Navbar';
import Resume_summary from './components/Resume_summary/Resume_summary';
import Educational_background from './components/Educationa_background/Educational_background';
import Skill from './components/Skill/Skill';

function App() {
  return (
    <>
      <Navbar />
      <Resume_summary />
      <Educational_background/>

      {/*skills*/}
      <Container className='skills'>
        <Row>
          <Col xs={12} sm={6} md={4}>
            <Skill name="HTML" value={80}/>
          </Col>

          <Col xs={12} sm={6} md={4}>
            <Skill name="CSS" value={80}/>
          </Col>

          <Col xs={12} sm={6} md={4}>
            <Skill name="Javascript" value={80}/>
          </Col>

          <Col xs={12} sm={6} md={4}>
            <Skill name="React" value={60}/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
