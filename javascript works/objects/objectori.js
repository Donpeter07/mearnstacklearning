class student{
    constructor(roll,name,course,total){
        this.roll=roll;
        this.name=name;
        this.course=course
        this.total=total
        // student properties
    }
    printStudent(){
        console.log(this.roll,this.name,this.course,this.total);
    }
}

// constructor-intialise instance variables
// no need for seperate call

var obj=new student(1001,"vivek","ms",120)
// obj.setStudent(1001,"vivek","ms",500)
obj.printStudent()
// var obj1=new student()

var obj1=new student(1002,"subu","python",130)
obj1.printStudent()
