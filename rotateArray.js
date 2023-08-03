let array=[1,2,3,4,5,6]
let positionshift=3
for(let i=1;i<=positionshift;i++){
    rotateArray()
}

for(ele of array){
    console.log(ele)
}

function rotateArray(){
let last = array[array.length-1]
for(let i=array.length-1;i>0;i--){
    array[i]=array[i-1]
}
array[0]=last
}