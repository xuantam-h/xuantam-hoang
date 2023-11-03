import { social } from '../../assets/data/data';
import './Social.scss';

const Social = () => {
    return (
        <div className="social-list">
            {social.map((socialItem,index) =>  
                <a href={socialItem.url} key={index} target="_blank" rel="noreferrer">
                    <img src={socialItem.image} alt={socialItem.name}/>
                </a>
            )}
        </div>
    );
};

export default Social;