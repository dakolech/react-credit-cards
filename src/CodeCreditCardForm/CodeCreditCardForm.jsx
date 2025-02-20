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
    let { children, sumbitButton, onSubmit } = this.props;
    return (
      <div key="Payment">
        <div className="App-payment">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <ReactCreditCard {...this.state} />
            </div>
            {React.Children.map(children, (input) => (
              <div className="form-group">
                {React.cloneElement(input, {
                  onChange: this.handleOnChange,
                  onFocus: this.handleOnFocus,
                })}
              </div>
              )
            )}
            { React.cloneElement(sumbitButton, { onSubmit })}
          </form>
        </div>
      </div>
    );
  }
}

CodeCreditCardForm.propTypes = {
  children: PropTypes.node,
  sumbitButton: PropTypes.element,
  onSubmit: PropTypes.func,
};
