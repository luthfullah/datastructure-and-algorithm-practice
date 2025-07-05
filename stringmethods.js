let str = "  Hello, JavaScript World!  ";
const jsonStr = '{"name":"Ali", "age":25}';
console.log(str.slice(2, 8));
console.log(JSON.parse(jsonStr));
console.log(navigator.onLine);

// outputs:
// Hello,
//  {name: "Ali", age: 25}
// true
