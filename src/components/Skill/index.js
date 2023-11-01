import { skills } from '../../assets/data/data';
import './Skill.scss';

const Skill = () => {
    return (
        <section id="skills" className="container padding-global text-center">
            <p className="section-subtitle">Technologies et logiciels utilisés</p>
            <h2 className="section-title">Compétences & langages</h2>
            <ul className="skills-list">
                {skills.map((skill,index) => <li key={index} className="skills-item">{skill}</li>)}
            </ul>
        </section>
    );
};

export default Skill;