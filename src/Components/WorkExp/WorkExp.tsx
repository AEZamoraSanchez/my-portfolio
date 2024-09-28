import './WorkExp.css'

const WorkExp = () => {
     return (
          <section className='sectionWorkExp' id="workExperience" >
               <h2> Work experience: </h2>
               <div className='divInfoExperience'>
                    <img src="https://the-fourth-element-client.vercel.app/_next/static/media/logo.dc0a4bbc.svg" alt="" />
                    <div className='divInfoExperienceText'> 
                    <h3> 09 / 2023 - 11 / 2023 </h3>
                    <p>
                    I worked for 2 months as a frontend developer in a web application of courses for high performance athletes, owned by Estanislao Bachrach.
                    </p>
                    </div>
               </div>
               <div className='divInfoExperience'>
                    <h3>Freelance</h3>
                    <div className='divInfoExperienceText'> 
                    <h3> 12 / 2023 - Present </h3>
                    <p>
                    I develop complete web solutions as a freelance
                    developer, covering both front-end and back-end.
                    </p>
                    </div>
               </div>
          </section>
     )
}

export default WorkExp