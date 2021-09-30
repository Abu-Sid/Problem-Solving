//1.Remove falsy values from any array

let arr =[1,'apple',false,5,'orange', NaN, 0, 'hello','false',undefined, 11, null,'']
const result=arr.filter(Boolean)//Boolean function return the truthy value
console.log(result);//[ 1, 'apple', 5, 'orange', 'hello', 'false', 11 ]


//2.convert any value to Boolean

//double not(!!) before the value convert to boolean
console.log(!!'Hello')//true
console.log(!!'')//false

//Boolean() also used to check boolean value
console.log(Boolean('Hello'))//true
console.log(Boolean(0))//false

//3.Resizing array ( only to decrease element)
let friends =['A','B','C','D'];
//assigning array.length value we can resize any array
friends.length=3;
console.log(friends);//[ 'A', 'B', 'C' ]



//5. log values with variables names shortly

const captain ='mashrafi';
const umpire = 'alimDar';
//Avoid this
console.log(`captain is ${captain}`);//captain is mashrafi
console.log(`umpire is ${umpire}`);//umpire is alimDar

//Smart and shortcut way
console.log({captain});//{ captain: 'mashrafi' }
console.log({umpire});//{ umpire: 'alimDar' }

//shortcut way to floor a value

let pi = 3.14;
let rounded =Math.floor(pi)
//using Math.floor
console.log(rounded)
//using ~~ faster than floor
let round = ~~pi;
console.log(round)
