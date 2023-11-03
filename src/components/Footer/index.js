import './Footer.scss';
import Logo from '../Logo';
import Social from '../Social';

const Footer = () => {
    return (
        <footer className="text-center">
            <Social/>
            <Logo/>
        </footer>
    );
};

export default Footer;