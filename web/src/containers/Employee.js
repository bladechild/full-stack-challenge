import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listEmployeeReviews, updateReview } from '../actions/reviews';
import Popup from '../components/Popup';
class ClientEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPopup: false,
            editId: null,
            editNote: null
        }
    }
    componentDidMount() {
        this.props.getAllRequests(this.props.match.params.id);
    }
    handleEdit(review) {
        this.setState({
            editId: review.id,
            editNote: review.review
        });
        this.togglePopup();
    }
    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }
    render() {
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>To</th>
                            <th>Review</th>
                            <th>Edit</th>
                        </tr>
                        {
                            this.props.requests.map((request) => {
                                return (
                                    <tr>
                                        <td>{request.to}</td>
                                        <td>{request.review}</td>
                                        <td>{!request.review && <button onClick={this.handleEdit.bind(this, request)}>Edit</button>}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                {this.state.showPopup ?
                    <Popup employeeId={this.state.editId}
                        name={this.state.editNote}
                        update={this.props.updateReview}
                        closePopup={this.togglePopup.bind(this)}
                    />
                    : null}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        requests: state.reviews,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getAllRequests: (id) => dispatch(listEmployeeReviews(id)),
        updateReview: (id, note) => dispatch(updateReview(id, note)),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ClientEmployee);