import React from 'react';

const Note = React.createClass({
  handleDelete() {
    this.props.onDelete(this.props.id)
  },

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
});

export default Note;