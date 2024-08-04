import { configureStore } from "@reduxjs/toolkit";
import accountSlice from "../features/accountSlice";
import userReducer from "../features/user";


const store = configureStore({
    reducer: {
     account:accountSlice,
     user:userReducer
    }
})


export default store