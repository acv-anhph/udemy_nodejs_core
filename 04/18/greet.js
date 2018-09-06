var a = {

};

class Person {
  constructor (name) {
    this.name = name;
  }

  greet() {
    console.log('hello');
  }
}

const hoang = new Person('hoang');

console.log(hoang.__proto__);
console.log(Person.prototype);

hoang.greet();

