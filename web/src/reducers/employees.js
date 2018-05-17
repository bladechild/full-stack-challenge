import * as EmployeeActions from '../actions/employees';
const employeesReducers = (state = [], action) => {
    if (action.type === EmployeeActions.GETALLEMPLOYEES) {
        return action.payload;
    }
    if (action.type === EmployeeActions.ADDEMPLOYEE) {
        return [...state, action.payload];
    }
    if (action.type === EmployeeActions.UPDATEEMPLOYEE) {
        return state.map((employee) => {
            if (employee.Id === action.payload.Id)
                employee.Name = action.payload.Name;
            return employee;
        });
    }
    if (action.type === EmployeeActions.DELETEEMPLOYEE) {
        return state.reduce((init, employee) => {
            if (employee.Name !== action.payload.Name)
                init.push(employee);
            return init;
        }, []);
    }
    return state;
}
export default employeesReducers;