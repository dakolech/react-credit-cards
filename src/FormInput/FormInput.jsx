import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { formatCreditCardNumber, formatCVC, formatExpirationDate } from '../utils';

class FormInput extends React.Component {
  static propTypes = {
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    placeholder: PropTypes.string,
    type: PropTypes.oneOf(['number', 'name', 'expiry', 'cvc']),
  };

  static defaultProps = {
    onChange: () => {},
    onFocus: () => {},
    placeholder: '',
    type: '',
  };

  handleInputChange = ({ target }) => {
    if (target.name === 'number') {
      target.value = formatCreditCardNumber(target.value);
    }
    else if (target.name === 'expiry') {
      target.value = formatExpirationDate(target.value);
    }
    else if (target.name === 'cvc') {
      target.value = formatCVC(target.value);
    }

    const { onChange, type } = this.props;
    onChange(type, target.value);
  };

  handleInputFocus = () => {
    const { onFocus, type } = this.props;
    onFocus(type);
  };

  renderNumberInput() {
    const { placeholder, type } = this.props;
    return (
      <input
        type="tel"
        name="number"
        className="form-control"
        placeholder={placeholder || type}
        pattern="[\d| ]{16,22}"
        onChange={this.handleInputChange}
        onFocus={this.handleInputFocus}
      />
    );
  }

  renderNameInput() {
    const { placeholder, type } = this.props;
    return (
      <input
        type="text"
        name="name"
        className="form-control"
        placeholder={placeholder || type}
        pattern="[\d| ]{16,22}"
        onChange={this.handleInputChange}
        onFocus={this.handleInputFocus}
      />
    );
  }

  renderCVCInput() {
    const { placeholder, type } = this.props;
    return (
      <input
        type="tel"
        name="cvc"
        className="form-control"
        placeholder={placeholder || type}
        pattern="[\d| ]{16,22}"
        pattern="\d{3,4}"
        onChange={this.handleInputChange}
        onFocus={this.handleInputFocus}
      />
    );
  }

  renderExpiryInput() {
    const { placeholder, type } = this.props;
    return (
      <input
        type="tel"
        name="expiry"
        className="form-control"
        placeholder={placeholder || type}
        pattern="[\d| ]{16,22}"
        pattern="\d\d/\d\d"
        onChange={this.handleInputChange}
        onFocus={this.handleInputFocus}
      />
    );
  }

  render() {
    const { type } = this.props;

    switch (type) {
      case 'number':
        return this.renderNumberInput();
      case 'name':
        return this.renderNameInput();
      case 'cvc':
        return this.renderCVCInput();
      case 'expiry':
        return this.renderExpiryInput();
      default:
        return this.renderNameInput();
    }
  }
}

export default FormInput;
