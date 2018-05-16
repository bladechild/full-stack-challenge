import * as EmployeeActions from '../actions/employees';
const employeesReducers = (state = [], action) => {
    if (action.type === EmployeeActions.GETALLEMPLOYEES) {
        return action.payload;
    }
    if (action.type === EmployeeActions.ADDEMPLOYEE) {
        return [...state, action.payload];
    }
    return state;
}
export default employeesReducers;