import './App.css'
import Nav from './ViewComponents/Nav/Nav'
import Content from './ViewComponents/Content/Content'
import Footer from './ViewComponents/Footer/Footer'

const App = () => {
  return (
    <main className='mainContentMajor'>
      <Nav/>
      <Content/> 
      <Footer/>     
    </main>
  )
}

export default App
