import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAll } from '../actions/employees';
import { listReviews, addReview, updateReview } from '../actions/reviews';
class AdminReviews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fromId: null,
            toId: null,
            review: null
        }
    }
    componentWillMount() {
        this.props.listReviews();
        this.props.getAll();
    }
    render() {
        return (
            <div>
                <label>From:</label>
                <input type='text' value={this.state.fromId} />
                <label>To:</label>
                <input type='text' value={this.state.fromId} />
                <label>Review:</label>
                <input type='text' value={this.state.fromId} />
                <button>Add</button>
                <table>
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Review</th>
                        </tr>
                        {
                            this.props.reviews.map(review => {
                                return (
                                    <tr>
                                        <td>{review.id}</td>
                                        <td>{review.from}</td>
                                        <td>{review.to}</td>
                                        <td>{review.review}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        reviews: state.reviews,
        employees: state.employees
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        listReviews: () => dispatch(listReviews()),
        addReview: (fromId, toId, note) => dispatch(addReview(fromId, toId, note)),
        updateReview: (id, note) => dispatch(updateReview(id, note)),
        getAll: () => dispatch(getAll())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminReviews);