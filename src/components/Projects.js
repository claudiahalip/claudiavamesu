import React , {Component} from 'react';
import video from '../images/NabeB_application.mp4';
import {FaGithub} from 'react-icons/fa';
import '../css/Projects.css';
import project2 from '../images/5.jpg';
import project3 from '../images/6.jpg';
import project5 from '../images/8.jpg';
import brakingBad from '../images/BrakingBad.jpg'
import garageSale from '../images/garageSale.jpg'


class Projects extends Component {
    render (){
        return (
            <div>
                
                <div className="projectsCards">
                    <img src={project2}></img>
                    <div className="projects">
                        <h2>Photogig</h2>
                        <p>An application that makes it easy to find nearby
                            photographers, read reviews, and visit photographer website. 
                        </p>
                        <h3>Frontend built with React-Redux, CSS, HTML.
                           Rails API handle the data persistence with a database.
                        </h3>
                        <a className="projectsLink" href = "https://photogig.netlify.app/" target="_blank">See it in action!</a>
                        <a className="socialMediaIcons" href="https://github.com/claudiahalip/NabeB-rails_project" target="_blank">
                                <FaGithub/>
                        </a>
                    </div>
                </div>
                    
                <div className="projectsCards">
                    <img src={project3}></img>
                    <div className="projects">
                        <h2>Trip&Treat</h2>
                        <p> An application for individuals to keep track of the 
                            price and description of various cuisines found on vacation.
                        </p>
                        <h3>Built with: JavaScript, Ruby on Rails, HTML, HTML</h3>
                        <a className="projectsLink" href = "https://tripandtreat.netlify.app" target="_blank">See it in action!</a>

                        <a className="socialMediaIcons" href="https://github.com/claudiahalip/TripAndTreat-frontend" target="_blank">
                            <FaGithub/>
                        </a>
                    </div>
                </div>
                 
                <div className="projectsCards">
                    <img src={project5}></img>
                    <div className="projects">
                    <h2>NabeB</h2>
                    <p> An application for individuals seeking to support small
                        businesses in their area by providing a repository of local businesses.
                    </p>
                    <h3>Build with: Ruby on Rails framework, CSS, HTML
                    Standard user authentication, including signup, login, logout and passwords. 
                    The authentication system also allows login with google account.
                    </h3> 
                    <a className="projectsLink" href = " https://youtu.be/5dannSwmXn0" target="_blank">See it in action!</a>
                    
                    <a className="socialMediaIcons" href="https://github.com/claudiahalip/NabeB-rails_project" target="_blank">
                        <FaGithub/>
                    </a>
                    </div>
                </div>
            
                <div className="projectsCards">
                    <img src={garageSale}></img>
                    <div className="projects">
                    <h2>Garage Sale</h2>
                    <p> This app is a simple way for individual to keep track or sell their unused chlotes. 
                        Users can create their own accounts, login and logout.
                        Also the user can create, see, update and delete the resource that belongs to them.
                        They only can see other useres resources.
                    </p>
                    <h3>Build with: Ruby, MVC Sinatra framework,Active Record, CSS, HTML
                    </h3> 
                    <a className="projectsLink" href = "https://www.youtube.com/watch?v=5itfacBK7q4&t=1s" target="_blank">See it in action!</a>
                    
                    <a className="socialMediaIcons" href="https://github.com/claudiahalip/garage_sale/tree/master/garage_sale" target="_blank">
                        <FaGithub/>
                    </a>
                    </div>
                </div>

                <div className="projectsCards">
                    <img src={brakingBad}></img>
                    <div className="projects">
                    <h2>CLI BrakingBad</h2>
                    <p> This application bring out to Braking Bad's fans facts about this TV series.
                    </p>
                    <h3> A Command Line Interface (CLI) composed of an Object Oriented Ruby application.
                    Behind the scenes it is creating calls to an API.

                    </h3> 
                    <a className="projectsLink" href = "https://www.youtube.com/watch?v=JK6X6jfTRRA" target="_blank">See it in action!</a>
                    
                    <a className="socialMediaIcons" href="https://github.com/claudiahalip/NabeB-rails_project" target="_blank">
                        <FaGithub/>
                    </a>
                    </div>
                </div>

            </div>
        )
    }
}

export default Projects