import React, { Component } from 'react'
import '../../css/square.css'

export default class square extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: null
        }
    }
    render() {
        return (
            <button className="square" onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}