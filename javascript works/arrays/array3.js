// var arr=[2,3,4]
// var sum=0;
// var res=[];
// var number


// for(let number in arr){
//     sum=sum+arr[number]  

// }

//   for(let number in arr){
//   res.push(sum-arr[number]) 

// }
// console.log(res);

var arr=[2,3,4]
var sum=0;
var res=[]

for(let num of arr){
  sum+=num;
}

for(let num of arr){
  res.push((sum-num))
}
console.log(res);