'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

angular.module("uno", []);

var mainCtrl = function () {
  function mainCtrl() {
    _classCallCheck(this, mainCtrl);
  }

  _createClass(mainCtrl, [{
    key: 'getUsers',
    value: function getUsers(users) {
      this.users = users;
      // const saveUsers = JSON.stringify(this.users);
      // localStorage.setItem('savedUsers', saveUsers);
      console.log('users -> ', this.users);
    }
  }, {
    key: 'getStart',
    value: function getStart(start) {
      this.start = start;
      console.log('this start -> ', start);
    }
  }]);

  return mainCtrl;
}();

angular.module('uno').component('mainComponent', {
  template: '\n      <start-form-component \n        user-list="$ctrl.getUsers($users)"\n        start-game="$ctrl.getStart($start)"\n        ng-if="!$ctrl.start"\n      >\n      </start-form-component>\n\n\n      <uno-component \n        current-users="$ctrl.users"\n        start="$ctrl.start"\n      >\n      </uno-component>\n    ',
  controller: mainCtrl
});

var startFormCtrl = function () {
  function startFormCtrl() {
    _classCallCheck(this, startFormCtrl);

    this.settings = {};
    this.users = [];
    this.userName = '';
    var savedUsers = JSON.parse(localStorage.getItem('savedUsers'));
    if (savedUsers) {
      this.start = true;
      this.startGame = this.start;
    }
  }

  _createClass(startFormCtrl, [{
    key: 'newUser',
    value: function newUser() {
      if (this.userName.length > 2) {
        this.users.push({
          name: this.userName,
          loser: false,
          score: 0,
          id: Date.now()
        });
        this.userName = '';
      }
      if (this.maximumCount >= 10) {
        this.settings.maximumCount = this.maximumCount;
        this.maximumCount = '';
      }
      this.userList({ $users: this.users });
    }
  }, {
    key: 'startNewGame',
    value: function startNewGame() {
      var saveUsers = JSON.stringify(this.users);
      localStorage.setItem('savedUsers', saveUsers);

      this.start = true;
      // this.startGame({$start: this.start})
    }
  }]);

  return startFormCtrl;
}();

angular.module('uno').component('startFormComponent', {
  template: '\n      <div class="start-form">\n        <h1 class="title">\n          Start Game\n        </h1>\n        <label>\n          <h3>\n            Points to loser\n          </h3>\n          <input type="number" placeholder="Enter maximum count" ng-model="$ctrl.maximumCount">\n        </label>\n        <label>\n          <h3>\n            Player\n          </h3>\n          <input type="text" placeholder="Enter player name" ng-model="$ctrl.userName">\n        </label>\n        <button\n          id="add-btn"\n          ng-click="$ctrl.newUser()"\n          ng-disabled="$ctrl.userName.length < 3"\n        >\n          +\n        </button>\n        <button ng-click="$ctrl.startNewGame()">\n          Start\n        </button>\n      </div>\n      <div class="start-users" ng-repeat="user in $ctrl.users">\n        {{user.name}}\n      </div>\n    ',
  controller: startFormCtrl,
  bindings: {
    userList: '&',
    startGame: '&'
  }
});

var unoCtrl = function () {
  function unoCtrl() {
    _classCallCheck(this, unoCtrl);
  }

  _createClass(unoCtrl, [{
    key: 'addUserCount',
    value: function addUserCount(id) {
      // const savedUsers = JSON.parse(localStorage.getItem('savedUsers'))

      this.user = this.currentUsers.filter(function (user) {
        return user.id === id;
      });
      var thisUser = this.user[0];
      thisUser.score += Number(thisUser.currentScore);
      thisUser.currentScore = '';

      // save to local
      // const saveUsers = JSON.stringify(this.currentUsers);
      // localStorage.setItem('savedUsers', saveUsers);
    }
  }]);

  return unoCtrl;
}();

angular.module('uno').component('unoComponent', {
  template: '\n      <div ng-repeat="user in $ctrl.currentUsers track by $index" ng-if="$ctrl.start">\n        <span>{{user.name}}</span>\n        <input type="text" placeholder="number" ng-model="user.currentScore">\n        <button ng-click="$ctrl.addUserCount(user.id)">+</button>\n        <span class="userScore">{{user.score}}</span>\n      </div>\n    ',
  controller: unoCtrl,
  bindings: {
    currentUsers: '=',
    start: '='
  }
});