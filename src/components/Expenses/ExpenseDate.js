import './ExpenseDate.css';

function ExpenseDate(props) {

    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();

    return (
        <div className="expense-date">
            <div className="expenses-date__month">{month}</div>
            <div className="expenses-date__year">{year}</div>
            <div className="expenses-date__day">{day}</div>
        </div>
    );
}

export default ExpenseDate;