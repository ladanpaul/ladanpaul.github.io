'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

angular.module("myNotes", []);

var editorCtrl = function editorCtrl() {
  var _this = this;

  _classCallCheck(this, editorCtrl);

  this.addNote = function () {
    if (_this.note) {
      var note = {
        id: Date.now(),
        text: _this.note
      };
      _this.addNote2({ $note: note, $hello: 'hello' });
      _this.note = '';
    }
  };
};

angular.module("myNotes").component("editorComponent", {
  template: '   \n      <div class="editor">\n        <textarea cols="30" rows="10" ng-model="$ctrl.note"></textarea>\n        <button class="addNote" ng-click="$ctrl.addNote()">Add</button>\n      </div>\n    ',
  controller: editorCtrl,
  bindings: {
    addNote2: '&'
  }
});

var notesCtrl = function () {
  function notesCtrl() {
    _classCallCheck(this, notesCtrl);

    this.notes = [];
  }

  _createClass(notesCtrl, [{
    key: 'addNoteToList',
    value: function addNoteToList(hello, note) {
      console.log(arguments);
      debugger;
      if (note) {
        this.notes.push(note);
      }
    }
  }]);

  return notesCtrl;
}();

angular.module("myNotes").component("notesComponent", {
  template: '\n      <div class="notes-wrapper">\n        <h1>Notes:</h1>\n        <editor-component add-note2="$ctrl.addNoteToList($hello, $note)"></editor-component>\n        <notes-list notes="$ctrl.notes"></notes-list>               \n      </div>\n    ',
  controller: notesCtrl
});

var notesListCtrl = function () {
  function notesListCtrl() {
    _classCallCheck(this, notesListCtrl);

    console.log(this);
  }

  _createClass(notesListCtrl, [{
    key: 'deleteNote',
    value: function deleteNote(item) {
      this.notes = this.notes.filter(function (note) {
        return note.id != item.id;
      });
    }
  }]);

  return notesListCtrl;
}();

angular.module("myNotes").component("notesList", {
  template: '\n      <ul>\n        <li ng-repeat="note in $ctrl.notes">\n          <span>{{note.text}}</span>\n          <i ng-click="$ctrl.deleteNote(note)">\u2715</i>\n        </li>\n      </ul>\n      {{$ctrl.notes.length}}\n    ',
  controller: notesListCtrl,
  bindings: {
    notes: '='
  }
});