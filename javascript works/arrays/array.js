//no length limit
var expenses=[20000,21000,19000,22000,26000]
var max_exp=0;
sum=0;

// for (let i=0;i<expenses.length;i++){
//     console.log(expenses[i]);
// }

//simpler way
// for( let amount of expenses){
//     console.log(amount);
// }

//amount greater than 20k

// for(let amount of expenses){
//     if(amount>20000){ 
//         console.log(amount);   
  
//     }
// }


// for(let amount of expenses){
//     sum=sum+amount; //sum+=amount    
// }
// console.log(sum);


// for(let amount of expenses){
//     if(amount>max_exp){
//         max_exp=amount;
//     }
// }
// console.log(max_exp);

var min=expenses[0];
for(let  amount of expenses){
    if(amount<min){
        min=amount;
    }
}
console.log(min);


//var arr=[1,2,3,4,5,6,8,9]
// odd[1,3,5,9]
// even[2,4,6,8]