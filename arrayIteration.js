const number1 = [45,4,9,16,25]
const number2 = number1.map(myfunction)
const number3 = number1.map(simplefunction)

function myfunction(value,index,array){
    return value/2
}

function simplefunction(value){
    return value*3
}

console.log(number2)
console.log('------------------------')
console.log(number3)
console.log('------------------------')


//flat map concept
const myArr = [1,3,5,6]
const newArr = myArr.flatMap((x)=>x*2)
console.log(newArr)
console.log('------------------------')

//array filter
const filterArr = myArr.filter(filterFunction)

function filterFunction(value){
    return value>3
}

console.log(filterArr)
console.log('------------------------')

//reduce function
const numbers = [45,4,9,16,40]
let sum1 = numbers.reduce(sumFunction1)
let sum2 = numbers.reduce(sumFunction2,106)

function sumFunction1(total,value){
    return total+value
}

function sumFunction2(total,value){
    return total+value
}

console.log(sum1)
console.log('------------------------')
console.log(sum2)
console.log('------------------------')

let sumRight = numbers.reduceRight(sumFunction1)
console.log(sumRight)
console.log('------------------------')

const number4 = [19,21,24,87,45]
let allOver18 = number4.every(everyFunction)

function everyFunction(value){
    return value>18
}

console.log(allOver18)
console.log('------------------------')

const numbers5 = [4,1,9,5,2]
let someOver18 = numbers5.some(everyFunction)
console.log(someOver18)
console.log('------------------------')

const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.lastIndexOf("Apple") + 1;
console.log(position)
console.log('------------------------')

let first = numbers.find(everyFunction)
console.log(first)
console.log('------------------------')