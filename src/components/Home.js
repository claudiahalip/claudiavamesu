import React, {Component} from 'react'
import background from '../images/photo-profile.jpg'

class Home extends Component {
   render(){
       return (
            <div>
              <h2>My story:</h2>
              <p className="story">
              Hi, my name is Claudia and I live in the Chicago suburbs. I recently finished Flatiron school, currently working on my own projects where I can practice my skills gained during my time there.
              I am originally from Romania. I’ve graduate from college many years ago with a bachelor’s degree in Public Administration
              but I’ve always known I wanted to work in tech. This year I decided to change my career.
              Before this change I worked as a photographer. I've started by working as a photojournalist for a local newspaper. Through photography I traveled the world, worked on cruise ships, and met many interesting people.
              Years later, my husband and I created H Photography, our own business which operare in Europe and USA.
              When I'm not coding or photographing I learn to play piano, I'm reading and also spent time with my family.
              I am looking for opportunities where I can improve my knowledge and grow in this big and fascinated field.
              </p>       
            </div>
       )
   }
}
export default Home