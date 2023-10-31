import './Hero.scss';
import Button from "../Button";
import iconSave from "../../assets/images/file-pdf-regular.svg";

const Hero = () => {
    return (
        <section id="hero" className="container padding-global text-center">
            <h1>Développeur Web Front-End</h1>
            <div className="hero-content">
                <p>Intégrateur et développeur Front-End formé par OpenClassrooms, je dispose d'une expérience de deux ans en agence Web en tant qu'intégrateur Web.</p>
            </div>
            <div className="hero-cta">
                <Button>Télécharger mon CV</Button>
            </div>
        </section>
    );
};

export default Hero;