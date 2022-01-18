export const defaultParametersExample = function () {
  function example(a, b = 2, c = 3) {
    console.log("ES6 default parameters for function");

    // if no values are passed for b and c
    // then their default values will be used
    console.log(
      "a = " + a + " b = " + b + " c = " + c + ", a + b + c = " + (a + b + c)
    );
  }

  // output = 18
  example(5, 6, 7);

  // output = 10
  example(5);
};
