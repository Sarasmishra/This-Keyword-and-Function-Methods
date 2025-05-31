function multiplyNumbers(num1, num2) {
  // Create a context object with a and b
  const context = { a: num1, b: num2 };

  // Use apply() to call multiplyNumbers method with this = context
  return object.multiplyNumbers.apply(context);
}

const object = {
  multiplyNumbers: function() {
    return this.a * this.b;
  }
};

let result = multiplyNumbers(5, 3);
console.log(result); // 15
