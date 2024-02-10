import './Hero.scss';
import ResumePDF from '../../assets/pdf/cv-xuantam-web.pdf';
import Social from '../Social';

const Hero = () => {
    return (
        <section id="hero" className="container padding-global">
            <div className="hero-content">
                <h1>Xuan-Tam <span>Hoang</span></h1>
                <h2>Développeur Front-End</h2>
                <div>
                    <p>Formé par OpenClassrooms, je dispose d'une expérience de deux ans en agence en tant qu'Intégrateur Web.</p>
                    <p>Collaborons ensemble pour réaliser le <strong>site ou application Web de vos rêves à votre image</strong> !</p>
                </div>
                <div className="hero-cta flex-container flex-vertical-center">
                    <a className="btn" href={ResumePDF} target="_blank" rel="noreferrer">Télécharger mon CV</a>
                    <Social/>
                </div>
            </div>
        </section>
    );
};

export default Hero;