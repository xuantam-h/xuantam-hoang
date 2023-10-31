import './Button.scss';

const Button = ({btnClass, children}) => {
    return (
        <button className={btnClass}>
            {children}
        </button>
    );
};

export default Button;