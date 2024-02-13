import './Button.scss';

const Button = ({btnClass, children, btnHref, btnTarget, btnRel}) => {
    return (
        <a className={btnClass} href={btnHref} target={btnTarget} rel={btnRel}>
            {children}
        </a>
    );
};

export default Button;