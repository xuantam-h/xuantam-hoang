import Tag from '../Tag';
import './ProjectCard.scss';
import { useState } from 'react';

const ProjectCard = ({title, description, tags, image, url}) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="project-item">
            <div className="project-image">
                <img src={image} alt={title}/>
            </div>
            <div className={isOpen ? "project-modal modal-open" : "project-modal modal-closed"}>
                <div className="project-content">
                    <h3 className="project-title">{title}</h3>
                    <p className="project-description">{description}</p>
                    <ul className="project-tags">
                        {tags.map((tag,index) => 
                            <Tag 
                            content={tag}
                            key={index}
                            />
                        )}
                    </ul>
                    <a href={url} target="_blank" rel="noreferrer">Github</a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;