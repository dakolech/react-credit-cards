import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class SubmitButton extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    className: PropTypes.string,
    text: PropTypes.string,
  };

  static defaultProps = {
    onSubmit: () => {},
    text: 'Pay',
    className: 'btn btn-primary btn-block',
  };


  render() {
    const { onSubmit, className, text } = this.props;

    return (
      <div className="form-actions">
        <button type="button" onClick={onSubmit} className={className}>{text}</button>
      </div>
    );
  }
}

export default SubmitButton;
