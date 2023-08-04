const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);

  //approach 1
  fruits.forEach((value,key)=>{
    console.log(key)
    console.log(fruits.get(key))
  })

  //approach 2
  for(var x of fruits){
    console.log(x)
  }