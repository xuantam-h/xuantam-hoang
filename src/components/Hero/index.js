import './Hero.scss';
import ResumePDF from '../../assets/pdf/cv-xuantam-hoang-dev.pdf';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import hero from '../../assets/images/hero-img.webp';
import { social } from '../../assets/data/data';
import Button from '../Button';

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
                <h1>Xuan-Tam <span>Hoang</span></h1>
                <h2>Développeur Front-End</h2>
                <div className="hero-cta flex-container flex-vertical-center" data-aos="fade-up" data-aos-duration="600">
                    <Button btnClass={"btn btn-primary"} btnHref={ResumePDF} btnTarget={"_blank"} btnRel={"noreferrer"}>Télécharger mon CV</Button>
                    <Button btnClass={"btn btn-secondary"} btnHref={social[0].url} btnTarget={"_blank"} btnRel={"noreferrer"}>GitHub</Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;