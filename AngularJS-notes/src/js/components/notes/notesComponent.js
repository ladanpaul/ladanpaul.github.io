class notesCtrl {
  constructor() {
    this.notes = []
    console.log('this noteList ->', this)
  }

  addNoteToList(hello, note) {
    console.log('arguments', arguments);
    console.log('this', this);
    note ? this.notes.push(note) : null
  }
}

angular.module("myNotes")
  .component("notesComponent", {
    template: `
      <div class="notes-wrapper">
        <h1>Notes:</h1>
        <editor-component add-note2="$ctrl.addNoteToList($hello, $note)"></editor-component>
        <notes-list notes="$ctrl.notes"></notes-list>               
      </div>
    `,
    controller: notesCtrl,
  })