import React, { Component } from 'react';

class Popup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name
        }
    }
    handleChange(event) {
        this.setState({
            name: event.target.value
        });
    }
    render() {
        return (
            <div style={styles.popup}>
                <div style={styles.popup_inner}>
                    <h1>Edit</h1>
                    <input type='text' value={this.state.name} onChange={this.handleChange.bind(this)} />
                    <button onClick={() => this.props.update(this.props.employeeId, this.state.name)}>Update</button>
                    <button onClick={this.props.closePopup}>Close</button>
                </div>
            </div>
        );
    }
}

const styles = {
    popup: {
        position: "fixed",
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: "auto",
        backgroundColor: "rgba(0, 0, 0, 0.5)"
    },
    popup_inner: {
        position: "absolute",
        left: '25%',
        top: '25%',
        bottom: '25%',
        margin: "auto",
        background: "white",
        padding: '20px'
    }
}

export default Popup;