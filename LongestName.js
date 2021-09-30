//Find the longest name of the array.

function MaxArr(arr){
    let maxLength ="";
    for(let i=0;i<arr.length;i++){
        if(arr[i]>maxLength){
            maxLength= arr[i]
        }
    }
    return maxLength
}
console.log(MaxArr(['abc','bcdf','ab']));//bcdf

//Alternative

const arr = ['abc','bcdf','ab']
const arrL = arr.map(word => word.length);//[3,4,1]
const maxL = Math.max(...arrL) //4
const result = arr.find(a=>a.length===maxL)//bcdf
//const MaxArr = Math.max(...arr.map(e=>e.length))
console.log(result);

//Find the longest word of the sentence

let string = 'I love myself and myfamily'

const maxWord =(str)=>{
    const strA = str.split(' ') // [']
    const strL = strA.map(a=>a.length)
    const maxL = Math.max(...strL)
    return result = strA.find(a=>a.length===maxL)
}
console.log(maxWord(string));