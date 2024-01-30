import './AboutMe.css'
const AboutMe = () => {
     return (
          <section className='sectionAboutMe' id="aboutMe" >
               <div className='divDescription'>
                    <h1>Angel Eduardo Zamora Sanchez.</h1>
                    <h2>Full-Stack Web Developer </h2>
                    <p>
                    Desarrollador Full-Stack con una sólida formación en tecnologías clave para el desarrollo web. Mi experiencia incluye la creación de aplicaciones web de alto rendimiento utilizando tecnologías como JavaScript, TypeScript, React, NEXT.js y Redux en el lado del front-end. También estoy familiarizado con Zustand para la gestión de estados y Sass para el manejo de estilos. Además, cuento con experiencia en el desarrollo de servidores y API con Node.js en el lado del back-end.
                    </p>
               </div>
               <div className='divImagePerfil'>
                    <img src="https://img.freepik.com/foto-gratis/retrato-abstracto-ojo-elegancia-mujeres-jovenes-generado-ai_188544-9712.jpg" alt="" className='profileImage'/>
               </div>     
          </section>
     )
}

export default AboutMe;