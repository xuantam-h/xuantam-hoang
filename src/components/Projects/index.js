import { projects } from '../../assets/data/data';
import ProjectCard from '../ProjectCard';

const Projects = () => {

    return (
        <section
        id="projects"
        className="padding-global text-center">
            <div className="container">
                <p className="section-subtitle">03.</p>
                <h2 className="section-title">Projets réalisés</h2>
                <div className="projects-list">
                    {projects.map((project,index) => 
                        <ProjectCard
                        key={index} 
                        title={project.name}
                        summary={project.summary}
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