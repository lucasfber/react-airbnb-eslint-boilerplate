import React from 'react';
import './Counter.css';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  changeValue = newValue => {
    const { value } = this.state;
    this.setState({
      value: value + newValue
    });
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <button onClick={() => this.changeValue(-1)} type="button">
          Decrease -
        </button>
        <h2>
          Value:
          {value}
        </h2>
        <button onClick={() => this.changeValue(1)} type="button">
          Increase +
        </button>
      </div>
    );
  }
}
