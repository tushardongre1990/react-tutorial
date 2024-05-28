import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./store.js";
import { Provider } from "react-redux";

// store.dispatch({ type: "account/deposit", payload: 2250 });
// store.dispatch({
//   type: "customer/createCustomer",
//   payload: {
//     fullName: "Tushar Dongre",
//     nationalId: "440034",
//     createdAt: new Date().toISOString(),
//   },
// });
// console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
