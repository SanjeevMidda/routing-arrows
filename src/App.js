import './index.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Projects from "./components/Projects"

// arrow icons
import left from "./images/left.svg";
import right from "./images/right.svg";
import up from "./images/up.svg";
import down from "./images/down.svg";

function App() {
  return (
    <div className="App">

        <Link to="/">
          <img src={up} alt="up" className='up' />
        </Link>

        <Link to="/projects">
          <img src={right} alt="right" className='right'/>
        </Link>

        <Link to="/contact">
          <img src={down} alt="down" className='down'/>
        </Link>

        <Link to="/left">
          <img src={left} alt="left" className='left'/>
        </Link>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/left' element={<About />}/>
      </Routes>
    </div>
    
  );
}

export default App;
