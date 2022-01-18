export const templateStringsExample = function () {
  console.log("ES6 Template Strings");

  const a = 5;
  const b = 10;

  // regular string
  console.log("Using regular string concat a = " + a + " b = " + b);

  // template string syntax for the same
  console.log(`Using template strings a = ${a} b = ${b}`);

  // template strings consider spacing
  // output - Template String with
  //            Formatting
  console.log(`Template String with
    Formatting`);
};
