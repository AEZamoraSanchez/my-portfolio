import './InfiniteCarousel.css'

const InfiniteCarousel = () => {

     const images = [ 
          'https://img.freepik.com/foto-gratis/retrato-abstracto-ojo-elegancia-mujeres-jovenes-generado-ai_188544-9712.jpg', 
          'https://img.freepik.com/foto-gratis/resumen-bombilla-creativa-sobre-fondo-azul-brillante-ia-generativa_188544-8090.jpg', 
          'https://img.freepik.com/foto-gratis/pintura-lago-montana-montana-al-fondo_188544-9126.jpg',
          'https://www.educaciontrespuntocero.com/wp-content/uploads/2020/04/mejores-bancos-de-imagenes-gratis.jpg'
     ]

     return (
          <section className="sliderContentMajor">
               <div className="sliderContentDivs">
                    {images.map((image, index) => (
                         <div key={`image-${index}`} className="divSlideCarousel">
                              <img className='divSlideCarouselImage' src={image} alt="" />
                         </div>
                    ))}
                    {images.map((image, index) => (
                         <div key={`image-${index + images.length}`} className="divSlideCarousel">
                              <img className='divSlideCarouselImage' src={image} alt="" />
                         </div>
                    ))} 
               </div>
          </section>
     )
}

export default InfiniteCarousel