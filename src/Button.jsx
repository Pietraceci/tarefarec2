import "./Button.css"

function Button (props){
    const title = props.title;
    const desc = props.desc;
    return(
        <div className='body'>
        <button className='title'>
            <p>{title}</p>
            {desc}
        </button>
        </div>
    );
}
export default Button;