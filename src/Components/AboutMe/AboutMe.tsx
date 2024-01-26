import './AboutMe.css'
const AboutMe = () => {
     return (
          <section className='sectionAboutMe' id="aboutMe" >
               <div className='divDescription'>
                    <h2>titulo acerca de esto</h2>
                    <p>
                         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id quidem, corporis iure ipsum perferendis modi ad numquam possimus atque dolore, tempora blanditiis? Facilis atque quasi veritatis doloribus maxime nam quidem!
                    </p>
               </div>
               <div className='divImagePerfil'>
                    <img src="https://img.freepik.com/foto-gratis/retrato-abstracto-ojo-elegancia-mujeres-jovenes-generado-ai_188544-9712.jpg" alt="" className='profileImage'/>
               </div>     
          </section>
     )
}

export default AboutMe;