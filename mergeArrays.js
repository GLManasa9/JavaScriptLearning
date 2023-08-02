const a=[3,5,9,10]
const b=[11,2,4,90,7,6]
let length = a.length+b.length
//approach 1
const mergeresult = [].concat(a,b)
//approach 2
const all = [...a,...b]
//approach 3
a.push(...b)
console.log('------------------------')

//print output
console.log(mergeresult)
console.log(a)
console.log(all)
console.log('------------------------')

//sort array in ascending order
mergeresult.sort((a,b)=>{
    return a-b
})
console.log(mergeresult)

//sort array in descending order
mergeresult.sort((a,b)=>{
    return b-a
})

console.log(mergeresult)