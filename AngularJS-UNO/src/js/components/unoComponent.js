class unoCtrl {
  constructor() {
    
  }

  addUserCount(id) {
    // const savedUsers = JSON.parse(localStorage.getItem('savedUsers'))
    
    this.user = this.currentUsers.filter(user => user.id === id)
    const thisUser = this.user[0]
    thisUser.score += Number(thisUser.currentScore)
    thisUser.currentScore = ''

    // save to local
    // const saveUsers = JSON.stringify(this.currentUsers);
    // localStorage.setItem('savedUsers', saveUsers);
  }

}

angular.module('uno')
  .component('unoComponent', {
    template: `
      <div ng-repeat="user in $ctrl.currentUsers track by $index" ng-if="$ctrl.start">
        <span>{{user.name}}</span>
        <input type="text" placeholder="number" ng-model="user.currentScore">
        <button ng-click="$ctrl.addUserCount(user.id)">+</button>
        <span class="userScore">{{user.score}}</span>
      </div>
    `,
    controller: unoCtrl,
    bindings: {
      currentUsers: '=',
      start: '=',
    }
  })