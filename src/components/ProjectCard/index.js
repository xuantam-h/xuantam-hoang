import Tag from '../Tag';
import './ProjectCard.scss';
import github from './../../assets/images/github-mark-white.svg';

const ProjectCard = ({title, summary, description, tags, image, url}) => {

    return (
        <>
        <div className="project-item">
            <div className="project-image">
                {image ? <img src={image} alt={title}/> : <img src="https://placehold.co/600x400" alt="Project cover"/>}
            </div>
            <div className='project-description'>
                <div className='project-header'>
                    <h3 className="project-title">{title}</h3>
                    {url && 
                        <a href={url} target="_blank" rel="noreferrer">
                            <img src={github} alt="Logo Github"/>
                        </a>
                    }
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