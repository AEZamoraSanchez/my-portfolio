import './Skills.css'
import { languages } from '../../Data/languages'
import { front } from '../../Data/frontend'
import { backend } from '../../Data/backend'
import { databases } from '../../Data/databases'
import { othersTechnologies } from '../../Data/otherTechnologies';

const Skills = () => {
     return (
          <section className='sectionSkills' id="skills" >
               <h2> Technologies: </h2> 
               <div className="tecnologies-content-language">
                    
                    {
                         languages.map((language, index) => (
                              <div key={index}>
                                   <i className={ language.class }/>
                                   <p>{language.name}</p>
                              </div>
                         ))
                    }
               </div>
               <div className='sectionStack'>
                    <h3>Frontend:</h3>
                    <div className="tecnologies-content">
                         {
                              front.map((front, index) => (
                                   <div key={index}>
                                        <i className={ front.class }/>
                                        <p>{front.name}</p>
                                   </div>
                              ))
                         }
                    </div>
               </div>
               <div className='sectionStack'>
                    <h3>Backend:</h3>
                    <div className="tecnologies-content">
                         {
                              backend.map((backend, index) => (
                                   <div key={index}>
                                        <i className={ backend.class }/>
                                        <p>{backend.name}</p>
                                   </div>
                              ))
                         }
                    </div>
               </div>
               <div className='sectionStack'>
                    <h3>Databases:</h3>
                    <div className="tecnologies-content">
                         {
                              databases.map((databases, index) => (
                                   <div key={index}>
                                        <i className={ databases.class }/>
                                        <p>{databases.name}</p>
                                   </div>
                              ))
                         }
                    </div>
               </div>
               <div className='sectionStack'>
                    <h3>Other Technologies:</h3>
                    <div className="tecnologies-content">
                         {
                              othersTechnologies.map((othersTechnologies, index) => (
                                   <div key={index}>
                                        <i className={ othersTechnologies.class }/>
                                        <p>{othersTechnologies.name}</p>
                                   </div>
                              ))
                         }
                    </div>
               </div>

          </section>
     )
}

export default Skills