class notesListCtrl {
  constructor() {
    console.log(this)
  }
}


angular.module("myNotes")
  .component("notesList", {
    template: `
      <ul>
        <li ng-repeat="note in $ctrl.notes">
          {{note.text}}
        </li>
      </ul>
    `,
    controller: notesListCtrl,
    bindings: {
      notes: '=',
    }
  })