export const spreadOperatorExample = function () {
  console.log("ES6 spread operator example");

  let arr1 = [1, 2, 3];
  console.log(`Arr 1 = ${arr1}`);
  // multi-dimensional array
  // [[1, 2, 3], 4, 5, 6]
  let arr2 = [arr1, 4, 5, 6];
  console.log(`Arr 2 after inserting Arr 1 directly`);
  console.log(arr2);

  // spreads elements of arr1 to generate a one-dimensional array
  // [1, 2, 3, 4, 5, 6]
  arr2 = [...arr1, 4, 5, 6];
  console.log(`Arr 2 after spreading Arr 1 in it`);
  console.log(arr2);
};
