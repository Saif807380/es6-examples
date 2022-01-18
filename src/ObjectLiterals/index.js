export const objectLiteralExample = function () {
  console.log(
    "ES6 Object Literal Enhancements shows alternative syntax for defining objects"
  );

  var model = "Ferrari";
  var colour = "Red";
  // common js syntax
  var car = {
    model: model,
    colour: colour,
    start: function () {
      console.log("Starting the car...");
    },
  };

  console.log("Object defined using ES5 syntax");
  console.log(car);

  // es6 syntax
  car = {
    model,
    colour,
    start() {
      console.log("Starting the car...");
    },
  };

  console.log("Object defined using ES6 syntax");
  console.log(car);
};
