var app = require('../app.js');

describe('app', function(){
  it('it pow', function(){
    // prepare 
    var result;
    // act
    result = app.pow(2,4);
    // assert
    expect(result).toBe(16);
  });
  it('it name', function(){
    // prepare 
    var result;
    // act
    result = app.name(['Паша','Серегей','Петя','Антон','Денис'], 'Паша' );
    // assert
    expect(result).toBe(true);
  });
});