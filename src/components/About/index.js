import Social from "../Social";
import { skills } from '../../assets/data/data';

const About = () => {
    return (
        <section id="about" className="padding-global">
            <div className="container flex-container flex-vertical-center">
                <div>
                    <p className="section-subtitle">01.</p>
                    <h2 className="section-title">Un développeur passionné et hyper-connecté</h2>
                    <p>Bonjour ! Je m'appelle Xuan-Tam Hoang. Diplômé d'un Master spécialisé dans la conception de sites Web et actuellement en formation intégralement à distance chez OpenClassrooms,
                    je me spécialise dans la réalisation de <strong>sites vitrines</strong> et <strong>e-commerce</strong>. Fort d'une expérience de deux ans en agence Web, je suis capable de concevoir des <strong>sites ou applications responsive</strong> tout en travaillant en équipe.</p>
                    <p>À l'issue de cette formation enrichissante, je souhaite me spécialiser dans le développement d'<strong>applications Web modernes sur React</strong>. Grâce à la veille technologique que j'effectue au quotidien, je reste tenu au courant des dernières technologies et standards du Web.</p>
                    <p>Je reste motivé à apprendre de nouvelles technologies et élargir mon champ de compétences pour proposer des applications ou sites plus performants.</p>
                    <Social/>
                </div>
                <div>
                    <ul className="skills-list">
                        {skills.map((skill,index) => <li key={index} className="skills-item">{skill}</li>)}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;