import React, { useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";
const ExpensesList = () => {
  const { expenses } = useContext(AppContext);
  return (
    <table className="table">
      <thead className="thead-light">
        <tr>
          <th scope="col">Items</th>
          <th scope="col">Quantity</th>
          <th scope="col">Unit Price</th>
          <th scope="col">Item Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expenses) => {
          return (
            <ExpenseItem
              id={expenses.id}
              key={expenses.id}
              name={expenses.name}
              quantity={expenses.quantity}
              unitPrice={expenses.unitPrice}
            />
          );
        })}
      </tbody>
    </table>
  );
};
export default ExpensesList;
