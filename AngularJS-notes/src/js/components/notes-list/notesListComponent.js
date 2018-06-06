class notesListCtrl {
  constructor() {
    console.log(this)
  }

  deleteNote(item) {
    this.notes = this.notes.filter((note) => note.id != item.id)
  }
}


angular.module("myNotes")
  .component("notesList", {
    template: `
      <ul>
        <li ng-repeat="note in $ctrl.notes">
          <span>{{note.text}}</span>
          <i ng-click="$ctrl.deleteNote(note)">✕</i>
        </li>
      </ul>
      {{$ctrl.notes.length}}
    `,
    controller: notesListCtrl,
    bindings: {
      notes: '=',
    }
  })