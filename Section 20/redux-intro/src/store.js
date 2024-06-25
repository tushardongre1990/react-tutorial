import { configureStore } from "@reduxjs/toolkit";
//configureStore combines reducers, add thunk & sets up developer tools
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});
export default store;
