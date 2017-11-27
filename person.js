function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function(fullName) {
   return this.firstName + " " + this.lastName;
  }
}

var person = new Person ('Sophie','Chhoeu');

console.log("Hello " + person.fullName());
