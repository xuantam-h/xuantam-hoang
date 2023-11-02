import './Button.scss';

const Button = ({btnClass, children, onClick}) => {
    return (
        <button className={btnClass} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;