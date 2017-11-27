
class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    return `wah wah I'm ${this.name}`;
  }
}

// // node
// module.exports = Dog;

// ejS (es6)
export default Dog;
