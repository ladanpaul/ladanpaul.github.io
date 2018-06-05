"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

angular.module("myNotes", []);

var notesCtrl = function notesCtrl() {
  _classCallCheck(this, notesCtrl);
};

angular.module("myNotes").component("notesComponent", {
  template: "\n      <div class=\"notes-wrapper\">\n        <h1>Notes:</h1>\n        <editor-component></editor-component>        \n      </div>\n    ",
  controller: notesCtrl
});

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
          id: Date.now(),
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

var notesListCtrl = function () {
  function notesListCtrl() {
    _classCallCheck(this, notesListCtrl);

    console.log(this);
  }

  _createClass(notesListCtrl, [{
    key: "deleteNote",
    value: function deleteNote(item) {
      this.notes = this.notes.filter(function (note) {
        return note.id != item.id;
      });
    }
  }]);

  return notesListCtrl;
}();

angular.module("myNotes").component("notesList", {
  template: "\n      <ul>\n        <li ng-repeat=\"note in $ctrl.notes\">\n          <span>{{note.text}}</span>\n          <i ng-click=\"$ctrl.deleteNote(note)\">X</i>\n        </li>\n      </ul>\n      {{$ctrl.notes.length}}\n    ",
  controller: notesListCtrl,
  bindings: {
    notes: '='
  }
});