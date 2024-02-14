import Tag from '../Tag';
import './ProjectCard.scss';

const ProjectCard = ({title, summary, description, tags, image, url}) => {

    return (
        <>
        <div className="project-item" data-aos="fade-up" data-aos-duration="600">
            {url && 
                <a href={url} target="_blank" rel="noreferrer" className="project-link">
                    <div className="project-image">
                        {image ? <img src={image} alt={title}/> : <img src="https://placehold.co/600x400" alt="Project cover"/>}
                    </div>
                </a>
            }
            <div className='project-description'>
                <div className='project-header'>
                    <h3 className="project-title">{title}</h3>
                </div>
                <ul className="project-tags">
                    {tags.map((tag,index) => 
                        <Tag 
                            content={tag}
                            key={index}
                        />
                    )}
                </ul>
            </div>
        </div>
        </> 
    );
};

export default ProjectCard;