var employees=[
    [1000,"ram","developer",25000,1990,2007],
    [1001,"ravi","developer",27000,2000,2003],
    [1002,"raju","developer",28000,199,2002],
    [1003,"nikil","mrkt",30000,1992,2005],

]
// var employees_names=employees.map(emp=>emp[1])
//     console.log(employees_names);
// prnt dev deatils only
// var developers=employees.filter(emp=>emp[2]=="developer")
// console.log(developers);

// salary abv 25000
// var salary=employees.filter(emp=>emp[3]>25000)
// console.log(salary);

//  employe experience abv 6 yrs
var experienced_emp=employees.filter(emp=>emp[5]-emp[4]>6)
console.log(experienced_emp);