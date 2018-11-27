'use strict';

module.exports = class Person {
   constructor(firstName, id) {
       this.firstName = firstName;
       this.id = id;
   }

   display() {
       console.log(this.firstName + " " + this.id);
   }
}