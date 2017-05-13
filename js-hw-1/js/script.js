'use strict';

var number = prompt('enter a base: ','');
var exponent = prompt('enter an exponent: ','');

function pow(base, exp) {

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

}

console.log(pow(number, exponent));
