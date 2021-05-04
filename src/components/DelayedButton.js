import React, { Component } from "react";

export default class DelayedButton extends Component {

    handleDelayedClick = (e) => {
        e.persist();
        setTimeout( () => {
            this.props.onDelayedClick(e);
        },
        this.props.delay);
    }

    render() {
        return(
            <div>
                <button onClick={this.handleDelayedClick}>Another Button :)</button>
            </div>
        )
    }
}