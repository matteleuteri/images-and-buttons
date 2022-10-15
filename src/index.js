import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Circle from './Circle';
import Square from './Square';


class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: ["filter 1", "filter 2", "filter 3"],
    };
  }

  handleClick(i) {
    console.log(i);
  }

  renderButton(i) {
    return (
      <Square
        value={this.state.filters[i]}
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
        <div className="row">
          {this.renderButton(0)}{this.renderButton(1)}{this.renderButton(2)}
        </div>
        <div className="imageContainer">
          {
            <Circle />
            //this.renderImage()
          }
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="board">
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
