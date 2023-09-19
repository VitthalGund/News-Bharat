import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Alert extends Component {
    static propTypes = {
        alert: PropTypes.object
    }
    captalized = (mgs = "") => {
        const lower = mgs.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    render() {
        return (
            <div style={{ height: "3rem" }}>{
                this.props.alert && <div className={`alert alert-${this.props.alert.type} alert-dismissible fade show`} role="alert">
                    <strong>{this.captalized(this.props.alert.type)}</strong>: {this.props.alert.mgs}
                </div>
            } </div >
        )
    }
}
