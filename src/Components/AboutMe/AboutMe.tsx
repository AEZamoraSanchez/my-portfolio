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
                    <h2>Full-Stack Web Developer </h2>
                    <p>
                    Full-Stack developer with a strong background in key technologies for web development. My experience includes building high performance web applications using technologies such as JavaScript, TypeScript, Reactjs, Angular, NEXT.js, Redux and Zustand on the front-end side. I am also familiar with Tailwind, CSS and Sass for style management. I have experience in server-side and API development with Node.js, Express and Nest on the back-end side. In addition to knowledge in SQL databases such as MySQL, PostgreSQL, SQLite and SQLServer and noSQL such as MongoDB.
                    </p>
               </div>
               <div className='divImagePerfil'>
                    <img src="https://img.freepik.com/foto-gratis/retrato-abstracto-ojo-elegancia-mujeres-jovenes-generado-ai_188544-9712.jpg" alt="" className='profileImage'/>
                    <div className='emailCvDiv'>
                         <div className="email-copy-div" onClick={copyToClipboard}>
                              <input ref={textRef} value="ang02aezs@gmail.com" readOnly />
                              <FontAwesomeIcon icon={faClone} className="emailIcon" title="Copy Email" />               
                         </div>
                         <a href="https://drive.google.com/file/d/1jtrRuRGjWCrbaw5SHIrDL6F6BCalmVoh/view?usp=sharing" target="_blank" title="Look CV">
                         <button>See CV</button>
                         </a>
                    </div>
               </div>     
          </section>
     )
}

export default AboutMe;