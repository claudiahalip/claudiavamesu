import React from 'react';
import image from '../images/Chicago.jpg'

const AboutMe = ()=>{
    return(
        <div style={{ backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat' ,
        backgroundPosition: 'center',
        // backgroundWidth: ' 1500px',
        // backgroundHeight: '800px'
        backgroundSize: 'auto'
         }}>
             <div>
                <br/>
                <br/>
                <br/>
                <br/>

                <p className="story">
                I live in the Chicago suburbs. I recently graduated from Flatiron school, currently working on my own projects where I can practice my skills gained during my time there.
                I’ve graduated from college many years ago with a bachelor’s degree in Public Administration
                but I’ve always known that I wanted to work in tech. This year I decided to change my career...
                Before this change I worked as a photographer. I started as a photojournalist for a local newspaper. Through photography I traveled the world, worked on cruise ships, and met many interesting people.
                Years later, my husband and I created H Photography, our own business which operates in Europe and USA.
                When I'm not coding or photographing I like to play guitar, I'm teaching myself to play piano, I read, and also spend time with my family.
                I am looking for opportunities where I can improve my knowledge and grow in this big and fascinating field of technology.
                </p>  
             </div>

        </div>
    )
}

export default AboutMe