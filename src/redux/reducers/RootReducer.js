import { combineReducers } from "@reduxjs/toolkit";
import { AdminReducer } from "./AdminReducer";
import { EmployeeReducer } from "./EmployeeReducer";

const reducers = combineReducers({
    admin: AdminReducer,
    employee: EmployeeReducer
})

export default reducers;