import './App.css';
import Home from './components/Home'
import Projects from './components/Projects'
import Resume from './components/Resume'
import NavBar from './components/NavBar'
import {Route} from 'react-router-dom'
import SocialMediaIcons from './components/SocialMediaIcons'
import AboutMe from './components/AboutMe';
import Articles from './components/Articles';

function App() {
  return (
    <div  >
    <NavBar/>
     
    <Route exact path = '/'>
      <Home/>
    </Route>

    <Route exact path ="/about">
      <AboutMe/>
    </Route>

    <Route exact path = '/resume'>
      <Resume/>
    </Route>

    <Route exact path ='/projects'>
        <Projects/> 
    </Route> 

    <Route exact path = '/articles'>
        <Articles/>
    </Route>
    <br/>
    <br/>
    <SocialMediaIcons/>  
    <p className="copyright">2021 	&#169;Claudia Vamesu Halip</p>
     
    </div>
  );
}

export default App;
