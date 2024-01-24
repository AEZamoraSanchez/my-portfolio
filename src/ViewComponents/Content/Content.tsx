import './Content.css'
import Projects from '../../Components/Projects/Projects'
import WorkExp from '../../Components/WorkExp/WorkExp'
import Skills from '../../Components/Skills/Skills'
import AboutMe from '../../Components/AboutMe/AboutMe'

const Content = () => {
     return (
          <section className="contentPortfolio">
               <AboutMe/>
               <Projects/>
               <WorkExp/>
               <Skills/>
          </section>
     )
}

export default Content