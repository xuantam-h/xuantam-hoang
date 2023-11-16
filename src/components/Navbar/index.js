import './Navbar.scss';
import { useState } from 'react';
import closeBtn from '../../assets/images/xmark-solid.svg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenMenu = (e) => {
        e.preventDefault();
        setIsOpen(true);
    }

    const handleCloseMenu = (e) => {
        e.preventDefault();
        setIsOpen(false);
    }

    return (
        <div className="header-right">
            <button className="menu-button" onClick={handleOpenMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className={isOpen ? 'main-nav nav-opened' : 'main-nav nav-closed'}>
                <button className="menu-close" onClick={handleCloseMenu}>
                    <img src={closeBtn} alt="Close button"/>
                </button>
                <nav>
                    <a className="nav-item" href="#"><span>01.</span> Accueil</a>
                    <a className="nav-item" href="#about"><span>02.</span> À propos</a>
                    <a className="nav-item" href="#projects"><span>03.</span> Projets</a>
                    <a className="nav-item" href="#experience"><span>04.</span> Expérience</a>   
                    <a className="nav-item" href="#contact"><span>05.</span> Contact</a>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;