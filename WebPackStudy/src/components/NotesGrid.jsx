import React from 'react';

import Note from './Note.jsx';

const NotesGrid = React.createClass({

  render() {
    const {
      notes,
      onNoteDelete,
    } = this.props;

    return(
      <div className="grid">
        {
          notes.map(note =>
            <Note 
              key={note.id}
              id={note.id}
              color={note.color}
              onDelete={onNoteDelete}
            >
              {note.text}
            </Note>
          )
        }
      </div>
    );
  }
});

export default NotesGrid;