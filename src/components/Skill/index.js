import './Skill.scss';
import { frontSkills } from '../../assets/data/data';
import { frameworksSkills } from '../../assets/data/data';
import { toolsSkills } from '../../assets/data/data';

const Skill = () => {
    return (
        <section id="skills" className="container padding-global text-center">
            <div className='skills-container'>
                <h3 className="title-line">Langage de programmation</h3>
                <ul className="skills-list">
                    {frontSkills.map((skill,index) => <li key={index} className="skills-item">{skill}</li>)}
                </ul>
            </div>
            <div className='skills-container'>
                <h3 className="title-line">Librairies & frameworks</h3>
                <ul className="skills-list">
                    {frameworksSkills.map((skill,index) => <li key={index} className="skills-item">{skill}</li>)}
                </ul>
            </div>
            <div className='skills-container'>
                <h3 className="title-line">Outils</h3>
                <ul className="skills-list">
                    {toolsSkills.map((skill,index) => <li key={index} className="skills-item">{skill}</li>)}
                </ul>
            </div>
        </section>
    );
};

export default Skill;