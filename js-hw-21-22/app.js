var app = {
  pow: function(base, exp) {
    
      var result = 1;
      if (exp < 0) {
        exp = exp*(-1);
        for(var i = 0; i < exp; i++) {
          result = result * base;
        }
        return 1/result;
      } else {
    
        for(var i = 0; i < exp; i++) {
          result = result * base;
        }
        return result;
      }
    
    },
  name: function(arr, yourName){
    arr = ['Паша','Серегей','Петя','Антон','Денис'];
      var names;
    var trigger = 0;
    
      // for(var i = 0; i < 5; i++){
      //   names = prompt('Enter 5 names: ');
      //   arr.push(names);
      // }
    console.log(arr);
    // yourName = prompt('Enter the name: ');
    yourName = 'Паша';
    console.log(yourName);
    for(var j = 0; j < arr.length; j++){
      if(arr[j] == yourName){
        trigger++;
      }
    }
    if(trigger > 0){
      return true;
    } else {
      return false;
    }
  }
}

module.exports = app;