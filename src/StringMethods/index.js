/*
    1. repeat
    2. startsWith
    3. endsWith
    4. includes
*/
export const stringMethodsExample = function () {
  console.log("ES6 introduced some new string methods");

  let hello = "Hello ";

  // repeats the string 5 times
  console.log("Repeating the string 5 times");
  console.log(hello.repeat(5));

  hello = "Hello World!";

  // returns bool
  console.log("Checking if a string starts with a given substring");
  console.log(hello.startsWith("Hello"));
  // start checking from index
  console.log(hello.startsWith("World", 6));

  // returns bool
  console.log("Checking if a string ends with a given substring");
  console.log(hello.endsWith("World!"));

  // start checking backwords from index
  console.log(hello.endsWith("Hello", hello.length - 7));

  // checks if given string is a substring
  console.log("Checking if a substring is present in the string");
  console.log(hello.includes("lo Wo"));
};
