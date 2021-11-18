// ABABC => first recursive character A
var text="baba"

var w_count={}

for(let char of text){

    if(char in w_count){
        console.log(char);
        break;
    }
    else{
        w_count[char]=1
    }
}


