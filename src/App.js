
import './index.css';
// import Navbar from './Navbar';
import Hero from './components/Hero';
import Contact from './components/Contact';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Navbaar from './components/nav/Navbaar';
const App = (id) => {
  return (

  
   <div>
    <Navbaar />
    <Hero />
    <Contact  id={id}/>
    <Projects id={id}/>
    <About id={id} />
    <Footer id={id} />
   </div>
   
  )
}

export default App