import React, {Component} from 'react'
import resume from '../images/resume.png'
class Resume extends Component {
    render (){
        return(
            <div>
               <h2>Resume:</h2>
               <a href = "https://docs.google.com/document/d/1RVAdvHZDqCUlD1AsmmaC7uitJXe-ZJDLJFBB68IfIis" target="_blank">
               <img className = "resume" src={resume}></img>
               </a>
            </div>
            
        )
    }
}

export default Resume