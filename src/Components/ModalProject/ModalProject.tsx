import './ModalProject.css'
import { useEffect, useState } from 'react';
import $ from 'jquery'
import SliderProjects from '../SliderProjects/SliderProjects';
import { Project  } from '../../Data/projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faLink } from '@fortawesome/free-solid-svg-icons'; 

interface DataModalProject {
     project: Project
     handleCloseModal: () => void;
}

// interface Tecnology {
//      tecnology: string;
//      logo: string;
// }

const ModalProject = ( { project, handleCloseModal }  : DataModalProject ) => {
     
     const [ altura, setAltura ] = useState(0)
     
     useEffect(() => {
          const newAltura = $('.mainContentMajor').height();
          newAltura && setAltura(newAltura);
     }, [])

     const stopPropagation = ( e: React.MouseEvent<HTMLDivElement> ) => {
          e.stopPropagation();
     };     

     return (
          <>
               <div onClick = { handleCloseModal } style={{ height: altura }} className="modal-container">
                    <div onClick={ stopPropagation } className="modal-content">
                         <FontAwesomeIcon icon={ faCircleXmark } className='closeButton' onClick={ handleCloseModal }/>
                         <SliderProjects images={ project.images } />
                         <div className='modal-content-data'>
                              <div className='modal-content-data-github'>
                              <h2>{ project.name }</h2>
                              <div className='links-content-modal'>
                                   {
                                        project.deployed &&
                                        <a href={ project.deployed } target="_blank">
                                             <FontAwesomeIcon className='link-icon' icon={ faLink } />
                                        </a>
                                   }
                                        
                                   <a href={project.github} target="_blank">
                                        <i className="devicon-github-original"></i>
                                   </a>
                              </div>
                              </div>
                              <p> { project.description  }</p>
                              <div className='tecnologiesUsed'>
                                   <h3>Technologies used </h3>
                                   <div className='allTecnologiesContent'>
                                        { 
                                         project?.tecnologies?.map((tecnology, index ) => (
                                             <div className='divTecnology' key={ index }>
                                                  <i className={tecnology?.class}/>
                                                  <p>{tecnology?.name}</p>
                                             </div>
                                         ))
                                        }	
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default ModalProject