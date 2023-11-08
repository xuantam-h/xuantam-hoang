import { useState } from "react";
import arrow from '../../assets/images/collapse-arrow.svg';


const Collapse = ({title, job, children}) => {

    const [isCollapse, setIsCollapse] = useState(false);

    const handleCollapse = () => {
        setIsCollapse(!isCollapse);
    }

    return (
        <div className="experience-item">
            <button className="experience-header" onClick={handleCollapse}>
                <p className="experience-company">
                    {title}
                    <span className="experience-title">{job}</span>
                </p>
                <img src={arrow} className={isCollapse ? "arrow-enabled" : ""} alt="Collapse arrow"/>
            </button>
            <div className={isCollapse ? "experience-content experience-visible" : "experience-content experience-hidden"}>{children}</div>
        </div>
    );
};

export default Collapse;