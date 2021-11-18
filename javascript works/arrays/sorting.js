var arr=[2,5,3,4]
sum=8;

// arr.sort((num1,num2)=>num2-num1);
arr.sort((num1,num2)=>num1-num2);
// arr.sort((num1,num2)=>num1,num2)
// console.log(arr);
var low=0;upper=arr.length-1;

while(low<upper){
    let cur_total=arr[low]+arr[upper]
    if(sum==cur_total){
        console.log(arr[low],arr[upper]);
        break
    }
    else if(cur_total<sum){
        low++;
    }
    else if(cur_total>sum){
        upper--;
    }
}
