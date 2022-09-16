import { ADD_EMPLOYEE, REMOVE_EMPLOYEE, UPDATE_EMPLOYEE } from "../contants/EmployeeContant"

export const addEmployee = (employee) => dispatch => {
    dispatch({ type: ADD_EMPLOYEE, payload: employee });
}

export const updateEmployee = (employee,id) => dispatch => {
    dispatch({ type: UPDATE_EMPLOYEE, payload: { employee, id} });
}

export const removeEmployee = (index) => dispatch => {
    dispatch({ type: REMOVE_EMPLOYEE, payload: index });
}