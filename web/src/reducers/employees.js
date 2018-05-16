import * as EmployeeActions from '../actions/employees';
const getAllEmployees = (state = [], action) => {
    if (action.type === EmployeeActions.GETALLEMPLOYEES) {
        return action.payload;
    }
    return state;
}
export default getAllEmployees;