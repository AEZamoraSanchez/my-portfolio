import './Projects.css'
import InfiniteCarousel from '../InfiniteCarousel/InfiniteCarousel';

const Projects = () => {
     return (
          <section className='sectionProjects' id="projects" > 
               <h2 className='sectionProjectsH'>Mis Proyectos: </h2>
               <InfiniteCarousel/>
          </section>
     )
}

export default Projects;