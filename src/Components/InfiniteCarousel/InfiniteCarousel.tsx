import './InfiniteCarousel.css'
import $ from 'jquery';
import { useEffect, useState } from 'react';
import ModalProject from '../ModalProject/ModalProject';

const InfiniteCarousel = () => {

     const images = [ 
          'https://img.freepik.com/foto-gratis/retrato-abstracto-ojo-elegancia-mujeres-jovenes-generado-ai_188544-9712.jpg', 
          'https://img.freepik.com/foto-gratis/resumen-bombilla-creativa-sobre-fondo-azul-brillante-ia-generativa_188544-8090.jpg', 
          'https://img.freepik.com/foto-gratis/pintura-lago-montana-montana-al-fondo_188544-9126.jpg',
          'https://www.educaciontrespuntocero.com/wp-content/uploads/2020/04/mejores-bancos-de-imagenes-gratis.jpg'
     ]
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
     const [ indexImage, setIndexImage] = useState(0)

     const handleOpenModal = ( index : number ) => {
          setOpenModal( true);
          setIndexImage( index );
     }
     
     const handleCloseModal = () => {
          setOpenModal( false);
          setIndexImage( 0 );
     }

     return (
          <section className="sliderContentMajor">
               <div className="sliderContentDivs">
                    {images.map((image, index) => (
                         <div onClick={() => handleOpenModal(index)} key={`image-${index}`} className="divSlideCarousel" >
                              <img className='divSlideCarouselImage' src={image} alt="" />
                              <h2> Image: { index }</h2>
                         </div>
                    ))}
                    {images.map((image, index) => (
                         <div onClick={() => handleOpenModal(index)} key={`image-${index + images.length}`} className="divSlideCarousel" >
                              <img className='divSlideCarouselImage' src={image} alt="" />
                              <h2> Image: { index }</h2>
                         </div>
                    ))} 
               </div>
               {
                    openModal &&
                    <ModalProject image={ images[indexImage]} handleCloseModal={ handleCloseModal } />
               }
          </section>
     )
}

export default InfiniteCarousel