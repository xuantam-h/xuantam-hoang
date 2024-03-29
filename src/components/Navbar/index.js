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

    const handleLink = (e) => {
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
                    <a className="nav-item" href="#" onClick={handleLink}>Home</a>
                    <a className="nav-item" href="#about" onClick={handleLink}>About</a>
                    <a className="nav-item" href="#experience" onClick={handleLink}>Experience</a>
                    <a className="nav-item" href="#projects" onClick={handleLink}>Projects</a>   
                    <a className="nav-item" href="#contact" onClick={handleLink}>Contact</a>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;