import { experiences } from '../../assets/data/data';
import Collapse from '../Collapse';
import './Experience.scss';

const Experience = () => {

    return (
        <section id="experience" className="container padding-global text-center">
            <p className="section-subtitle">03.</p>
            <h2 className="section-title">Expériences professionnelles</h2>
            <div className="experience-list">
                {experiences.map((experience,index) => 
                    <Collapse title={experience.company} job={experience.title} key={index}>
                        <p>{experience.location}</p>
                        <p>{experience.year}</p>
                        <p>{experience.description}</p>
                        <ul className="skills-list">
                            {experience.techs.map((tech,index) => <li className="skills-item" key={index}>{tech}</li>)}
                        </ul>
                    </Collapse>
                )}
            </div>
        </section>
    );
};

export default Experience;