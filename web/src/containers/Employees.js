import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getAll, addNewEmployee } from '../actions/employees';
class AdminEmployeesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null
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
                        </tr>
                        {
                            this.props.employees.map(employee => {
                                return (
                                    <tr key={employee.Id}>
                                        <td>{employee.Id}</td>
                                        <td>{employee.Name}</td>
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
        employees: state.employees,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getAll: () => dispatch(getAll()),
        addNew: (name) => dispatch(addNewEmployee(name))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminEmployeesPage);