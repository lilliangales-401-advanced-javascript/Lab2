'use strict';

class Validator {

  constructor(schema) {
    this.schema = schema;
  }

  isString(input) {
    return typeof input === 'string';
  }



//   Vinicio - checks an object against a schema
//   isValid(data, schema)
//   isValidObject in my demo cod

isObjectValid(input) {
      for (let i = 0; i < Object.keys(this.schema.fields).length; i++) {
          if (!input.hasOwnProperty(Object.keys(this.schema.fields)[i])) {
              return false;
          }
          return true;
      }
}


isArrayValid(input) {
      for (let i = 0; i < input.length; i++){
          if(!(typeof input[i] === 'number')){
              return false;
          }
          return true;
      }
}


};
module.exports = Validator;