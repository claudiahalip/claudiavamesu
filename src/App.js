import './App.css';
import Home from './components/Home'
import Projects from './components/Projects'
import Resume from './components/Resume'
import NavBar from './components/NavBar'


function App() {
  return (
    <div>
     <h1>Claudia Vamesu Halip</h1>  
     <Home/>
     <Resume/>
     <Projects/> 
     <NavBar/>
    </div>
  );
}

export default App;
