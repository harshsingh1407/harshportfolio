import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificate from './components/Certificate'
import Contact from './components/Contact'
import Footer from './components/Footer'
// import { Route, Routes } from 'react-router-dom';

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // whether animation should happen only once
    });
  }, []);

  return (
    <div>
      <Header/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Certificate/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App