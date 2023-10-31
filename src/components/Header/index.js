import './Header.scss';
import Logo from '../Logo/';
import Navbar from '../Navbar/';

const Header = () => {
    return (
        <header className="main-header padding-global">
            <Logo />
            <Navbar/>
        </header>
    );
};

export default Header;