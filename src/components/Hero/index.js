import './Hero.scss';
import ResumePDF from '../../assets/pdf/cv-xuantam.pdf';
import { motion } from "framer-motion"

const Hero = () => {
    return (
        <section id="hero" className="container padding-global">
            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="hero-content">
                <h1>Développeur Web <span>Front-End</span></h1>
                <div className="hero-content">
                    <p><strong>Intégrateur et développeur Web Front-End</strong> formé par OpenClassrooms, je dispose d'une expérience de deux ans en agence en tant qu'Intégrateur Web.</p>
                    <p>Collaborons ensemble pour réaliser le <strong>site ou application Web de vos rêves à votre image</strong> !</p>
                </div>
                <div className="hero-cta">
                    <a className="btn" href={ResumePDF} target="_blank" rel="noreferrer">Télécharger mon CV</a>
                </div>
            </motion.div>
            <div className="hero-image">

            </div>
        </section>
    );
};

export default Hero;