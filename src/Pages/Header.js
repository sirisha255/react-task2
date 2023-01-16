import {Routes , Route, Link } from 'react-router-dom';
import About from './About';
import Person from './Person';
import Welcome from './Welcome';
import Home from './Home';
import './header.css';
import Signup from './Signup';
import CrudDemo from './CrudDemo';
import Main from './Main';
import Add from './Add';
import Edit from './Edit';
import Notfound from './Notfound';
import View from './View';

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> 
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link to="/" className="navbar-brand">React</Link>
            </li>
            <li>
                <Link to="/home" className="navbar-brand">Home</Link>
            </li>
            <li>
                <Link to="/person" className="navbar-brand">Person</Link>
            </li>
            <li>    
                <Link to="/about" className="navbar-brand">About us</Link>
            </li> 
            <li>
                <Link to="/crud" className="navbar-brand">Crud</Link>
            </li>   
            <li>
                <Link to="/main" className="navbar-brand">Person Details</Link>
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
    <Route path="/crud" element={<CrudDemo/>}/>
    <Route path="/main" element={<Main/>}/>
   <Route path="/add" element={<Add/>}/>
    <Route path="/edit" element={<Edit/>}/>
   <Route element={<Notfound/>}/>
   <Route path="/view" element={<View/>}/>

   
   </Routes>
</div>
  );
}

export default Header;
