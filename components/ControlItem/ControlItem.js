import React                from 'react';
import ControlItemContainer from './ControlItemContainer';

const hoc = (WrappedComponent, type) => class extends React.Component {
  render() {
    return (
      <WrappedComponent {...this.props} type={type} />
    );
  }
};

export default {
  Number:   hoc(ControlItemContainer, 'number'),
  Operator: hoc(ControlItemContainer, 'operator'),
};
