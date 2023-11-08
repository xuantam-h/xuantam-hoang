import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
        <Header/>
        <Hero/>
        <About/>
        <Projects/>
        <Experience/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
