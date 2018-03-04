const DEFAULT_COLOR = '#FFFFB2';

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

const NotesApp = React.createClass({
  getInitialState() {
    return {
      notes: [],
    };
  },

  componentDidMount() {
    const savedNotes = JSON.parse(localStorage.getItem('notes'));
    if(savedNotes) {
      this.setState({
        notes: savedNotes,
      });
    }
  },

  componentDidUpdate(prevProps, prevState) {
    if(prevState !== this.state.notes) {
      this.saveToLocalStorage();
    }    
  },

  handleNoteAdd(newNote) {
    this.setState({
      notes: [newNote, ...this.state.notes]
    }, this.saveToLocalStorage);
  },

  handleNoteDelete(noteId) {
    this.setState({
      notes: this.state.notes.filter((note) => note.id !== noteId)
    });
  },

  saveToLocalStorage() {
    console.log('this state notes: ', this.state.notes);
    
    const notes = JSON.stringify(this.state.notes);
    localStorage.setItem('notes', notes);
  },

  render() {
    return(
      <div className="app">
        <h2 className="app__header"> NotesApp </h2>
        <NoteEditor onNoteAdd={this.handleNoteAdd}/>
        <NotesGrid notes={this.state.notes} onNoteDelete={this.handleNoteDelete} />
      </div>
    );
  }
});

ReactDOM.render(
  <NotesApp />,
  document.getElementById('notes')
)