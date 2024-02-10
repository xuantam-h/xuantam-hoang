import './Skill.scss';
import { frontSkills } from '../../assets/data/data';
import { backSkills } from '../../assets/data/data';
import { designSkills } from '../../assets/data/data';

const Skill = () => {
    return (
        <section id="skills" className="container padding-global text-center">
            <div className='skills-container'>
                <h3 className="title-line">Front-end</h3>
                <ul className="skills-list">
                    {frontSkills.map((skill,index) => <li key={index} className="skills-item">{skill}</li>)}
                </ul>
            </div>
            <div className='skills-container'>
                <h3 className="title-line">Back-end</h3>
                <ul className="skills-list">
                    {backSkills.map((skill,index) => <li key={index} className="skills-item">{skill}</li>)}
                </ul>
            </div>
            <div className='skills-container'>
                <h3 className="title-line">Design</h3>
                <ul className="skills-list">
                    {designSkills.map((skill,index) => <li key={index} className="skills-item">{skill}</li>)}
                </ul>
            </div>
        </section>
    );
};

export default Skill;