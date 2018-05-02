import React, { Component } from 'react';

export default function passProps(props, WrappedComponent) {
  class EnhancedComponent extends Component {
    render() {
      return (
        <WrappedComponent { ...props} {...this.props} />
      );
    }
  }

  return EnhancedComponent;
}