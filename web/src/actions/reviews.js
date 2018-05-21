import axios from 'axios';
import qs from "qs";
export const GETALLREVIEWS = 'Get all reviews';
export const GETEMPLOYEEREVIEWREQUEST = 'Get employee review request';
export const FAIL = 'Fail Operation';
export const ADDREVIEW = 'Add new review';
export const UPDATEREVIEW = 'Update existed review';
const API_ENDPOINT = 'http://localhost:3000';
export const addReview = (fromId, fromName, toId, toName, note) => (dispatch) => {
    const url = `${API_ENDPOINT}/addReview`;
    axios.post(url, qs.stringify({ fromId, toId, note }))
        .then((response) => {
            if (response.data.insertId) {
                dispatch({
                    type: ADDREVIEW,
                    payload: { id: response.data.insertId, from: fromName, to: toName, note },
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
            payload: null,
        }));
}
export const listReviews = () => (dispatch) => {
    const url = `${API_ENDPOINT}/getAllReviews`;
    axios.get(url)
        .then((response) => {
            dispatch({
                type: GETALLREVIEWS,
                payload: response.data,
            });
        })
        .catch(() => dispatch({
            type: FAIL,
            payload: [],
        }));
}
export const updateReview = (id, note) => (dispatch) => {
    const url = `${API_ENDPOINT}/updateReview?id=${id}`;
    axios.post(url, qs.stringify({ note }))
        .then((response) => {
            dispatch({
                type: UPDATEREVIEW,
                payload: { id, note },
            });
        })
        .catch(() => dispatch({
            type: FAIL,
            payload: null,
        }));
}
export const listEmployeeReviews = (id) => (dispatch) => {
    const url = `${API_ENDPOINT}/getReviews?fromId=${id}`;
    axios.get(url)
        .then((response) => {
            dispatch({
                type: GETEMPLOYEEREVIEWREQUEST,
                payload: response.data,
            });
        })
        .catch(() => dispatch({
            type: FAIL,
            payload: [],
        }));
}