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
                              <img className='logoImage' src="https://img.freepik.com/vector-gratis/diseno-logotipo-degradado-colorido-letra_474888-2309.jpg?w=740&t=st=1706075192~exp=1706075792~hmac=824de5ce3d13d3569fa7689ce02a7f525d884de356434791c565b15dce440e99" alt="" />
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