class editorCtrl {
  constructor() {
    this.notes = []
  }

  addNote() {
    if(this.note) {
      this.notes.push({
        id: Date.now(),
        text: this.note,
      })
      this.note = ''
    }
  }
}

angular.module("myNotes")
  .component("editorComponent", {
    template: `   
      <div class="editor">
        <textarea cols="30" rows="10" ng-model="$ctrl.note"></textarea>
        <button class="addNote" ng-click="$ctrl.addNote()">Add</button>
      </div>
      <notes-list notes="$ctrl.notes"></notes-list>
    `,
    controller: editorCtrl,
  })