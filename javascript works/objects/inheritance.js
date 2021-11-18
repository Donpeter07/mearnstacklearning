// class parent{
//     bike(){
//         console.log("splendor");
//     }
// }

// class child extends parent{ //child inherts the properties of parent

// }
// var obj=new child()
// obj.bike()

// child.__proto__=parent   //prototype approach

var parent={
    bike_name:"passionpro",
    bike(){
        console.log(this.bike_name);
    }
}

var child={
    name:"ram",
    age:25,
    getdetails(){
        console.log(this.name,this.age);
    }
}

child.__proto__=parent
child.bike()
child.getdetails()