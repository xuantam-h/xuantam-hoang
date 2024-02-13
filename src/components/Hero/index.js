import './Hero.scss';
import ResumePDF from '../../assets/pdf/cv-xuantam-web.pdf';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import hero from '../../assets/images/hero-img.webp';
import { social } from '../../assets/data/data';

const Hero = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section id="hero" className="container padding-global">
            <div className='hero-image'>
                <img src={hero} alt={"test"} />
            </div>
            <div className="hero-content">
                <h1><span>Xuan-Tam</span> Hoang</h1>
                <h2>Développeur Front-End</h2>
                <div className="hero-cta flex-container flex-vertical-center" data-aos="fade-up" data-aos-duration="600">
                    <a className="btn btn-primary" href={ResumePDF} target="_blank" rel="noreferrer">Télécharger mon CV</a>
                    <a className="btn btn-secondary" href={social[1].url} target="_blank" rel="noreferrer">GitHub</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;