class mainCtrl {
  constructor() {

  }

  getUsers(users) {
    this.users = users
    // const saveUsers = JSON.stringify(this.users);
    // localStorage.setItem('savedUsers', saveUsers);
    console.log('users -> ', this.users);
  }

  getStart(start) {
    this.start = start
    console.log('this start -> ', start);
  }

}

angular.module('uno')
  .component('mainComponent', {
    template: `
      <start-form-component 
        user-list="$ctrl.getUsers($users)"
        start-game="$ctrl.getStart($start)"
        ng-if="!$ctrl.start"
      >
      </start-form-component>


      <uno-component 
        current-users="$ctrl.users"
        start="$ctrl.start"
      >
      </uno-component>
    `,
    controller: mainCtrl,
  })