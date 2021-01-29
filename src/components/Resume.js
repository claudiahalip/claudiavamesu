import React, {Component} from 'react'
import resume from '../images/resume.png'
class Resume extends Component {
    render (){
        return(
            <div>
               <h2>Resume:</h2>
               <a href = "https://docs.google.com/document/d/1V-ta_5yjsvUN1UQfg-8nNxna-4AdTUS5/edit">
               <img className = "resume" src={resume}></img>
               </a>
               
            </div>
        )
    }
}

export default Resume