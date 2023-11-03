import { skills } from '../../assets/data/data';
import './Skill.scss';

const Skill = () => {
    return (
        <section id="skills" className="container padding-global text-center">
            <p className="section-subtitle">03.</p>
            <h2 className="section-title">Compétences & langages</h2>
            <p>Les <strong>technologies</strong> et <strong>logiciels</strong> que j'utilise au quotidien pour mener à bien mes missions de développeur :</p>
            <ul className="skills-list">
                {skills.map((skill,index) => <li key={index} className="skills-item">{skill}</li>)}
            </ul>
        </section>
    );
};

export default Skill;