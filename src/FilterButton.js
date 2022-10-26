import React from 'react';

class FilterButton extends React.Component {
    render() {
        return (
            <button
                className="square"
                onClick={() => this.props.onClick()}
            >
                {this.props.filter}
            </button>
        );
    }
}

export default FilterButton; 
