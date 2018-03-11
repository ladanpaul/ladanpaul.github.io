import React from 'react';

const DEFAULT_COLOR = 'yellow';

const NoteEditor = React.createClass({
  
  getInitialState() {
    return {
      text: '',
    };
  },

  handleTextChange(e) {
    this.setState({
      text: e.target.value,
    });
  },

  handleNoteAdd() {
    const newNote = {
      text: this.state.text,
      id: Date.now(),
      color: DEFAULT_COLOR
    };

    this.props.onNoteAdd(newNote);

    this.resetState();
  },

  resetState() {
    this.setState({
      text: '',
    });
  },

  render() {
    return(
      <div className="editor">
        <textarea
          rows={5}
          placeholder="Enter your note here..."
          className="editor__textarea"
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        { 
          this.state.text
           && 
          <button className="editor__button" onClick={this.handleNoteAdd}>
            <span>&#43;</span>
          </button>
        }
      </div>
    );
  }
});

export default NoteEditor;