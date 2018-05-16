import axios from 'axios';
export const GETALLEMPLOYEES = 'Get all employees';
export const FAIL = 'Fail Operation';
export const ADDEMPLOYEE = 'Add new employee';
export const UPDATEEMPLOYEE = 'Update existed employee';
export const DELETEEMPLOYEE = 'Delete existed employee';
const API_ENDPOINT = 'http://localhost:3000';
export const getAll = () => (dispatch) => {
    const url = `${API_ENDPOINT}/listEmployees`;
    axios.get(url)
        .then((response) => {
            console.log(response);
            dispatch({
                type: GETALLEMPLOYEES,
                payload: response.data,
            });
        })
        .catch(() => dispatch({
            type: FAIL,
            payload: [],
        }));
}