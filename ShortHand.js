//swaping the value
let arr =[1,2,3,4,5]
//using temp variables
let temp = arr[0];
arr[0]=arr[4];
arr[4]=temp;
console.log(arr);//[ 5, 2, 3, 4, 1 ]

//array destructuring

const arr = [1,2,3,4,5];
[arr[0], arr[4]] = [arr[4], arr[0]];
console.log(arr); // [ 5, 2, 3, 4, 1 ]
//USING math

let a=2;
let b = 1;
b=a+(a=b)-b;
console.log(a,b);//1 2

//Destructuring Aliases

const person ={
    name:'hello',
    age:'30',
    race:'world'
}
const {name:first, race:last}=person;
console.log(first,last);//hello world

//remove duplicate number from array
let arr =[1,3,5,2,5,1,3,7]
const sortedArray=[...new Set(arr)]//[new Set(arr)]=[ Set(5) { 1, 3, 5, 2, 7 } ]
console.log(sortedArray);//[ 1, 3, 5, 2, 7 ]
//OR
let a = [22,3,5,8,3,9,5]
const sortArr = a.filter((v,i)=> a.indexOf(v)==i)
console.log(sortArr);//[ 22, 3, 5, 8, 9 ]

//array comparison
const compareArrays=(a,b)=>{
    return a.length===b.length && a.every((v,i)=>v===b[i])
}
console.log(compareArrays([1,2,3],[1,2,3]));//true

//random shuffling
const array =[1,3,2,4,5]
let sortedArr= array.sort()//for sorting
console.log(sortedArr);//[ 1, 2, 3, 4, 5 ]
// passing comparison func in sort()
let shuffledArr= array.sort(()=>Math.random()-.5)
console.log(shuffledArr);//random array [ 4, 3, 5, 2, 1 ] or [ 2, 5, 1, 3, 4 ] etc

//comma operator
let x=1;
x=(x++,x)//',' evaluates each of its operands (from left to right) and returns the value of the last operand. 
console.log(x);//2
let y=(3,4)
console.log(y);//4

var array = [5, 10, 15,70, 20, 25, 30, 35, 40, 45, 50, 55, 60];

let newArray=array.filter(x=>(x===20 || x=== 25 || x===30))
console.log(newArray);