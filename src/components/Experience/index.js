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
                        <div className="experience-header flex-container flex-space-between">
                            <div className="experience-left">
                                <p className="experience-company">{experience.company}</p>
                                <p className="experience-title">{experience.title}</p>
                            </div>
                            <div className="experience-right">
                                <p>{experience.location}</p>
                                <p>{experience.year}</p>
                            </div>
                        </div>
                        <p>{experience.description}</p>
                        <ul className="skills-list">
                            {experience.techs.map((tech,index) => <li className="skills-item" key={index}>{tech}</li>)}
                        </ul>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Experience;