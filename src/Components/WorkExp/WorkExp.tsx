import './WorkExp.css'

const WorkExp = () => {
     return (
          <section className='sectionWorkExp' id="workExperience" >
               <h2 style={{ fontSize: '35px', margin: '0' }}> Experiencia Laboral: </h2>
               <div style={{ padding: '50px 0', display:'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
                    <img src="https://the-fourth-element-client.vercel.app/_next/static/media/logo.dc0a4bbc.svg" alt="" style={{ placeSelf: 'center' }} />
                    <div style={{ gridColumnStart: '2', gridColumnEnd: '4', }}> 
                    <h3 style={{ margin: 0, padding: '10px 15px', fontSize: '25px'}}> 10 / 2023 - 12 / 2023 </h3>
                    <p style={{  margin: '0', padding: '0 15px', fontSize: '22px'}}>
                    Trabajé durante 2 meses como desarrollador frontend en una aplicación web de cursos para deportistas de alto rendimiento, propiedad de Estanislao Bachrach. Adquirí experiencia en diseño y desarrollo de interfaces atractivas utilizando tecnologías como JavaScript, React, NEXT.js, Zustand, Sass y Figma.
                    </p>
                    </div>
               </div>
          </section>
     )
}

export default WorkExp