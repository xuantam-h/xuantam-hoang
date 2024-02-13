import { useState } from 'react';
import Tag from '../Tag';
import './ProjectCard.scss';
import Button from '../Button';
import github from './../../assets/images/github-mark-white.svg';
import closeBtn from '../../assets/images/xmark-solid.svg';

const ProjectCard = ({title, summary, description, tags, image, url}) => {

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
                {image ? <img src={image} alt={title}/> : <img src="https://placehold.co/600x400" alt="Project cover"/>}
                <div className="project-overlay">
                    <div className="project-overlay-content">
                        <h3 className="project-title">{title}</h3>
                        <p className="project-description">{summary}</p>
                        <Button btnClass={"btn btn-primary"} onClick={handleModal}>Voir plus</Button>
                    </div>
                </div>
            </div>
            <div className='project-description'>
                <h3 className="project-title">{title}</h3>
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
        <div className={isModal ? "project-modal modal-opened" : "project-modal modal-closed"}>
            <button className="menu-close" onClick={handleCloseModal}>
                <img src={closeBtn} alt="Close button"/>
            </button>
            <div className="project-modal-container">
                <div className="project-modal-image">
                    <img src={image} alt={title}/>
                </div>
                <div className="project-modal-content">
                    <div className="project-modal-title-container flex-container flex-vertical-center">
                        <p className="project-modal-title">{title}</p>
                        {url && 
                            <a href={url} target="_blank" rel="noreferrer">
                                <img src={github} alt="Logo Github"/>
                            </a>
                        }
                        
                    </div>
                    <p className="project-modal-description">{description}</p>
                    
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
        </div>
        </> 
    );
};

export default ProjectCard;