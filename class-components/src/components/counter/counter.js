import React, { Component } from 'react';

import css from './counter.module.css';

export default class Counter extends Component {
  constructor() {
    super();

    this.state = {
      currentCounter: 0,
      steps: 0,
    };
  }

  handleButtonDownClick = () => {
    const { currentCounter, steps } = this.state;
    this.setState({
      currentCounter: currentCounter - 1,
      steps: steps + 1,
    });
  };

  handleButtonUpClick = () => {
    const { currentCounter, steps } = this.state;
    this.setState({
      currentCounter: currentCounter + 1,
      steps: steps + 1,
    });
  };

  render() {
    const { currentCounter, steps } = this.state;

    return (
      <div className={css.counterContainer} onClick={currentCounter}>
        <button
          onClick={this.handleButtonDownClick}
          className="wave-effect waves-light btn red darken"
        >
          -
        </button>
        <span className={css.counterValue}>{currentCounter}</span>
        <button
          className="wave-effect waves-light btn darken"
          onClick={this.handleButtonUpClick}
        >
          +
        </button>
        <span className={css.counterValue}>({steps})</span>
      </div>
    );
  }
}
