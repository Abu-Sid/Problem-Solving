//Marge and Remove duplicate value of two array 
let array1 = ['a','b','c']
let array2 = ['c','c','d','e'];
// let newArr =[...array1,...array2]
// console.log([...new Set(newArr)]);
let newArr2=array1.concat(array2)
console.log([...new Set(newArr2)]);
// let a=[]
// for(let i=0;i<newArr2.length; i++){
//     if(a.indexOf(newArr2[i])<0){
//         a.push(newArr2[i])
//     }
// }
// console.log(a);

let arr =[4,6,2,1,6,2]
// const Rdup= arr.filter((v,i)=>arr.indexOf(v)===i)
const Rdup= [...new Set(arr)]
console.log(Rdup);

//foreach
function dupArr(a){
    var result = [];
    a.forEach(function(item) {
         if(result.indexOf(item) < 0) {
             result.push(item);
         }
    });
    return result;
}
console.log(dupArr([1,2,2,3,5,4,8,4,9]));