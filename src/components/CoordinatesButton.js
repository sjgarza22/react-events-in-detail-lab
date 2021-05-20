// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
    render() {
        return (
            <div>
                <button onClick={(e) => {
                    let mouseCoordinates = [e.clientX, e.clientY];
                    this.props.onReceiveCoordinates(mouseCoordinates)
                }}>Coordinates</button>
            </div>
        )
    }
}