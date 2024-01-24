import { useState } from "react"
import './SliderProjects.css'

     const SliderProjects = () => {
          const images = [ 
               'https://i.ebayimg.com/images/g/jqkAAOSwL~hbLtr3/s-l1200.webp', 
               'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2017/04/eevee-pokemon-go.jpg?tf=3840x', 
               'https://static0.gamerantimages.com/wordpress/wp-content/uploads/Pokemon-Eevee.jpg',
               'https://http2.mlstatic.com/D_NQ_NP_817145-MLU72637628411_112023-O.webp'
          ]
          const [countImages, setCountImages] = useState(0)
          
          const handleBack = () => {
               if (countImages > 0) {
               setCountImages(countImages - 1)
               }
               console.log(countImages)
          }
          
          const handleNext = () => {
               if (countImages < images.length - 1) {
               setCountImages(countImages + 1)
               }
               console.log(countImages)
          }
          
          return (
               <main>
               <button onClick={handleBack} disabled={countImages === 0}> ← </button>
               <div className="slider">
               {images.map((image, index) => (
                    <img key={index} src={image} style={{ transform: `translateX(${(index - countImages) * 100}%)`,}} alt="" />
               ))}
               </div>
               <button onClick={handleNext} disabled={countImages === images.length - 1}> → </button>
               </main>
          )
     }

export default SliderProjects;