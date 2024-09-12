function palindrone(str){
    const string=str.split('').reverse().join('')
    return str===string
}
console.log(palindrone("racecar")) //output: true