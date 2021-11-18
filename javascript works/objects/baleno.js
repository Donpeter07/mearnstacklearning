var splentor={
    bike_name:"cd_dawn",
    manufacturer:"hero",
    tyres:2,
    price:"1lakh",
}

var susuki={
    bike_name:"max_100",
    manufacturer:"yamaha",
    
}

susuki.__proto__=splentor
console.log(susuki.manufacturer);
console.log(susuki.tyres);
console.log(susuki.price);
console.log(susuki.bike_name);