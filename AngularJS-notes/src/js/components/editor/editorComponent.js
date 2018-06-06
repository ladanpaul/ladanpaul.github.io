class editorCtrl {
  constructor() {

    this.addNote = () => {
      if(this.note) {
        const note = {
          id: Date.now(),
          text: this.note,
        }
        this.addNote2({ $note: note, $hello: 'hello' })
        this.note = ''
      }
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
    `,
    controller: editorCtrl,
    bindings: {
      addNote2: '&',
    }
  })