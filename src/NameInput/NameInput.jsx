import React from 'react';
import PropTypes from 'prop-types';
import Payment from 'payment';
import './styles.scss';

class NameInput extends React.Component {
  static propTypes = {
    onFocus: PropTypes.func,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
  };

  static defaultProps = {
    onChange: () => {},
    onFocus: () => {},
    placeholder: '',
  };


  render() {
    const { onChange, onFocus, placeholder } = this.props;

    return (
      <input
        type="text"
        name="name"
        className="form-control"
        placeholder="Name"
        required
        onChange={onChange}
        onFocus={onFocus}
      />
    );
  }
}

export default NameInput;
