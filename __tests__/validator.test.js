'use strict'

const validatorClass = require('../lib/validator.js');

const schema = {
    fields: {
        id: {type: 'string'},
        age: {type: 'number'},
        favoriteToys: {type: 'object'}
    },
};
const validator = new validatorClass(schema);

describe('validate if the input is a string', () => {
  let str = 'yes';
  let num = 1;
  let arr = ['a'];
  let obj = {x: 'y'};
  let func = () => {
  };
  let bool = false;


  it('valid strings', () => {

    expect(validator.isString(str)).toBeTruthy();
  });
  it ('invalid strings', () => {
    let invalidData = [num, arr, obj, func, bool];

    for(let invalidValue of invalidData) {
      expect(validator.isString(invalidValue)).toBeFalsy();
    }
  });
});



describe('#isOjectValid', () => {
    test('regular cases', () => {
        expect(validator.isObjectValid({id: 'a', age: 1, favoriteToys: {}}, schema)).toEqual(true);
    });
    test('irregular cases', () => {
        expect(validator.isObjectValid({age: 1, favoriteToys: {}}, schema)).toEqual(false);
    });
});


describe('validate array is correct type', () => {

      it('validates that the array is only numbers', () => {
        expect(validator.isArrayValid([1,2,3])).toEqual(true);
      });

    it('returns false if the array includes a non-number', () => {
        expect(validator.isArrayValid(['1','hi'])).toEqual(false);
    });

  });