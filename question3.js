function personInfo() {
  console.log(`Name: ${this.name}, Age: ${this.age}`);
}

const person = {
  name: "Alice",
  age: 30
};

// Using call() to invoke personInfo with 'person' as this
personInfo.call(person);
