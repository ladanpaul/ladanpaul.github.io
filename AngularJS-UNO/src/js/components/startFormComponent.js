class startFormCtrl {
  constructor() {
    this.settings = {}
    this.users = []
    this.userName = ''
    const savedUsers = JSON.parse(localStorage.getItem('savedUsers'))
    if(savedUsers) {
      this.start = true;
      this.startGame = this.start
    }
  }

  newUser() {
    if(this.userName.length > 2) {
      this.users.push({
        name: this.userName,
        loser: false,
        score: 0,
        id: Date.now(),
      })
      this.userName = ''
    }
    if(this.maximumCount >= 10) {
      this.settings.maximumCount = this.maximumCount
      this.maximumCount = ''
    }
    this.userList({$users: this.users})
  }

  startNewGame() {
    const saveUsers = JSON.stringify(this.users);
    localStorage.setItem('savedUsers', saveUsers);

    this.start = true;
    // this.startGame({$start: this.start})
  }

}

angular.module('uno')
  .component('startFormComponent', {
    template: `
      <div class="start-form">
        <h1 class="title">
          Start Game
        </h1>
        <label>
          <h3>
            Points to loser
          </h3>
          <input type="number" placeholder="Enter maximum count" ng-model="$ctrl.maximumCount">
        </label>
        <label>
          <h3>
            Player
          </h3>
          <input type="text" placeholder="Enter player name" ng-model="$ctrl.userName">
        </label>
        <button
          id="add-btn"
          ng-click="$ctrl.newUser()"
          ng-disabled="$ctrl.userName.length < 3"
        >
          +
        </button>
        <button ng-click="$ctrl.startNewGame()">
          Start
        </button>
      </div>
      <div class="start-users" ng-repeat="user in $ctrl.users">
        {{user.name}}
      </div>
    `,
    controller: startFormCtrl,
    bindings: {
      userList: '&',
      startGame: '&',
    }
  })