import './Navbar.scss';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="header-right">
            <div className="menu-button">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav className={isOpen ? 'main-nav nav-opened' : 'main-nav nav-closed'}>
                <a className="nav-item" href="#">Accueil</a>
                <a className="nav-item" href="#about">À propos</a>
                <a className="nav-item" href="#projects">Projets</a>
                <a className="nav-item" href="#skills">Compétences</a>   
                <a className="nav-item" href="#contact">Contact</a>  
            </nav>
        </div>
    );
};

export default Navbar;