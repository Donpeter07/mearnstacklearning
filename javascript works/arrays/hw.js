var arr=[2,4,5,8]
var sum=0;
var low=0;
var upp=arr.length-1;
var total=6;
while(sum!=total){
    sum=arr[low]+arr[upp];
    if(sum>total)  
    {
        upp--;
    }
    if(sum<total)  
    {
        low++;
    }
}console.log(arr[low],arr[upp]);