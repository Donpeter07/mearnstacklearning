// for(let row=1;row<=4;row++){
//     let str="";
//     for(let col=1;col<=7;col++){
//         if((row+col==5)||(row+col==7)||(row+col==9)|| (row==4 & col==7))  {
        
//             str=str+"*";
//         }
//         else{
//             str=str+" ";
//         }

//     }
//     console.log(str);

// }
for (let row=1;row<=4;row++){
    let str="";
    for (let space=1;space<=4-(row-1);space++){
        str=str+" ";  // OR str+=""; 
    }
        for(let col=1;col<=row;col++){
            str=str+"* ";
        }

    console.log(str);
}