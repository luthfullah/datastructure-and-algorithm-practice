const arr = ["x", "y"];
const arr2 = ["a", "b"];

arr2.push(arr);
const arr3 = arr2.push(arr[0], arr[1]);
console.log(arr2);
console.log(arr3);

// output: [
//     "a",
//     "b",
//     [
//         "x",
//         "y"
//     ]
// ]
