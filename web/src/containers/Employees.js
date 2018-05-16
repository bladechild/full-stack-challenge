import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getAll } from '../actions/employees';
class AdminEmployeesPage extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.props.getAll();
    }
    render() {
        return (
            <div>
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
        getAll: () => dispatch(getAll())
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminEmployeesPage);