import { Component } from "react";
type CounterType = {
  count: number;
};
type message = {
  message: string;
};
export class Counter extends Component<message, CounterType> {
  state = {
    count: 0,
  };
  handleClick = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Increment</button>
        {this.props.message} {this.state.count}
      </div>
    );
  }
}
