// function sum(a, b) {
//   return a + b;
// }
// module.exports = sum;
//
// function fullName(firstName, lastName) {
//   return firstName + " " + lastName;
// }


class Person {
  constructor(firstName,lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greet() {
    return `why hello ${this.firstName} ${this.lastName}`;
  }
}

module.exports = Person;
// function person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//    return this.firstName + " " + this.lastName;
// }
//
// var person = new person ('Sophie','Chhoeu');
//
// // person.fullName;
//
// const personName = {
//   firstName: "Sophie",
//   lastName: "Chhoeu"
// }
// //
// // fullName(personName);
//
// // var person = new Person ('Sophie','Chhoeu');
// //
// // console.log("Hello " + person.fullName());
// //
// module.exports = personName;
