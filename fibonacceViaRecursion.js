let count=1
function fibo(a,b){
    if(count<=18){
        n=a+b
        console.log("new fibo for: ",a,"+",b,"=",n,", ",count,"times")
        a=b
        b=n
        count++
        fibo(a,b)
        
    }else{
        return console.log("count is greater than 18 now.")
        
    }
}
fibo(0,1)