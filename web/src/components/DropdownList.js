import React, { Component } from 'react';
import {  FormGroup, FormControl } from 'react-bootstrap'
class DropdownList extends Component {
    handleChange(event) {
        const index = event.target.selectedIndex;
        const text = event.target[index].text;
        this.props.changeOptions(event.target.value, text);
    }
    render() {
        return (
            <div>
                <FormGroup>
                    <FormControl componentClass='select' value={this.props.selectedId} onChange={this.handleChange.bind(this)}>
                        <option value={0}>Please select an employee</option>
                        {
                            this.props.employees.map((employee) => {
                                return (
                                    <option key={employee.Id} value={employee.Id}>{employee.Name}</option>
                                )
                            })
                        }
                    </FormControl>
                </FormGroup>
            </div >
        );
    }
}
export default DropdownList;