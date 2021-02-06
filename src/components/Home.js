import React, {Component} from 'react';
import aboutMe1 from'../images/1.jpg';
import aboutMe2 from'../images/2.jpg';
import photo from '../images/3.jpg';
import project1 from '../images/4.jpg';
import project2 from '../images/5.jpg';
import project3 from '../images/6.jpg';
import project4 from '../images/7.jpg';
import project5 from '../images/8.jpg';
import project6 from '../images/9.jpg';
import resume1 from '../images/10.jpg';
import resume2 from '../images/11.jpg';
import article1 from '../images/12.jpg';
import article2 from '../images/13.jpg';



class Home extends Component {
   render(){
       return (
            <div>
             
             
              <img src ={photo} className="image-home-page" >
              </img>

              <div className="cards">
              <a href="/about">
                <img src ={aboutMe2}></img>
                <img src ={aboutMe1}></img>
              </a>

              
              <a href = "https://docs.google.com/document/d/1RVAdvHZDqCUlD1AsmmaC7uitJXe-ZJDLJFBB68IfIis" 
                target="_blank">
                <img src ={resume1}></img>
                <img src ={resume2}></img>
              </a>

              <a href="/projects">
                <img src ={project1}></img>
                <img src ={project2}></img>
              </a>

              <a href="/projects">
                <img src ={project4}></img>
                <img src ={project3}></img>
              </a>

              <a href="/projects">
                <img src ={project6}></img>
                <img src ={project5}></img>
              </a>

              <a href="/articles">
                <img src ={article1}></img>
                <img src ={article2}></img>
              </a>

              
              </div>
                
            </div>
       )
   }
}
export default Home