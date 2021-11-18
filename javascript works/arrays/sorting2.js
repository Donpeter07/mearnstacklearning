 var arr1=[12,10,20,35],arr2=[15,20,30,22]
 var p1=0,p2=0;

 arr1.sort((num1,num2)=>num1-num2)
 arr2.sort((num1,num2)=>num1-num2)
 
 while((p1<arr1.length)&&(p2<arr2.length)){
     if(arr1[p1]==arr2[p2]){
         console.log(arr1[p1]);
         p1++;p2++;
     }
     else if(arr1[p1]<arr2[p2]){
         p1++;
        }
        else if(arr1[p1]>arr2[p2]){
            p2++;
        }
 }