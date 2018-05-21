import * as ReviewsActions from '../actions/reviews';
const reviewReducers = (state = [], action) => {
    if (action.type === ReviewsActions.ADDREVIEW) {
        return [...state, action.payload];
    }
    if (action.type === ReviewsActions.GETALLREVIEWS) {
        return action.payload;
    }
    if (action.type === ReviewsActions.UPDATEREVIEW) {
        return state.map((review) => {
            if (review.id === action.payload.id) {
                review.review = action.payload.note;
            }
            return review;
        });
    }
    if (action.type === ReviewsActions.GETEMPLOYEEREVIEWREQUEST) {
        return action.payload;
    }
    return state;
}
export default reviewReducers;