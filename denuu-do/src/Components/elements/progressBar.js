import React from 'react';
import PropTypes from 'prop-types';

class ProgressBar extends React.Component {
    constructor(props) {
        super(props);
        this.getBarColor = this.getBarColor.bind(this);
    }

    getBarColor() {
        if (this.props.percent === 100) {
            return 'green';
        } else if (this.props.percent > 50) {
            return 'lightgreen';
        }
        return 'red';
    }

    render() {
        const height = this.props.height || 5;

        let barStyle = {
            width: this.props.percent,
            height: height,
            backgroundColor: this.getBarColor(),
        };

        return (
            <div className="progress">
                <div className="bar" style={barStyle} />
            </div>
        );
    }
}

ProgressBar.propTypes = {
    percent: PropTypes.number.isRequired,
    height: PropTypes.number
};

export default ProgressBar;
