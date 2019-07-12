import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class Row extends React.Component {
  static propTypes = {
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    children: PropTypes.node,
  };

  static defaultProps = {
    onChange: () => {},
    onFocus: () => {},
  };

  render() {
    const { onChange, onFocus, children } = this.props;

    return (
      <div className="row">
        {React.Children.map(children, (input) => React.cloneElement(input, {
          onChange,
          onFocus,
        }))}
      </div>
    )
  }
}

export default Row;
