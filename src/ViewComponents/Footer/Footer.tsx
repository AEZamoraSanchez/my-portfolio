import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFile, faCircleArrowRight, faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { faClone } from "@fortawesome/free-regular-svg-icons"
import { useRef } from "react"
import { useState } from "react"
import "./Footer.css"

const Footer = () => {
     const [translateX, setTranslateX] = useState('0%');
     const [ rightLeft, setRightLeft ] = useState(true);
     const textRef = useRef<HTMLInputElement | null>(null);
     const divRef = useRef<HTMLDivElement | null>(null);

     const copyToClipboard = () => {
          textRef?.current?.select()
          document.execCommand('copy');
     };

     const handleButtonClick = () => {
          setTranslateX(translateX === '0%' ? '100%' : '0%');
          setRightLeft(!rightLeft);
     };

     return (
          <footer className="footerSection">
               <section id="sectionFooter" style={{ transform: `translateX(${translateX})` }}>
               {
                    rightLeft ? <FontAwesomeIcon className="footerSectionOpenClose" icon={faCircleArrowRight} onClick={handleButtonClick}/>
                    : <FontAwesomeIcon className="footerSectionOpenClose" icon={faCircleArrowLeft} onClick={handleButtonClick}/>
               }
               {/* <button id="openClose" onClick={handleButtonClick}>{rightLeft ? ">" : "<" }</button> */}
                    <div className="email-copy-div">
                         <input ref={textRef} value="ang02aezs@gmail.com" readOnly />
                         <FontAwesomeIcon icon={faClone} className="emailIcon" title="Copy Email" onClick={copyToClipboard}/>               
                    </div>
                    <div ref={divRef} className="redirect-links">
                    <a href="https://drive.google.com/file/d/1A-_o0A-GqGAfJ3jkFms9KEdSsK51tgAA/view?usp=sharing" target="_blank" title="Look CV">
                         <FontAwesomeIcon icon={faFile} className="fileIcon" />               
                    </a>
                    <a href="https://www.linkedin.com/in/angel-eduardo-zamora-sanchez-64b84226b/" target="_blank" title="Go LinkedIn">
                         <i className="devicon-linkedin-plain"></i>
                    </a>
                    <a href="https://github.com/AEZamoraSanchez" target="_blank" title="Go Github">
                         <i className="devicon-github-original"></i>
                    </a>
                    </div>
               </section>
          </footer>
     )
}

export default Footer