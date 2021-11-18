var cowin={
    vaccine_name:"sputnik",
    available_dose:50000,
    effacacy_rate:85,
}

// for (let dose in cowin){
//     console.log(dose);
// }

if("supplied_dose" in cowin) {
 cowin["supplied_doses"]+=10000
}
else{
 cowin["supplied_doses"]=10000
}
console.log(cowin);

if("available_dose" in cowin){
    cowin["available_dose"]+=50
}
else{
    cowin["available_dose"]=100
}