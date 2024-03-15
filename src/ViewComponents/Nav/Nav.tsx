import './Nav.css'
// import $ from 'jquery';
import { useState } from 'react';

const Nav = () => {

     const width = innerWidth
     const [ openMenu, setOpenMenu ] = useState( width <= 550 ? false : true);

     // $(document).ready(() => {
     //      $('#nav').addClass('navBar');

     //      setTimeout(function() {
     //           $('#nav').removeClass('navBar');
     //           $('#nav').addClass('navBarScroll');
     //       }, 1500);
     // })

     const scrollToComponent = (componentId : string ) => {
          const component = document.getElementById(componentId);
      
          if (component) {
            component.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        };

     return (
               <nav id='nav' className='navBarScroll'>
                         <a className='logoContent' href="#aboutMe">
                              <img className='logoImage' src="https://w7.pngwing.com/pngs/1008/532/png-transparent-wolf-logo-symbol-thumbnail.png" alt="" />
                         </a>

                    {
                         openMenu && 
                              <div className='sectionLinks'>
                                   <a onClick={ () => scrollToComponent('aboutMe')}>About me</a>

                                   <a onClick={ () => scrollToComponent('projects')}>Projects</a>
                                        
                                   <a onClick={ () => scrollToComponent('workExperience')}>Experience</a>     
                                        
                                   <a onClick={ () => scrollToComponent('skills')}>Technologies</a>
                              </div>
                    }

                         <button className='openMenu' onClick={ () => { setOpenMenu(!openMenu) 
                              console.log(width)}}> Open Menu</button>
               </nav>
     )
}

export default Nav