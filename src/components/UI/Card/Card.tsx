import './Card.css';

// Using a wrapper component to set common css/stuff between components
// Since both Expense and ExpenseItem has the same border-radius and drop-shadow
// We can extract the common stuff into a wrapper class
export default function Card(props: any) {
    const classes = 'card ' + props.className;
    return (
        // props.children is a reserved name
        // the value will always be the content inside the tags
    
        <div className={classes}>{props.children}</div>
    )
}