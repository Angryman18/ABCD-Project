

const ExpenseDate = (props) => {
    const Day = props.date.toLocaleString("en-US", { day: "2-digit" });
    const Month = props.date.toLocaleString("en-US", { month: "long" });
    const Year = props.date.getFullYear();

    return (
        <div>
            <div className="foncy" style={{padding: "0px", marginBottom: "-12px"}}>{Day}</div>
            <div className="foncy" style={{padding: "0px", marginBottom: "-5px"}}><small>{Month}</small></div>
            <div className="foncy">{Year}</div>
        </div>
    );
}


export default ExpenseDate;