'use strict';

var number = prompt('enter a base: ','');
var exponent = prompt('enter an exponent: ','');
var result = 1;

function pow(base, exp) {

  for(var i = 0; i < exponent; i++) {
    result = result * number;
  }
  return result;

}

console.log(pow(number, exponent));
