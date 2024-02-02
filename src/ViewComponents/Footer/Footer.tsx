import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import "./Footer.css"

const Footer = () => {
     return (
          <footer className="footerSection">
               <div>
               <a href="https://www.linkedin.com/in/angel-eduardo-zamora-sanchez-64b84226b/" target="_blank">
                    <i className="devicon-linkedin-plain"></i>
               </a>
               <a href="https://github.com/AEZamoraSanchez" target="_blank">
                    <i className="devicon-github-original"></i>
               </a>
               <a href="">
                    <FontAwesomeIcon icon={faEnvelope} className="emailIcon"/>               
               </a>
               </div>
          </footer>
     )
}

export default Footer