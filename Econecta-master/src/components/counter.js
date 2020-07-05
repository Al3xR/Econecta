import React, { Component } from "react";
import PropTypes from "prop-types";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      value: this.props.productQuantity,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment(e) {
    e.preventDefault();
    let tempInput = document.getElementById("counter"+this.props.inputId);
    let tempVal = parseInt(tempInput.value) + 1;
    tempInput.value = tempVal;
  }

  decrement(e) {
    e.preventDefault();
    let tempInput = document.getElementById("counter"+this.props.inputId);
    let tempVal = parseInt(tempInput.value) - 1;
    
    if(tempVal <= 0){
      tempInput.value = 1;
    }
    else{
      tempInput.value = tempVal;
    }
  }

  feed(e) {
    this.setState(
      {
        value: this.refs.feedQty.value
      },
      function() {
        this.props.updateQuantity(this.state.value);
      }
    );
  }

  quantityChange = () =>{

  }
  componentDidMount() {
    let tempValue = parseInt(document.getElementById("counter"+this.props.inputId).value);
    if(Number.isNaN(tempValue)){
      document.getElementById("counter"+this.props.inputId).value="1";
    }
  }

  
  render() {
    return (
      <div className="stepper-input layout-row layout-align-center-center">
        <a href="#" className="decrement layout-column layout-align-center-center" onClick={this.decrement}>
          <p>–</p>
        </a>
        <input
          type="number"
          className="quantity"
          id={"counter"+this.props.inputId}
        />
        <a href="#" className="increment layout-column layout-align-center-center" onClick={this.increment}>
         <p>+</p>
        </a>
      </div>
    );

  }
}

Counter.propTypes = {
  value: PropTypes.number,
  inputId: PropTypes.number
};

export default Counter;
