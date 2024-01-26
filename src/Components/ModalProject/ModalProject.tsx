import './ModalProject.css'

interface Project {
     image: string;
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

const ModalProject = ( { image }  : Project ) => {
     // const ModalProject = () => {
          // const image = 'https://www.educaciontrespuntocero.com/wp-content/uploads/2020/04/mejores-bancos-de-imagenes-gratis.jpg'
     return (
          <>
               <button> Abrir Modal </button>
               <div className="modal-container">
                    <div className="modal-content">
                         <img src={ image } alt="" />
                         <h2> Titulo del proyecto</h2>
                         <p>  
                              Descripcion del proyecto
                              Descripcion del proyecto
                         </p>
                         <button> cerrar modal</button>
                    </div>
               </div>
          </>
     )
}

export default ModalProject