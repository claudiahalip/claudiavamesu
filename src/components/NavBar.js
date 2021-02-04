import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { FaEnvelope, FaFacebook , FaGit, FaGithub, FaLinkedin} from 'react-icons/fa';

class NavBar extends Component {
   render(){
       return(
           <div>
               <div className="navbar">
                    <Link to = '/projects'>
                       <p className="navBarLinks">Projects</p>
                    </Link>
                  
                   <Link to = '/resume'>
                       <p className="navBarLinks">Resume</p>
                   </Link>

                   <Link to = '/'>
                       <p className="navBarLinks">Home</p>
                   </Link>

                   <div className="socialMediaIcons">
                       <a className="socialMediaIcons" href="https://www.linkedin.com/in/claudia-halip-b8556a4a/" target="_blank">
                       <FaLinkedin/>
                       </a>
                       <a className="socialMediaIcons" href = "https://www.facebook.com/claudiahalip/" target="_blank">
                       <FaFacebook/>
                       </a>
                       <a className="socialMediaIcons" href = "mailto:claudiahalip2012@gmai.com" >
                           <FaEnvelope/>
                       </a>
                       <a className="socialMediaIcons" href="https://github.com/claudiahalip" target="_blank">
                           <FaGithub/>
                       </a>
                   </div>
                   
               </div>

               
              

           </div>
       )
   }
}
export default NavBar