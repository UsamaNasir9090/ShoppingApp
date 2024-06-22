import React, { createContext, useReducer } from "react";
export const AppReducer = (state, action) => {
  let newExpenses = [];
  switch (action.type) {
    case "ADD_QUANTITY":
      let updateQty = false;
      state.expenses.map((expenses) => {
        if (expenses.name == action.payload.name) {
          expenses.quantity = expenses.quantity + action.payload.quantity;
          updateQty = true;
        }
        newExpenses.push(expenses);
        return true;
      });
      state.expenses = newExpenses;
      action.type = "Done";
      return {
        ...state,
      };
    case "RED_Quantity":
      state.expenses.map((expenses) => {
        if (expenses.name === action.payload.name) {
          expenses.quantity = expenses.quantity - action.payload.quantity;
        }
        expenses.quantity = expenses.quantity < 0 ? 0 : expenses.quantity;
        newExpenses.push(expenses);
        return true;
      });
      state.expenses = newExpenses;
      action.type = "Done";
      return {
        ...state,
      };
    case "DELETE_ITEM":
      state.expenses.map((expenses) => {
        if (expenses.name === action.payload.name) {
          expenses.quantity = 0;
        }
        newExpenses.push(expenses);
      });
      state.expenses = newExpenses;
      action.type = "Done";
      return {
        ...state,
      };
    case "CHG_Location":
      action.type = "Done";
      state.Location = action.payload;
      return {
        ...state,
      };
    default:
      return state;
  }
};
const initialState = {
  expenses: [
    { id: "Shirt", name: "Shirt", quantity: 0, unitPrice: 500 },
    { id: "Jeans", name: "Jeans", quantity: 0, unitPrice: 300 },
    { id: "Dress", name: "Dress", quantity: 0, unitPrice: 400 },
    { id: "Dinner set", name: "Dinner set", quantity: 0, unitPrice: 600 },
    { id: "Bags", name: "Bags", quantity: 0, unitPrice: 200 },
  ],
  Location: "£",
};
export const AppContext = createContext();
export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const totalExpenses = state.expenses.reduce((total, item) => {
    return (total = total + item.quantity * item.unitPrice);
  }, 0);
  state.CartValue = totalExpenses;
  return (
    <AppContext.Provider
      value={{
        expenses: state.expenses,
        CartValue: state.CartValue,
        dispatch,
        Location: state.Location,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
