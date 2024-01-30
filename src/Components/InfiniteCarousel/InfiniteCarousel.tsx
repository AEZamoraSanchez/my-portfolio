import './InfiniteCarousel.css'
import $ from 'jquery';
import { useEffect, useState } from 'react';
import ModalProject from '../ModalProject/ModalProject';
import { projects } from '../../Data/projects';

const InfiniteCarousel = () => {


     useEffect(() => {
          let timeOutHover : number ;

          $('.divSlideCarousel').hover(
               function () {
                    timeOutHover = setTimeout(() => {
                         $(this).siblings().css('transform', 'scale(0.8)');
                         $(this).siblings().css('transition-duration', '1.5s');
                         $(this).css('transform', 'scale(1.2)');
                         $(this).css('cursor', 'pointer');
                         $(this).css('transition-duration', '1.5s');
                    }, 200)
               },
               function() {
                    clearTimeout(timeOutHover);
                    $(this).siblings().css('transform', 'scale(1)');
                    $(this).siblings().css('transition-duration', '0.5s');
                    $(this).css('transform', 'scale(1)');
                    $(this).css('transition-duration', '0.5s')
               }
          )
     })

     const [openModal, setOpenModal] = useState( false );
     const [ indexProject, setIndexProject] = useState(0)

     const handleOpenModal = ( index : number ) => {
          setOpenModal( true);
          setIndexProject( index );
     }
     
     const handleCloseModal = () => {
          setOpenModal( false);
          setIndexProject( 0 );
     }

     return (
          <section className="sliderContentMajor">
               <div className="sliderContentDivs">
                    {projects.map((project, index) => (
                         <div onClick={() => handleOpenModal(index)} key={`image-${index}`} className="divSlideCarousel" >
                              <img className='divSlideCarouselImage' src={project.imageMain} alt="" />
                              <h2 style={{ fontSize: '30px', margin: '20px 0', textAlign: 'center' }}>{ project.name }</h2>
                         </div>
                    ))}
                    {projects.map((project, index) => (
                         <div onClick={() => handleOpenModal(index)} key={`image-${index + project.images.length}`} className="divSlideCarousel" >
                              <img className='divSlideCarouselImage' src={project.imageMain} alt="" />
                              <h2 style={{ fontSize: '30px', margin: '20px 0', textAlign: 'center' }}> { project.name }</h2>
                         </div>
                    ))} 
               </div>
               {
                    openModal &&
                    <ModalProject project={ projects[indexProject]} handleCloseModal={ handleCloseModal } />
               }
          </section>
     )
}

export default InfiniteCarousel