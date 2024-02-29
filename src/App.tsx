import './App.css'
import Nav from './ViewComponents/Nav/Nav'
import Content from './ViewComponents/Content/Content'
import Footer from './ViewComponents/Footer/Footer'

const App = () => {
  return (
    <>
      <Nav/>
      <main className='mainContentMajor'>
        <Content/> 
      </main>
      <Footer/>     
    </>
  )
}

export default App
