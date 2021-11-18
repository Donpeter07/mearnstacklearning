//create a class bank



class bank{
    createAccount(ac_no,ac_type,balance,p_name){
        this.account_number=ac_no
        this.account_type=ac_type
        this.balance=balance
        this.person_name=p_name
    }
    deposite(amount){
        this.balance+=amount
        console.log("ur acc ",this.account_number,"has been created with amount",amount,"available balance",this.balance);

    }
    withdrawal(amount){
        if(amount>this.balance){

        console.log("insufficient balance");
        }
        else{
            this.balance-=amount
            console.log("ur acc ",this.account_number,"has been debited with amoubt",amount,"available balance",this.balance);

        }
    }
    balanceEnquiry(){
        console.log("available baln",this.balance);
    }


}

var obj=new bank()
obj.createAccount(1000,"savings",10000,"vivek")
obj.deposite(5000)
obj.withdrawal(1000)
obj.balanceEnquiry()

var obj1=new bank()
obj1.createAccount(10001,"current",5000,"don")
obj1.deposite(100)
obj1.withdrawal(6000)
obj1.balanceEnquiry()


// constructor-intialise instance variables
// no need for seperate call