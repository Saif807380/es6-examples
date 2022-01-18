export const arrowFunctionDeclarationExample = function () {
  console.log("Declaring functions using ES6 Arrow Functions");

  let greet = function () {
    console.log("Hello! from ES5 function");
  };

  greet();

  // An arrow function is declared using =>
  greet = () => {
    console.log("Hello! from Arrow Function");
  };

  greet();

  // if the body contains only a single statement
  // {} can be removed
  greet = () => console.log("Hello! from single statement arrow function");

  greet();

  // Arrow function with parameters
  greet = (name) =>
    console.log(`Hello ${name}! from arrow func with an argument`);

  greet("Joe");

  // if there is only single parameter
  // () can be removed
  greet = (name) =>
    console.log(`Hello ${name}! from arrow func with single arg`);

  greet("Joe");

  // arrow functions with multiple parameters
  let sum = (a, b, c) =>
    console.log(a + b + c + " from arrow func with multiple args");

  sum(1, 2, 3);
};

export const thisKeywordExample = function () {
  console.log(
    "Example to show scoping of 'this' keyword in ES6 arrow functions"
  );

  const car = {
    name: "Ferrari",
    colour: "Red",
    // when using 'this' directly inside the anonymous function
    // 'this' points to the function obj, which does not have the
    // name field and hence returns undefined
    // therefore, to use 'this' we need to create a new ref to it
    // and use that ref inside the anonymous function
    oldEngine: function (x) {
      // creating a ref to 'this'
      const _this = this;
      window.setInterval(function () {
        if (x > 0) {
          console.log(`${_this.name}'s old engine goes brr...`);
        }
        x--;
      }, 1000);
    },
    // however, arrow functions do not change the binding of 'this'
    // so we don't have to create a new ref
    // we can use 'this' directly
    newEngine: function (x) {
      window.setInterval(() => {
        if (x > 0) {
          console.log(`${this.name}'s new engine goes vroom...`);
        }
        x--;
      }, 1000);
    },
  };

  car.oldEngine(3);
  car.newEngine(3);
};
