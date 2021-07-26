import ExpenseDate from "./ExpenseDate";
import "./style.css";

const ExpenseItem = (props) => {

        return (
        <div className="p-3 mb-2 bg-light text-dark main">
            <div class="row sized">
                <div class="dateItem col-1">
                    <ExpenseDate date={props.date} />
                </div>
                <div class="col items">
                    {props.name}
                </div>
                <div class="col-2 price">
                    ${props.price}
                </div>
            </div>
        </div>
    );
}

export default ExpenseItem;