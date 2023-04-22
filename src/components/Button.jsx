const Button = (props) => {
    function handleClick(evt){
        alert("clickeaste!")
    }

        return (
            <button 
            disabled={props.disabled}
            onClick={props.onClick}
            >
                {props.text}
                {props.children}
            </button>
        );
    };

export default Button;