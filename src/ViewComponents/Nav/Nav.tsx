import './Nav.css'
// import $ from 'jquery';
import { useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type BlockPosition = 'start' | 'center' | 'end'

const Nav = () => {

     // const width = innerWidth
     const [ openMenu, setOpenMenu ] = useState( false );

     const scrollToComponent = (componentId : string, position: BlockPosition ) => {
          const component = document.getElementById(componentId);
      
          if (component) {
            component.scrollIntoView({ behavior: 'smooth', block: position });
          }
        };

     return (
               <nav id='nav' className='navBarScroll'>
                              <img className='logoImage' onClick={ () => scrollToComponent('aboutMe', 'center')} src="https://w7.pngwing.com/pngs/1008/532/png-transparent-wolf-logo-symbol-thumbnail.png" alt="" />
                         <div className='iconsDiv'>
                              <a href="https://www.linkedin.com/in/angel-eduardo-zamora-sanchez-64b84226b/" target="_blank" title="Go LinkedIn">
                              <i className="devicon-linkedin-plain"></i>
                              </a>
                              <a href="https://github.com/AEZamoraSanchez" target="_blank" title="Go Github">
                                   <i className="devicon-github-original"></i>
                              </a>
                         </div>
                         { openMenu &&
                              <div className='sectionLinks'>
                                   <button onClick={ () => scrollToComponent('projects', 'center')}>Projects</button>
                                        
                                   <button onClick={ () => scrollToComponent('workExperience', 'center')}>Experience</button>     
                                        
                                   <button onClick={ () => scrollToComponent('skills', 'start')}>Technologies</button>
                              </div>
                         }

                              <div className='sectionLinks900'>
                                   <button onClick={ () => scrollToComponent('projects', 'center')}>Projects</button>
                                        
                                   <button onClick={ () => scrollToComponent('workExperience', 'center')}>Experience</button>     
                                        
                                   <button onClick={ () => scrollToComponent('skills', 'start')}>Technologies</button>
                              </div>
                    

                         <FontAwesomeIcon icon={ faBars } className='openMenu' onClick={ () => { setOpenMenu(!openMenu) }}/>
               </nav>
     )
}

export default Nav