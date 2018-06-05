"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

angular.module("myNotes", []);

var editorCtrl = function () {
  function editorCtrl() {
    _classCallCheck(this, editorCtrl);

    this.notes = [];
  }

  _createClass(editorCtrl, [{
    key: "addNote",
    value: function addNote() {
      if (this.note) {
        this.notes.push({
          id: new Date(),
          text: this.note
        });
        this.note = '';
      }
    }
  }]);

  return editorCtrl;
}();

angular.module("myNotes").component("editorComponent", {
  template: "   \n      <div class=\"editor\">\n        <textarea cols=\"30\" rows=\"10\" ng-model=\"$ctrl.note\"></textarea>\n        <button class=\"addNote\" ng-click=\"$ctrl.addNote()\">Add</button>\n      </div>\n      <notes-list notes=\"$ctrl.notes\"></notes-list>\n    ",
  controller: editorCtrl
});

var notesCtrl = function notesCtrl() {
  _classCallCheck(this, notesCtrl);
};

angular.module("myNotes").component("notesComponent", {
  template: "\n      <div class=\"notes-wrapper\">\n        <h1>Notes:</h1>\n        <editor-component></editor-component>        \n      </div>\n    ",
  controller: notesCtrl
});

var notesListCtrl = function notesListCtrl() {
  _classCallCheck(this, notesListCtrl);

  console.log(this);
};

angular.module("myNotes").component("notesList", {
  template: "\n      <ul>\n        <li ng-repeat=\"note in $ctrl.notes\">\n          {{note.text}}\n        </li>\n      </ul>\n    ",
  controller: notesListCtrl,
  bindings: {
    notes: '='
  }
});