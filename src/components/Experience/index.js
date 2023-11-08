import { experiences } from '../../assets/data/data';
import './Experience.scss';

const Experience = () => {
    return (
        <section id="experience" className="container padding-global text-center">
            <p className="section-subtitle">03.</p>
            <h2 className="section-title">Expériences professionnelles</h2>
            <div className="experience-list">
                {experiences.map((experience,index) => 
                    <div className="experience-item" key={index}>
                        <h3>{experience.company}</h3>
                        <p>{experience.location}</p>
                        <p>{experience.year}</p>
                        <h3>{experience.title}</h3>
                        <p>{experience.description}</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Experience;