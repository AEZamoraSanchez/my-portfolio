import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFile } from "@fortawesome/free-solid-svg-icons"
import { faClone } from "@fortawesome/free-regular-svg-icons"
import { useRef } from "react"
import "./Footer.css"

const Footer = () => {

     const textRef = useRef<HTMLInputElement | null>(null);
     const divRef = useRef<HTMLDivElement | null>(null);

     const copyToClipboard = () => {
          textRef?.current?.select()
          document.execCommand('copy');
     };
     return (
          <footer className="footerSection">
               <section>
                    <div className="email-copy-div">
                         <input ref={textRef} value="ang02aezs@gmail.com" readOnly />
                         <FontAwesomeIcon icon={faClone} className="emailIcon" title="Copiar correo" onClick={copyToClipboard}/>               
                    </div>
                    <div ref={divRef} className="redirect-links">
                    <a href="https://drive.google.com/file/d/1A-_o0A-GqGAfJ3jkFms9KEdSsK51tgAA/view?usp=sharing" target="_blank" title="Ver CV">
                         <FontAwesomeIcon icon={faFile} className="fileIcon" />               
                    </a>
                    <a href="https://www.linkedin.com/in/angel-eduardo-zamora-sanchez-64b84226b/" target="_blank" title="Ir a LinkedIn">
                         <i className="devicon-linkedin-plain"></i>
                    </a>
                    <a href="https://github.com/AEZamoraSanchez" target="_blank" title="Ir a github">
                         <i className="devicon-github-original"></i>
                    </a>
                    {/* 
                     */}
                         {/* <FontAwesomeIcon icon={faEnvelope} className="emailIcon" title="Copiar correo"/>                */}
                    {/* </a> */}
                    </div>
               </section>
          </footer>
     )
}

export default Footer