import React, { Component } from 'react';
import './App.css';
import TopImage from './top.svg';
import BottomImage from './bottom.svg';
import LeftImage from './left.svg';
import RightImage from './right.svg';
import DefaultImage from './dafault.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
    this._onMouseMove = this._onMouseMove.bind(this)
    this.getImage = this.getImage.bind(this)
  }

  _onMouseMove(e) {
    this.setState({ x: e.clientX, y: e.clientY });
  }

  getImage() {
    const { x, y } = this.state;
    const element = document.getElementById('image');
    if (element) {
      const clientRect = element.getBoundingClientRect();
      console.log(clientRect);
      if (y < clientRect.top) {
        return TopImage
      } else if (((y > clientRect.top) && (y < clientRect.bottom)) && (x < clientRect.left)) {
        return LeftImage
      } else if (y > clientRect.bottom) {
        return BottomImage
      } else if (((y > clientRect.top) && (y < clientRect.bottom)) && (x > clientRect.right)) {
        return RightImage
      }
      else if (((y > clientRect.top) && (y < clientRect.bottom)) && ((x > clientRect.left) && (x < clientRect.right))) {
        return DefaultImage
      }
    }
    return DefaultImage
  }
  render() {
    const getImage = this.getImage()
    return (
      <div id="frame" className="App" onMouseMove={this._onMouseMove.bind(this)}>
        <img id='image' src={getImage} alt='' />
      </div>
    );
  }
}

export default App;
