import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Skill from './components/Skill';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
        <Header/>
        <Hero/>
        <About/>
        <Projects/>
        <Skill/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
