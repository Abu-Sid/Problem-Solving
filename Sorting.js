// check a number is prime
const isPrime =(n)=>( n%2 === 0 ? true : false )
console.log(isPrime(8));//true

//Find the prime number in a array

let arr=[3,5,4,7,9,15,20]
const primeArr = arr.filter(n=>n%2 === 0)
console.log(primeArr);//[ 4, 20 ]

//find specific number of array
let X=[1,2,4,5,6,7,17,8,11]
let Y = X.filter((x)=>(x===4 || x===11 ||x===17 ))
console.log(Y);