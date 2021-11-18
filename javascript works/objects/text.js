var text="hello hai hello hai hello"

var wc_box={}

var words=text.split(" ")

for(let word of words){
    if(word in  wc_box){
        wc_box[word]+=1

    }
    else{
        wc_box[word]=1
    }
}
console.log(wc_box);