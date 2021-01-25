import React , {Component} from 'react'
import {Link} from 'react-router-dom' 

class Projects extends Component {
    render (){
        return (
            <div>
                <h2>My Projects:</h2>
                <div className="projectsNavBar">
                    <a  className="projectsLink" href = "https://photogig.netlify.app/">Photogig</a>
                    <p className="projectDescription">An easy way to look for a photographer in a certain area, read reviews and visit his/her website. 
                       Frontend built with React-Redux.
                       Rails API handle the data persistence with a database.
                    </p>
                    <a className="projectsLink" href = "https://tripandtreat.netlify.app">Trip&Treat</a>
                    <p className="projectDescription">
                       An application where you can keep track of trips and food you eat with a short description and price.
                       Frontend built with JavaScript. 
                       Rails API handle the data persistence with a database.
                    </p>
                    <a className="projectsLink" href = " https://youtu.be/5dannSwmXn0">NabeB</a>
                    <p className="projectDescription">
                        An application for business owners to be found in their neighborhood and for people who want to support small businesses in their area.
                        Build with Ruby on Rails framework.
                        Standard user authentication,including signup, login, logout and passwords.
                        The authentication system also allows login with google account.

                    </p>
                    
                </div>

            </div>
        )
    }
}

export default Projects