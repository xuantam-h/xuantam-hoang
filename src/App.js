import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Skill from './components/Skill';
import Button from './components/Button';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
        <Header/>
        <Hero/>
        <About/>
        <Projects/>
        <Skill/>
        <Footer/>
    </div>
  );
}

export default App;
