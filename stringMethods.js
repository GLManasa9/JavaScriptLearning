let str = 'manasa'
let length = str.length
console.log(length)
console.log('------------------------')

let fruits = "apple, banana, kiwi"
let part = fruits.slice(7,13)
console.log(part)
//substr example
console.log("slice from 7 and length 8:",fruits.substring(7,14))
console.log('------------------------')
//replace
console.log("replace banana with mango:",fruits.replace('banana','mango'))

let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace(/Microsoft/g, "W3Schools");
console.log(newText)
console.log('------------------------')

let text1 = "Hello World!";
console.log(text1.toUpperCase())
console.log('------------------------')

text1='  hello world    '
console.log(text1.trim())
console.log(text1.trimStart())
console.log(text1.trimEnd())
console.log('------------------------')
console.log(text1.charAt(10))
console.log('------------------------')
console.log(text1[10])
console.log('------------------------')
text1 = "Hello World!";
const charArray = text1.split("")
console.log(charArray)