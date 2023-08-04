var i=5
if(i=="5"){//check only value
    console.log("equal 2")
}
if(i==="5"){//check dataype and value both
    console.log("equal 3")
}
let m1="5"
let m2=m1
let m3=5
if(m1==m3){
    console.log("same value")
}
if(m1===m3){
    console.log("same value but different data type")
}