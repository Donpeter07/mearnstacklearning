var num1=60,num2=72;
var hcf=1;
for(let i=1;i<=num2;i++){


    if((num1%i==0)&&(num2%i==0)){

        hcf=i;
    }
}
console.log(hcf);