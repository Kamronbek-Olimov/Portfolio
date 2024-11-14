import { BrowserRouter } from 'react-router-dom'
import '../css/App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Services from './pages/services/Services'
import Projects from './pages/projects/Projects'
import Contact from './pages/contact/Contact'
import { useState } from 'react'
import Footer from './components/footer/Footer'
function App() {
  const [menu, setMenu] = useState(false)
  return (
    <div className='body'>
      <BrowserRouter>
        <Navbar menu={menu} setMenu={setMenu} />
        <Home />
        <About />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </BrowserRouter>
    </div>
  )
}
export default App