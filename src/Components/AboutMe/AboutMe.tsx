import './AboutMe.css'
const AboutMe = () => {
     return (
          <section className='sectionAboutMe' id="aboutMe" >
               <div className='divDescription'>
                    <h1>Angel Eduardo Zamora Sanchez</h1>
                    <h2>Full-Stack Web Developer </h2>
                    <p>
                    Full-Stack developer with a strong background in key technologies for web development. My experience includes building high performance web applications using technologies such as JavaScript, TypeScript, Reactjs, Angular, NEXT.js, Redux and Zustand on the front-end side. I am also familiar with Tailwind, CSS and Sass for style management. I have experience in server-side and API development with Node.js, Express and Nest on the back-end side. In addition to knowledge in SQL databases such as MySQL, PostgreSQL, SQLite and SQLServer and noSQL such as MongoDB.
                    </p>
               </div>
               <div className='divImagePerfil'>
                    <img src="https://img.freepik.com/foto-gratis/retrato-abstracto-ojo-elegancia-mujeres-jovenes-generado-ai_188544-9712.jpg" alt="" className='profileImage'/>
               </div>     
          </section>
     )
}

export default AboutMe;