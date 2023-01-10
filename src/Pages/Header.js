import { Routes , Route, Link } from 'react-router-dom';
import About from './About';
import Person from './Person';
import Welcome from './Welcome';
import Home from './Home';
import './header.css';
import Signup from './Signup';

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link to="/" className="navbar-brand"><h3>LOGO</h3></Link>
            </li>
            <li>
                <Link to="/home" className="navbar-brand">Home</Link>
            </li>
            <li>
                <Link to="/person" className="navbar-brand">Person</Link>
            </li>
            <li>    
                <Link to="/about" className="navbar-brand">About</Link>
            </li>    
            <li>
              <button onClick="signup" className="button"><Link to="/signup" className="navbar-brand">Signup</Link></button>
            </li>
        </ul>
        
    </nav>
         
    <Routes>
    <Route exact path="/" element={<Welcome/>} />
    <Route path="/home" element={<Home/>} />
    <Route path="/person" element={<Person/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/signup" element={<Signup/>}/>
    
   </Routes>
</div>
  );
}

export default Header;
