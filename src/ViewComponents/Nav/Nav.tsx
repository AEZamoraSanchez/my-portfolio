import './Nav.css'
import $ from 'jquery';

const Nav = () => {

     $(document).ready(() => {
          $('#nav').addClass('navBar');

          setTimeout(function() {
               $('#nav').removeClass('navBar');
               $('#nav').addClass('navBarScroll');
           }, 1500);
     })

     return (
               <nav id='nav'>
                    <div className='sectionImage'>
                         <a href="#aboutMe">
                              <img className='logoImage' src="https://w7.pngwing.com/pngs/1008/532/png-transparent-wolf-logo-symbol-thumbnail.png" alt="" />
                         </a>
                         
                    </div>


                    <div className='sectionLinks'>
                         <a href="#aboutMe">About me</a>

                         <a href="#projects">Projects</a>
                              
                         <a href="#workExperience">Work Experience</a>     
                              
                         <a href="#skills">Skills</a>
                    </div>
               </nav>
     )
}

export default Nav