// Reverse a string

let Str= 'i love you';
const reverseStr = Str.split(' ').map(s=>s.split('').reverse().join('')).join(' ')
console.log(reverseStr);// i evol ouy

// Alternative
let Str= 'i love you';
const revStr= Str.split(' ').reverse().join(' ').split('').reverse().join('')
console.log(revStr);//i evol uoy

// Alternative
function ReverseStr(s){
    let Rstr='';
    for(let i=0;i<s.length;i++){
        Rstr =  s[i] + Rstr;
    }
    return Rstr;
}
console.log(ReverseStr('i love you'));//uoy evol i

function ReverseStr(s){
    let Rstr='';
    for(let i=0;i<s.length;i++){
        Rstr =  s[i] + Rstr;
    }
    return Rstr.split(' ').reverse().join(' ');
}
console.log(ReverseStr('i love you')) //i evol uoy