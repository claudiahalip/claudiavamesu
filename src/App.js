import './App.css';
import Home from './components/Home'
import Projects from './components/Projects'
import Resume from './components/Resume'
import NavBar from './components/NavBar'
import {Route} from 'react-router-dom'
import background from './images/photo-profile.jpg'

import { FaBeer , FaLinkedin} from 'react-icons/fa';

import {faLinkedin, faBeer} from 'react-icons/fa'


function App() {
  return (
    <div style={{ backgroundImage:`url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'}} >
    <NavBar/>
     
    <h1>Claudia Vamesu Halip</h1> 
    <Route exact path = '/'>
      <Home/>
    </Route>

    <Route exact path = '/resume'>
      <Resume/>
    </Route>

    <Route exact path ='/projects'>
        <Projects/> 
    </Route> 
    <br/>
    <br/>
    <p className="copyright">2020 	&#169;Claudia Vamesu Halip</p>
       
    </div>
  );
}

export default App;
