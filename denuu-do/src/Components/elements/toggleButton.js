import React, { Component } from 'react';
import NavBar from '../headerComponent/navBar';

class ToggleButton extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <div>
                <button className="btn" onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'X' : 'MENU'}
                </button>
                {this.state.isToggleOn ? <NavBar /> : null}
            </div>
        );
    }
}

export default ToggleButton;
