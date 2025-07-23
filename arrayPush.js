const arr = ["x", "y"];
const arr2 = ["a", "b"];

arr2.push(arr); //["a", "b", ["x", "y"]]
arr2.push(...arr); ////["a", "b", "x", "y"]
arr2.push(arr[0], arr[1]); //["a", "b", "x", "y"]
console.log(arr2);
