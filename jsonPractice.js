let userStr = '{"name":"Sammy","email":"sammy@example.com","plan":"Pro"}';
let obj= {
        "name": "Sammy",
        "email": "sammy@example.com",
        "plan": "Pro"
    }
let userObj = JSON.parse(userStr);
let userOb = parseString(obj);

console.log(userObj);
console.log(userOb);
// output: {
//     "name": "Sammy",
//     "email": "sammy@example.com",
//     "plan": "Pro"
// }




let str = '{"name":"Sammy","email":"sammy@example.com","plan":"Pro"}';
let obje= {
        "name": "Sammy",
        "email": "sammy@example.com",
        "plan": "Pro"
    }
let jj=typeof obje==="string" ? obje : JSON.stringify(obje)
let jso = JSON.parse(str);
let jsonn = JSON.parse(jj);

console.log(jso);
console.log(jsonn);