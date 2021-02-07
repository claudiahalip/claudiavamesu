import React , {Component} from 'react'
import video from '../images/React-project.mp4'

class Projects extends Component {
    render (){
        return (
            <div>
                
                <div className="projectsNavBar">
                    <a className="projectsLink" href = "https://photogig.netlify.app/" target="_blank">Photogig</a>
                    <p className="projectDescription">
                        An application that makes it easy to find nearby
                        photographers, read reviews, and visit photography website. 
                        Frontend built with React-Redux.
                        Rails API handle the data persistence with a database.
                    </p>
                     <br></br>
                    
                    
                    <a className="projectsLink" href = "https://tripandtreat.netlify.app" target="_blank">Trip&Treat</a>
                    <p className="projectDescription">
                        An application for individuals to keep track of the
                        price and description of various cuisines found on vacation
                        Frontend built with JavaScript. 
                        Rails API handle the data persistence with a database.
                    </p>

                    
                    <a className="projectsLink" href = " https://youtu.be/5dannSwmXn0" target="_blank">NabeB</a>
                    <p className="projectDescription">
                        An application for individuals seeking to support small
                        businesses in their area by providing a repository of local businesses.
                        Build with Ruby on Rails framework.
                        Standard user authentication, including signup, login, logout and passwords.
                        The authentication system also allows login with google account.
                    </p>
                    
                    
                    
                </div>
                <video  className= "video" width="650" height="400" controls>
                {/* <source src={video} type="video/mp4"/> */}
                     </video>

            </div>
        )
    }
}

export default Projects