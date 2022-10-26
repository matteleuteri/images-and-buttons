import React from 'react';

class ColorButton extends React.Component {
    render() {
        return (
            <button
                className="square"
                onClick={() => this.props.onClick()}
            >
                {this.props.color}
            </button>
        );
    }
}

export default ColorButton; 
