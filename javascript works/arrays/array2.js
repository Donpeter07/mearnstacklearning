var arr=[3,5,2,6,7,8]
num=[]
// var lesser=arr[0]
// var greater=arr[0]
// var equal=arr[0]
// var res=[]

// for(let num of arr){

//     if(num<5){
//         lesser=num-1
//         res.push(lesser)
//     }
//     else if(num>5){
//         greater=num+1
//         res.push(greater)
//     }
//     else{
//         num
//     }
// }console.log(res);
    
for(let amount of arr){
    if(amount<5){
        num.push(amount-1)
    }
    else if(amount>5){
        num.push(amount+1)
    }
    else{
        num.push(amount)
    }
}
// console.log(num);
console.log(num>5?num+1:num<5?num-1:num);


        
    

