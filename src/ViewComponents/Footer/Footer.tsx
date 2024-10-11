import "./Footer.css"

const Footer = () => {

     return (
          <footer>
               <section>
                    <h5>Social Media:</h5>
                    <div>
                    <a href="https://www.linkedin.com/in/angel-eduardo-zamora-sanchez-64b84226b/" target="_blank" title="LinkedIn">
                              <i className="devicon-linkedin-plain"></i>
                              </a>
                              <a href="https://github.com/AEZamoraSanchez" target="_blank" title="Github">
                                   <i className="devicon-github-original"></i>
                              </a>
                              <a href="https://hub.docker.com/u/aezamorasanchez" target="_blank" title="DockerHub">
                                   <i className="devicon-docker-plain"></i>
                              </a>
                    </div>
               </section>
               <section>
                    <h5 style={{ margin: '0'}}>Contact:</h5>
                    <div style={{ flexDirection: 'column', gap: '2px'}}>

                    <a href="mailto:angel.eduardo.zamora@gmail.com" title="Send Email">
                         ang02aezs@gmail.com
                    </a>
                    <p>+52 462 323 1583</p>
                    </div>
                    
               </section>
          </footer>
     )
}

export default Footer