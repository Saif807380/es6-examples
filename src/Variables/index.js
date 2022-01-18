export const variablesExample = function () {
  console.log("Variable declaration keywords in ES6 - const and let");

  // constants
  const x = 10;
  // const x = 5, throws error variable redeclared
  // x = 5, throws error variable cannot be reassigned

  // let keyword, lexicographical scoping
  var y = 10;
  let z = 15;
  // y = 10, z = 15
  console.log("Before y = " + y + " z = " + z);
  if (x > 5) {
    // var changes in global scope
    // let redeclares in local scope
    var y = 5;
    let z = 5;
  }

  // y = 5, z = 15,
  console.log("After y = " + y + " z = " + z);
};
