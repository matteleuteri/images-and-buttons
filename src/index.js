import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Circle from './Circle';
import Square from './Square';

class MainContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //TODO find a way to better unite these two fields.
            filters: ["red", "blue", "green", "yellow"],
            color: "red",
            frame: 1,
            fps: 4,
            numFrames: 5
        };
    }

    handleClick(i) {
        this.setState({
            color: this.state.filters[i]
        });
    }

    renderButton(i) {
        return (
            <Square
                color={this.state.filters[i]}
                onClick={() => this.handleClick(i)}
            />
        );
    }

    renderArrow(i) {
        return (
            <Square
                color={this.state.filters[i]}
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
                    {this.renderButton(0)}{this.renderButton(1)}{this.renderButton(2)}{this.renderButton(3)}
                </div>
                <div className="imageContainer">
                {
                    <Circle>
                        {this.state.color}                    
                    </Circle>
                }
                </div>
                <div className="bottomRow">
                    {this.renderArrow(0)}{this.renderArrow(1)}{this.renderArrow(2)}{this.renderArrow(3)}
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
