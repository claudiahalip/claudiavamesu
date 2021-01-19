import React , {Component} from 'react'
import {Link} from 'react-router-dom' 

class Projects extends Component {
    render (){
        return (
            <div>
                <h2>My Projects:</h2>
                <div className="projectsNavBar">
                    <a  className="projectsLink" href = "https://photogig.netlify.app/">Photogig</a>
                
                    <a className="projectsLink" href = "https://photogig.netlify.app/">Trip&Treat</a>
                    
                    <a className="projectsLink" href = "https://photogig.netlify.app/">NabeB</a>
                    
                </div>

            </div>
        )
    }
}

export default Projects