import './Card.css';

function Card(props) {
    const classes = 'card ' + props.className;

    return <div className={classes}>{props.children}</div>;
    // return <div className={`${classes} expenses`}>{props.children}</div>;
}

export default Card;