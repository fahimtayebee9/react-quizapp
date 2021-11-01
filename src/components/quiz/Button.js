const Button = (props) => {
    return (
        <button className={props.classes} onClick={props.action}>
            {props.text} <i className={props.icon}></i>
        </button>
    );
};
//fas fa-sync-alt
export default Button;
