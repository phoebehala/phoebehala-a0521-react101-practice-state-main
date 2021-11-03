import React, { Component } from 'react';
//import images
import lookLeftImg from '../Assets/look-left.jpeg'
import lookRightImg from '../Assets/look-right.jpeg'

class ChallengeOne extends Component {
  //declare the state here
  state = {
    lookLeft: undefined
  };

  //click left/right button handler goes here
  btnClickHandler = (bool) => {
    this.setState({
      lookLeft: bool
    })
  }

  render() {
    return (
      <>
        <h2>Challenge 1</h2>
        <div className="msg">
          <img
            className="ch1"
            src={this.state.lookLeft ? lookLeftImg : lookRightImg}
            alt=""
          />
        </div>
        <button className="btn" onClick={() => this.btnClickHandler(true)}>⭠</button>
        <button className="btn" onClick={() => this.btnClickHandler(false)}>⭢</button>
      </>
    );
  }
}

export default ChallengeOne;