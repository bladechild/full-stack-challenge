import React, { Component } from 'react';
import { connect } from 'react-redux';
import Popup from '../components/Popup';
import { getAll, addNewEmployee, updateEmployee, deleteEmployee } from '../actions/employees';
class AdminEmployeesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            showPopup: false,
            editId: null,
            editName: null
        }
        this.submitNewEmployee = this.submitNewEmployee.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentWillMount() {
        this.props.getAll();
    }
    submitNewEmployee() {
        console.log(this.state.name);
        if (this.state.name) {
            this.props.addNew(this.state.name);
        }
    }
    handleChange(event) {
        this.setState({
            name: event.target.value
        });
    }
    handleEdit(employee) {
        this.setState({
            editId: employee.Id,
            editName: employee.Name
        });
        this.togglePopup();
    }
    handleDelete(employee) {
        this.props.delete(employee.Name);
    }
    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <button onClick={() => this.submitNewEmployee()}>Add New</button>
                <table>
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        {
                            this.props.employees.map(employee => {
                                return (
                                    <tr key={employee.Id}>
                                        <td>{employee.Id}</td>
                                        <td>{employee.Name}</td>
                                        <td><button onClick={this.handleEdit.bind(this, employee)}>Edit</button></td>
                                        <td><button onClick={this.handleDelete.bind(this, employee)}>Delete</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                {this.state.showPopup ?
                    <Popup employeeId={this.state.editId}
                        name={this.state.editName}
                        update={this.props.update}
                        closePopup={this.togglePopup.bind(this)}
                    />
                    : null}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        employees: state.employees,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getAll: () => dispatch(getAll()),
        addNew: (name) => dispatch(addNewEmployee(name)),
        update: (id, name) => dispatch(updateEmployee(id, name)),
        delete: (name) => dispatch(deleteEmployee(name))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminEmployeesPage);