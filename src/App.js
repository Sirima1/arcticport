
import './index.css';
import Navbar from './Navbar';
import Hero from './components/Hero';
import Contact from './components/Contact';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
const App = (id) => {
  return (

  
   <div>
    <Navbar />
    <Hero />
    <Contact  id={id}/>
    <Projects />
    <About />
    <Footer />
   </div>
   
  )
}

export default App