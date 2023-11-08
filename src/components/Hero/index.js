import './Hero.scss';
import Button from "../Button";

const Hero = () => {
    return (
        <section id="hero" className="container padding-global">
            <div className="hero-content">
                <h1>Développeur Web <span>Front-End</span></h1>
                <div className="hero-content">
                    <p><strong>Intégrateur et développeur Web Front-End</strong> formé par OpenClassrooms, je dispose d'une expérience de deux ans en agence en tant qu'Intégrateur Web.</p>
                    <p>Collaborons ensemble pour réaliser le <strong>site ou application Web de vos rêves à votre image</strong> !</p>
                </div>
                <div className="hero-cta">
                    <Button btnClass="btn">Télécharger mon CV</Button>
                </div>
            </div>
            <div className="hero-image">

            </div>
        </section>
    );
};

export default Hero;