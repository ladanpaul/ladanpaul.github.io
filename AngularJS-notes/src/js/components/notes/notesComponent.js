class notesCtrl {
  constructor() {

  }
}

angular.module("myNotes")
  .component("notesComponent", {
    template: `
      <div class="notes-wrapper">
        <h1>Notes:</h1>
        <editor-component></editor-component>        
      </div>
    `,
    controller: notesCtrl,
  })