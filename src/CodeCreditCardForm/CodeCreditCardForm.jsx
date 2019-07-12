import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCreditCard from '../ReactCreditCard/ReactCreditCard';

export default class CodeCreditCardForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      number: '',
      name: '',
      expiry: '',
      cvc: '',
      focused: '',
    };
  }

  handleOnChange = (type, value) => {
    this.setState({ [type]: value });
  };

  handleOnFocus = (type) => {
    this.setState({ focused: type });
  };

  render() {
    let { children } = this.props;
    return (
      <div key="Payment">
        <div className="App-payment">
          <ReactCreditCard {...this.state} />
          {React.Children.map(children, (input, i) => React.cloneElement(input, {
            onChange: this.handleOnChange,
            onFocus: this.handleOnFocus,
            key: i,
            type: input.props.type,
          }))}
        </div>
      </div>
    );
  }
}

CodeCreditCardForm.propTypes = {
  children: PropTypes.node,
};
