import "core-js/stable";
import "regenerator-runtime/runtime";

export const generatorExample = function () {
  console.log("ES6 introduced generator functions");
  console.log("Generator for generating the first 10 fibonacci numbers");
  // generator definition
  // notice the '*'
  let a = 0;
  let b = 1;
  let c = 0;
  function* fibo() {
    while (true) {
      // the yield keyword returns the value of c
      // and pauses the execution of the function
      yield c;
      a = b;
      b = c;
      c = a + b;
    }
  }

  // calling fibo() returns an iterator
  console.log("Initialising the iterator");
  const it = fibo();

  // print the first 10 fibonacci numbers
  console.log("Printing first 10 fibonacci numbers");
  for (let x = 0; x < 10; x++) {
    // The value that was yielded is present in the value field
    // Another field in the obj is a boolean named done
    // which is true when all yield statements have been processed
    // The next method resumes function execution
    console.log(it.next().value);
  }
};
