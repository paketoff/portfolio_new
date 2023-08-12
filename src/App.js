import './styles/app.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from "./nav/Nav.js";
import About from "./about/About";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import Background from './background/Background';
import PlayerStats from './playerStats/PlayerStats';

const App = () => {
  return (
    <Router>
      <Nav/>
      <Background/>
      <Routes>
        <Route path='/' element={<About/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <PlayerStats/>
    </Router>
  );
}

export default App;