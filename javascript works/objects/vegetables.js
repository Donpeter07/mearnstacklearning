 var stock_details=[
    {item_name:"tomatto",mrp:60,purchase_rate:40,aval_qty:50},
    {item_name:"onion",mrp:50,purchase_rate:30,aval_qty:60},
    {item_name:"brinjal",mrp:40,purchase_rate:25,aval_qty:10},
    {item_name:"carrot",mrp:80,purchase_rate:65,aval_qty:0},
    {item_name:"potatto",mrp:65,purchase_rate:45,aval_qty:0},
    {item_name:"chilly",mrp:40,purchase_rate:20,aval_qty:10},

]
// var stock={}

// print total number of available items
// console.log(stock_details.length);
var available_stock=stock_details.filter(product=>product.aval_qty>0).length
console.log(available_stock); 


// print out of stock item detail
// out_of_stock=stock_details.filter(data=>data.aval_qty==0)
// console.log(out_of_stock);
// stock_details.filter(product=>product.aval_qty==0).forEach(product=>console.log(product))


// print costly item detail
//  var costly_item=stock_details.reduce((d1,d2)=>d1.mrp>d2.mrp?d1:d2)
// console.log(costly_item);

// print low cost item detail
// low_cost=stock_details.reduce((d1,d2)=>d2.mrp>d1.mrp?d1:d2)
// console.log(low_cost);

// low_cost=stock_details.reduce((d1,d2)=>d1.mrp<d2.mrp?d1:d2)
// console.log(low_cost);

// // sort products bsed on avl_qty
// sorted=stock_details.sort((d1,d2)=>d1.aval_qty-d2.aval_qty)
// console.log(sorted);


// is ther any item below rs 25

//  below_25=stock_details.some(data=> data.mrp<25)
// console.log(below_25);

// print details of potatto
// details=stock_details.find(data=>data.item_name=="potatto")
// console.log(details);