import React, { Component } from 'react';
class ClientEmployee extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>Hello Client Employee! {this.props.match.params.id}</div>
        )
    }
}
export default ClientEmployee;