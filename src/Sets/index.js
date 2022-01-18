export const setExample = function () {
  console.log("ES6 introduced new Set data structure");

  // set declaration
  let nums = new Set();

  // set methods
  // adding an element to the set
  // returns the set itself so methods can be chained
  nums.add(1).add(2).add(3);
  console.log("After inserting 1, 2 and 3 in the set");
  console.log(nums);

  // deleting an element
  // returns a boolean indicating success
  console.log("Removing elements from the set");
  console.log(`Is 3 deleted? ${nums.delete(3)}`);
  console.log(`Is 4 deleted? ${nums.delete(4)}`);

  // check if element is present in the set
  console.log("Checking if an element is present in the set");
  console.log(`Is 2 present? ${nums.has(2)}`);
  console.log(`Is 4 present? ${nums.has(4)}`);

  // get size of the set
  // output 2
  console.log(`Size of the set is ${nums.size}`);

  // empty the set
  nums.clear();
  // output 0
  console.log(`Size of the set after clearing is ${nums.size}`);

  // Removing duplicates
  nums.add(1).add(2).add(2);
  // output 2 as duplicates will be removed
  console.log(`Size of the set after adding 1, 2 and 2 is ${nums.size}`);

  console.log("Removing duplicates from array");
  const arr = [4, 5, 5, 6];
  console.log("Array is " + arr);
  nums = new Set(arr);
  console.log("After passing array to Set()");
  console.log(nums);
};
