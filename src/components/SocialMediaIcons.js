import React from 'react';
import { FaEnvelope, FaFacebook , FaGithub, FaLinkedin} from 'react-icons/fa';

const SocialMediaIcons = ()=>{
    return(
        <div>

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
                   <p className="copyright">2021 	&#169;Claudia Vamesu Halip</p>

        </div>
    )
}
 export default SocialMediaIcons