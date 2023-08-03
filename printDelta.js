let a1=[1,2,3,4,5,6]
let a2=[3,4,5,6,7,8]
printDelta(a1,a2)
printDelta(a2,a1)

function printDelta(m1,m2){
    let a3=new Set()
    for(let i=0;i<m1.length;i++){
        let flag = new Boolean(false)
        for(let j=0;j<m2.length;j++){
            if(m1[i]==m2[j])
            {
                flag = true
            }
        }
        if(flag==false){
            a3.add(m1[i])
        }
    }    
    console.log(a3)    
}