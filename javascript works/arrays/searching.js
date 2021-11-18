var arr=[10,11,15]
var element=11;
flag=0;

for(let num of arr){
    if(num==element){
        flag=1;
        break;
        
    }
       
  }
  console.log(flag==0?"element not found":"element found");