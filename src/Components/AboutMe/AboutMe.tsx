import { useRef } from 'react';
import './AboutMe.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClone } from '@fortawesome/free-solid-svg-icons';
const AboutMe = () => {

     const textRef = useRef<HTMLInputElement | null>(null);
     const copyToClipboard = () => {
          textRef?.current?.select()
          document.execCommand('copy');
     };

     return (
          <section className='sectionAboutMe' id="aboutMe" >
               <div className='divDescription'>
                    <h1>Angel Eduardo Zamora Sanchez</h1>
                    <h2>Full-Stack Web Developer with 2 years experience </h2>
                    <p>
                    I am a passionate Full-Stack Web Developer with 2
                    years of hands-on experience in crafting
                    high-performance web applications.
                    My expertise spans both front-end and back-end
                    technologies, allowing me to deliver comprehensive
                    solutions. I'm constantly learning and adapting to new
                    technologies, with a particular interest in cloud
                    services and containerization using AWS and Docker.

                    </p>
               </div>
               <div className='divImagePerfil'>
                    <img src="https://res.cloudinary.com/dhs2okdae/image/upload/v1722847843/cypfqdwxazrkiejr6ame.jpg" alt="" className='profileImage'/>
                    
                    <div className='emailCvDiv'>
                         <label htmlFor="myEmail" className="email-copy-div" onClick={copyToClipboard}>
                              <input id="myEmail" ref={textRef} value="ang02aezs@gmail.com" readOnly />
                              <FontAwesomeIcon icon={faClone} className="emailIcon" title="Copy Email" />               
                         </label>
                         <a href="https://drive.google.com/file/d/15c4kwYBJ4dqQHh3RdeEEY_Ohxavqt6iG/view?usp=sharing" target="_blank" title="Look CV">
                         <button>See CV</button>
                         </a>
                    </div>
               </div>     
          </section>
     )
}

export default AboutMe;