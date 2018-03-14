import React, { Component } from 'react';

export default class Note extends Component {
  constructor() {
    super()

    this.handleDelete = ::this.handleDelete;
  }

  handleDelete() {
    this.props.onDelete(this.props.id)
  }

  render() {
    const {
      color,
      children,
      onDelete
    } = this.props;

    return(
      <div className="note" style={{backgroundColor: color}}>
        <span className="close" onClick={this.handleDelete}>&#x2716;</span>
        {children}
      </div>
    );
  }
}