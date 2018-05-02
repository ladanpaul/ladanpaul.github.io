import React, { Component, PropTypes } from 'react';

import passProps from "./hoc/passProps.jsx";

class Note extends Component {
  static propTypes = {
    title: PropTypes.node,
    id: PropTypes.number.isRequired,
    color: PropTypes.string,
    children: PropTypes.string,
    onDelete: PropTypes.func.isRequired
  }

  static defaultProps = {
    color: 'lightgreen'
  }

  constructor() {
    super()

    this.handleDelete = ::this.handleDelete;
  }

  handleDelete() {
    this.props.onDelete(this.props.id)
  }

  render() {
    const {
      title,
      color,
      children,
      onDelete
    } = this.props;

    return(
      <div className="note" style={{backgroundColor: color}}>
        <span className="close" onClick={this.handleDelete}>&#x2716;</span>
        <h3> { title } </h3>
        {children}
      </div>
    );
  }
}

export default passProps({ title: 'Note:' }, Note);