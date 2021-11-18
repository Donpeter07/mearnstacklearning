var employees=[
    [1000,"subu","developer",25000],
    [1001,"sheffy","testing",27000],
    [1002,"kolesh","developer",45000],
    [1003,"bose","sales",22000],
    [1004,"don","developer",35000],

]
// print salaries
// -----------------

// for(let emp of employees){
//     console.log(emp[3]);
// }

// names of employees
// ------------------

// for(let emp of employees)
// {
//     console.log(emp[1]);
// }

//  salary greater than 27k
// ----------------------------

// for(let emp of employees){
//     if(emp[3]>27000){
//         console.log(emp[1]);
//     }
// }
// print names of developer
// -----------------------

for(let emp of employees){
    if(emp[2]=="developer"){
        console.log(emp[1]);
    }
}