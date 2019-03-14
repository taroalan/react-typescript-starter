import * as React from 'react';

import './index.scss';

export default class Counter extends React.Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  }

  componendDidMount() {
    console.log('mount');
  }

  render() {
    return (
      <div className="counter">
        <p>{ this.state.count }</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}
