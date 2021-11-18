var employee={
    e_id:1000,
    ename:"subu", 
    salary:15000,
    desig:"developer",

}
// employee.salary=20000
// console.log(employee);
// console.log(employee.ename);
// console.log(employee.e_id);
// console.log(employee.salary);
// console.log(employee["desig"]);
// employee.salary +=10000;  //adding
// console.log(employee);

// for(let key in employee){
//     console.log(key);
// console.log(employee[key]);
// }

employee["experience"]= 5  //adding keyvalue
console.log(employee);

employee["address"]="kelanthara"
console.log(employee);