import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { FaFacebook , FaLinkedin} from 'react-icons/fa';

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
                       <FaLinkedin/>
                       <FaFacebook/>
                   </div>
                   
               </div>

               
              

           </div>
       )
   }
}
export default NavBar