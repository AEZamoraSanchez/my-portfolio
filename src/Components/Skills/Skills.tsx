import './Skills.css'
import { tecnologiesIKnowToShow } from '../../Data/projects'

const Skills = () => {
     return (
          <section className='sectionSkills' id="skills" >
               <h2> Technologies: </h2> 
               <div className="tecnologies-content">
                    {
                         tecnologiesIKnowToShow.map((tecnology, index) => (
                              <div key={index}>
                                   <i className={ tecnology.class }/>
                                   <h3>{tecnology.name}</h3>
                              </div>
                         ))
                    }
               </div>
          </section>
     )
}

export default Skills