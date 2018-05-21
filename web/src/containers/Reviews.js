import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAll } from '../actions/employees';
import { listReviews, addReview, updateReview } from '../actions/reviews';
import DropdownList from '../components/DropdownList';
import Popup from '../components/Popup';
class AdminReviews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fromId: 0,
            fromName: '',
            toId: 0,
            toName: '',
            review: '',
            showPopup: false,
            editId: null,
            editNote: null
        }
    }
    componentWillMount() {
        this.props.listReviews();
        this.props.getAll();
    }
    changeFromId(fromId, fromName) {
        this.setState({
            fromId,
            fromName
        });
    }
    changeToId(toId, toName) {
        this.setState({
            toId,
            toName
        });
    }
    addNewReview() {
        const { fromId, toId, fromName, toName } = this.state;
        // console.log(this.state.fromId);
        // console.log(this.state.toId);
        if (fromId === toId)
            alert('You should choose different employees between from and to!');
        else {
            this.props.addReview(fromId, fromName, toId, toName, null);
        }
    }
    changeReview(event) {
        this.setState({
            review: event.target.value
        });
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
                <label>From:</label>
                <DropdownList employees={this.props.employees} selectedId={this.state.fromId} changeOptions={this.changeFromId.bind(this)} />
                <label>To:</label>
                <DropdownList employees={this.props.employees} selectedId={this.state.toId} changeOptions={this.changeToId.bind(this)} />
                <button onClick={this.addNewReview.bind(this)}>Add</button>
                <table>
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Review</th>
                            <th>Edit</th>
                        </tr>
                        {
                            this.props.reviews.map((review, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{review.id}</td>
                                        <td>{review.from}</td>
                                        <td>{review.to}</td>
                                        <td>{review.review}</td>
                                        <td><button onClick={this.handleEdit.bind(this, review)}>Edit</button></td>
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
        addReview: (fromId, fromName, toId, toName, note) => dispatch(addReview(fromId, fromName, toId, toName, note)),
        updateReview: (id, note) => dispatch(updateReview(id, note)),
        getAll: () => dispatch(getAll())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminReviews);