import { useState } from 'react';
import Tag from '../Tag';
import './ProjectCard.scss';
import Button from '../Button';

const ProjectCard = ({title, description, tags, image, url}) => {

    const [isModal, setModal] = useState(false);

    const handleModal = () => {
        setModal(true);
    }

    const handleCloseModal = () => {
        setModal(false);
    }

    return (
        <>
        <div className="project-item">
            <div className="project-image">
                <img src={image} alt={title}/>
                <div className="project-overlay">
                    <div className="project-overlay-content">
                        <h3 className="project-title">{title}</h3>
                        <p className="project-description">{description}</p>
                        <Button btnClass={"btn"} onClick={handleModal}>Voir plus</Button>
                    </div>
                </div>
            </div>
        </div>
        <div className={isModal ? "project-modal modal-opened" : "project-modal modal-closed"}>
            <button className="close-btn" onClick={handleCloseModal}>×</button>
            <div className="project-modal-container">
                <div className="project-modal-image">
                    <img src={image} alt={title}/>
                </div>
                <div className="project-modal-content">
                    <ul className="project-tags">
                            {tags.map((tag,index) => 
                                <Tag 
                                    content={tag}
                                    key={index}
                                />
                            )}
                    </ul>
                    <p className="project-modal-title">{title}</p>
                    <p className="project-modal-description">{description}</p>
                    <a href={url} target="_blank" rel="noreferrer">Lien Github</a>
                </div>
            </div>
        </div>
        </> 
    );
};

export default ProjectCard;