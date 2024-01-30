import { useState } from "react"
import './SliderProjects.css'

     interface SliderProjectsProps {
          images: string[];
     }

     const SliderProjects = ({ images } : SliderProjectsProps ) => {

          const [countImages, setCountImages] = useState(0)
          
          const handleBack = () => {
               if (countImages > 0) {
               setCountImages(countImages - 1)
               }
          }
          
          const handleNext = () => {
               if (countImages < images.length - 1) {
               setCountImages(countImages + 1)
               }
          }
          
          return (
               <section className="sliderManualContent">
                    { images &&
                    <>
                         <button style={{ borderRadius: '15px 0 0 0', border: 'none'}} onClick={handleBack} disabled={countImages === 0}> ← </button>
                         <div className="sliderManual">
                         {images.map((image, index) => (
                              <img key={index} src={image} style={{ transform: `translateX(${(index - countImages) * 100}%)`,}} alt="" />
                         ))}
                         </div>
                         <button style={{ borderRadius: '0 15px 0 0', border: 'none'}} onClick={handleNext} disabled={countImages === images.length - 1}> → </button>
                    </>
                    }
               </section>
          )
     }

export default SliderProjects;