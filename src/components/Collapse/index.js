import { useState } from "react";

const Collapse = ({title, job, children}) => {

    const [isCollapse, setIsCollapse] = useState(false);

    const handleCollapse = () => {
        setIsCollapse(!isCollapse);
    }

    return (
        <div className="experience-item">
            <button className="experience-header" onClick={handleCollapse}>
                <p className="experience-company">{title}</p>
                <p className="experience-title">{job}</p>
            </button>
            <div className={isCollapse ? "experience-content experience-visible" : "experience-content experience-hidden"}>{children}</div>
        </div>
    );
};

export default Collapse;