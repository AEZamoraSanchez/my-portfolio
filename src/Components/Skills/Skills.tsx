import './Skills.css'
import { tecnologiesIKnowToShow } from '../../Data/projects'

const Skills = () => {
     return (
          <section className='sectionSkills' id="skills" >
               <h2 style={{ fontSize: '35px', margin: '0', color: 'rgb(241, 221, 255)' }}> Tecnologias: </h2> 
               <div className="tecnologies-content" style={{ display: 'flex', gap: '20px', width: '100%', flexWrap: 'wrap', padding: '20px 0', justifyContent: 'center' }}>
                    {
                         tecnologiesIKnowToShow.map((tecnology, index) => (
                              <div key={index} style={{ width: '180px', aspectRatio: '1 / 1', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                                   <i style={{ fontSize: '100px', color: 'rgb(241, 221, 255)' }} className={ tecnology.class }/>
                                   <h3 style={{ fontSize: '32px', textAlign: 'center', margin: '0', color: 'rgb(241, 221, 255)'}}>{tecnology.name}</h3>
                              </div>
                         ))
                    }
               </div>
          </section>
     )
}

export default Skills