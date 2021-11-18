var arr=[10,11,12,13,14,15]
 var element=14
var lower=0;
var upper=arr.length-1;
 var flag=0;

 while(lower<=upper){
     let mid=Math.floor((lower+upper)/2)
     if(element<arr[mid]){
         upper=mid-1;
     }
     else if(element>arr[mid]){
         lower=mid+1;
     }
     else if(element==arr[mid]){
         flag=1;
         break;
     }
 }
 console.log(flag==0?"element not found":"element found");