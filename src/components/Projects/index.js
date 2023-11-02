import { projects } from '../../assets/data/data';
import ProjectCard from '../ProjectCard';

const Projects = () => {
    return (
        <section id="projects" className="padding-global text-center">
            <div className="container">
                <p className="section-subtitle">Portfolio</p>
                <h2 className="section-title">Une liste des projets réalisés durant ma carrière...</h2>
                <p>Vous trouverez ci-dessous une liste des projets réalisés dans le cadre de ma formation de Développeur Web :</p>
                <div className="projects-list">
                    {projects.map((project,index) => 
                        <ProjectCard
                        key={index} 
                        title={project.name} 
                        description={project.description} 
                        tags={project.tags}
                        image={project.image}
                        url={project.url}
                        />
                    )}
                </div>
            </div>
        </section>
    );
};

export default Projects;