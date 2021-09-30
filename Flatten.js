//Flatten nested array to single array

let nestedArr=['1',[3,'D'],'Hello',['a',4],3]
//flat method return a single array with only single level nested array
console.log(nestedArr.flat());//[ '1', 3, 'D', 'Hello', 'a', 4, 3 ]

// More nested array to single array

let nestedArray=['1',[3,'D',['2','level',['array']]],'Hello',['a',4],3]
//flat(infinity) flatten all level of nested array to single array
console.log(nestedArray.flat(Infinity));//['1',3, 'D','2','level','array','Hello', 'a', 4,3 ]

let newArr=[1, [2], [3, [[4]]],[5,6]]
console.log(newArr.flat(Infinity));//[ 1, 2, 3, 4, 5, 6 ]