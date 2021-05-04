import React, { Component } from "react";

export default class CoordinatesButton extends Component {
  
    handleButtonClick = (e) => {
    this.props.onReceiveCoordinates([e.clientX, e.clientY]);
  };

    render() {
        return (
        <div>
            <button onClick={this.handleButtonClick}>A Button :)</button>
        </div>
        );
    }

}