import axios from 'axios';
import qs from "qs";
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
export const addNewEmployee = (name) => (dispatch) => {
    const url = `${API_ENDPOINT}/addEmployee`;
    axios.post(url, qs.stringify({ name }))
        .then((response) => {
            console.log(response);
            if (response.data.insertId) {
                dispatch({
                    type: ADDEMPLOYEE,
                    payload: { Name: name, Id: response.data.insertId },
                });
            }
            else {
                dispatch({
                    type: FAIL,
                    payload: [],
                });
            }
        })
        .catch(() => dispatch({
            type: FAIL,
            payload: [],
        }));
}