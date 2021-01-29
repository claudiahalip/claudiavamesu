import React , {Component} from 'react'
import {Link} from 'react-router-dom' 

class Projects extends Component {
    render (){
        return (
            <div>
                <h2>My Projects:</h2>
                <div className="projectsNavBar">
                    <a  className="projectsLink" href = "https://photogig.netlify.app/">Photogig</a>
                    <p className="projectDescription">An application that makes it easy to find nearby
                    photographers, read reviews, and visit photography website. 
                       Frontend built with React-Redux.
                       Rails API handle the data persistence with a database.
                    </p>
                    <a className="projectsLink" href = "https://tripandtreat.netlify.app">Trip&Treat</a>
                    <p className="projectDescription">
                       An application for individuals to keep track of the
                       price and description of various cuisines found on vacation
                       Frontend built with JavaScript. 
                       Rails API handle the data persistence with a database.
                    </p>
                    <a className="projectsLink" href = " https://youtu.be/5dannSwmXn0">NabeB</a>
                    <p className="projectDescription">
                        An application for individuals seeking to support small
                    businesses in their area by providing a repository of local businesses.
                        Build with Ruby on Rails framework.
                        Standard user authentication, including signup, login, logout and passwords.
                        The authentication system also allows login with google account.

                    </p>
                    
                </div>

            </div>
        )
    }
}

export default Projects