import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import '../css/NavBar.css'

class NavBar extends Component {
   render(){
       return(
           <div className="navbar">
                
                    <li>
                       <Link to = '/' style={{ textDecoration: 'none' }}>
                            <p className="navBarLinks">Home</p>
                       </Link>
                    </li>

                    <li>
                       <Link to = '/about' style={{ textDecoration: 'none' }}>
                            <p className="navBarLinks">About me</p>
                       </Link>
                    </li>

                    {/* <li>
                       <Link to = '/resume' style={{ textDecoration: 'none' }}>
                            <p className="navBarLinks">Resume</p>
                       </Link>
                    </li> */}
                    <li>
                    <a href = "https://docs.google.com/document/d/1RVAdvHZDqCUlD1AsmmaC7uitJXe-ZJDLJFBB68IfIis" 
                target="_blank"
                style={{ textDecoration: 'none' }}
                ><p className="navBarLinks">Resume</p>
                    </a> 
                    </li>

                    <li>
                        <Link to = '/projects' style={{ textDecoration: 'none' }}>
                            <p className="navBarLinks">Projects</p>
                        </Link>
                    </li>

                    <li>
                        <Link to = '/articles' style={{ textDecoration: 'none' }}>
                            <p className="navBarLinks">Articles</p>
                        </Link>
                    </li>

                
            </div>
       )
   }
}
export default NavBar