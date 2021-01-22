import React, {Component} from 'react'
import resume from '../images/resume.jpg'
class Resume extends Component {
    render (){
        return(
            <div>
               <h2>Resume:</h2>
               <img className = "resume" src={resume}></img>
            </div>
        )
    }
}

export default Resume