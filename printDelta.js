var a1=[1,2,3,4,5,6]
var a2=[3,4,5,6,7,8]
printDelta(a1,a2)
printDelta2(a2,a1)

//approach 1
function printDelta(m1,m2){
    var a3=new Set()
    for(var i of m1){
        var flag = false
        for(var j of m2){
            if(i==j)
            {
                flag = true
            }
        }
        if(flag==false){
            a3.add(i)
        }
    }    
    console.log(a3)
}

//approach 2
function printDelta2(m1,m2){
    var m3=new Set()
    m1.forEach((element1,index) => {
       var flag = false
       m2.forEach(element2=>{
        if(element1==element2)
            flag=true
       })
       if(flag==false){
        m3.add(element1) 
        console.log("index:"+index)
       }
    });
    console.log(m3)
}