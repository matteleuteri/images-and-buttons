import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Circle from './Circle';
import ColorButton from './ColorButton';
import FilterButton from './FilterButton';

class MainContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //TODO find a way to better unite these two fields.
            colors: ["red", "blue", "green", "yellow"],
            color: "red",
            filters: ["none", "grayscale(1)"],
            filter: "grayscale(0.2)",
            frame: 1,
            fps: 4,
            numFrames: 5
        };
    }

    handleClick(i) {
        this.setState({
            color: this.state.colors[i],
            filter: this.state.filters[i]
        });
    }

    renderFilterButton(i) {
        return (
            <FilterButton
                filter={this.state.filters[i]}
                onClick={() => this.handleClick(i)}
            />
        );
    }

    renderColorButton(i) {
        return (
            <ColorButton
                color={this.state.colors[i]}
                onClick={() => this.handleClick(i)}
            />
        );
    }

    renderImage() {
        return (
            <img src='logo192.png' alt='not found'></img>
        )
    }

    render() {
        return (
            <div>
                <div className="topRow">
                    {this.renderFilterButton(0)}{this.renderFilterButton(1)}{this.renderFilterButton(2)}{this.renderFilterButton(3)}
                </div>
                <div className="imageContainer">
                {
                    <Circle>
                        {this.state.color}                  
                    </Circle>
                }
                </div>
                <div className="bottomRow">
                    {this.renderColorButton(0)}{this.renderColorButton(1)}{this.renderColorButton(2)}{this.renderColorButton(3)}
                </div>
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <div className="mainContainer">
                    <MainContainer />
                </div>
                <div className="info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
