const Person = require('./sum');

const sophie = new Person("Sophie", "Chhoeu");



test('greet', () => {
  expect(sophie.greet()).toBe("why hello Sophie Chhoeu");
});


//
// test('full name should be firstName and Lastname', () => {
//   expect(person(firstName,lastName)).toBe("Sophie Chhoeu")();
// });
