import { ADD_EMPLOYEE, REMOVE_EMPLOYEE, UPDATE_EMPLOYEE } from "../contants/EmployeeContant";

const initialEmployeeState = {
    employees: localStorage.getItem("employees") ? JSON.parse(localStorage.getItem("employees")) : [],    
}

let employees = [];

export const EmployeeReducer = (state = initialEmployeeState, action) => {
    switch (action.type) {
        case ADD_EMPLOYEE:

            employees = [
                ...state.employees,
                action.payload
            ];

            localStorage.setItem('employees', JSON.stringify(employees));

            return {
                ...state,
                employees
            }

        case UPDATE_EMPLOYEE:
            employees = state.employees.map((employee,index) => {

                if (index === parseInt(action.payload.id)) {
                    return action.payload.employee
                }

                return employee
            });

            console.log(action,employees);

            localStorage.setItem('employees', JSON.stringify(employees));

            return {
                ...state,
                employees
            }

        case REMOVE_EMPLOYEE:

            state.employees.splice(action.payload, 1);

            employees = [...state.employees]

            localStorage.setItem('employees', JSON.stringify(employees));

            return {
                ...state,
                employees
            }

        default:
            return state
    }
}