var products=[
    [1000,"wheatpowder",45,15,0],
    [1001,"ricepowder",30,10,0],
    [1002,"goodday",45,50,0],
    [1003,"oreo",45,0,0],
    [1004,"fiftyfifty",20,20,5],
    [1005,"darkfantasy",50,0,0],

]
// pnt num of items in this shop

 
//  console.log(products.length);



// // prnt names of items available in this shop
// console.log(products.length);

// var names=products.filter(pdt=>pdt[3]>0).map(pdt=>pdt[1])
// console.log(names);

// prnt names of out of stock product

// var names=products.filter(pdt=>pdt[3]==0).map(pdt=>pdt[1])  //filter
// console.log(names);

// prnt names of product in 30-50 range
// var names=products.filter(pdt=>pdt[2]>=30 & pdt[2]<=50).map(pdt=>pdt[1])
// console.log(names);
// sort
products.sort((pdt1,pdt2)=>pdt2[3]-pdt1[3])
console.log(products);

// reduce
// var max=products.reduce((pdt1,pdt2)=>pdt1[3]>pdt2[3]?pdt1:pdt2) //reduce
// console.log(max);

// var min=products.reduce((pdt1,pdt2)=>pdt1[3]<pdt2[3]?pdt1:pdt2)
// console.log(min);

// some
// var under=products.some(p=>p[2]<20) //some (true /false)
// console.log(under);

// var under=products.some(p=>p[2]>20)
// console.log(under);

// find
// var fnd=products.find(pdt=>pdt[1]=="oreo")
// console.log(fnd);

// foreach
// products.forEach(pdt=>console.log(pdt[1]))