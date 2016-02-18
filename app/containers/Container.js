import React, { Component } from 'react';
import { connect } from 'react-redux';

class Container extends Component {
  constructor(props) {
    super(props);
    this.onBarClick = this.onBarClick.bind(this);
  }

  onBarClick () {
    this.props.dispatch({
      type : "bar"
    });

    // I expect mapStateToProps to be called here
    // which would allow me to check the value
    // of the updated props, and dispatch foo if the
    // condition is met

    if (this.props.isBarGreaterThanEqual3) {
      this.props.dispatch({
        type : "foo"
      });
    }
  }

  render () {
    const fooMsg = this.props.foo ? "Foo dispatched!" : "Waiting for foo...";

    return (
      <div>
        <button onClick={this.onBarClick}>Click bar</button>
        <div>Click count : {this.props.bar}</div>
        <div>{fooMsg}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("map state to props");
  return Object.assign({}, state, {
    isBarGreaterThanEqual3 : state.bar >= 3
  });
};

export default connect(mapStateToProps)(Container);

