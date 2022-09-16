import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducers from "../reducers/RootReducer";

const initialState = {}

const store = configureStore({
    reducer: reducers,
    middleware: [thunk],
    initialState,
    devTools: process.env.NODE_ENV === "development" ?  true: false
})

export default store;