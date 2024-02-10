import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Skill from './components/Skill';

function App() {
  return (
    <div className="App">
        <Header/>
        <Hero/>
        <Skill/>
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
