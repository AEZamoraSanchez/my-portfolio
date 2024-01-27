import './ModalProject.css'
import { useEffect, useState } from 'react';
import $ from 'jquery'
interface Project {
     image: string;
     handleCloseModal: () => void;
}

// interface Tecnology {
//      tecnology: string;
//      logo: string;
// }
// interface Project {
//      images: string[];
//      title: string;
//      description: string;
//      tecnologys: Tecnology[]
// }




const ModalProject = ( { image, handleCloseModal }  : Project ) => {
     
     const [ altura, setAltura ] = useState(0)
     
     useEffect(() => {
          const newAltura = $('.mainContentMajor').height();
          newAltura && setAltura(newAltura);
     }, [])

     const stopPropagation = ( e : MouseEvent<HTMLDivElement> ) => {
          e.stopPropagation();
     };     

     return (
          <>
               <div onClick = { handleCloseModal } style={{ height: altura }} className="modal-container">
                    <div onClick={ stopPropagation } className="modal-content">
                         <img src={ image } alt="" />
                         <div className='modal-content-data'>
                              <h2> Titulo del proyecto</h2>
                              <p>  
                                   Descripcion del proyecto
                                   Descripcion del proyecto
                              </p>
                              <button onClick={ handleCloseModal }> cerrar modal</button>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default ModalProject