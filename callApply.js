const person = {
    firstName: 'Rahim',
    lastName : 'Uddin',
    salary : 15000,
    getFullName : function(){
        const fullName = this.firstName +' ' + this.lastName;
        return fullName;
    },
    chargeBill : function(amount,tip,tax){
        this.salary = this.salary - amount - tip - tax;
        return this.salary;
    }
}

const anotherPerson = {
    firstName: 'Another',
    lastName : 'Person',
    salary : 25000,
}

// console.log(person.getFullName());
// person.chargeBill(500);
// console.log(person.salary);
// const anotherBill = person.chargeBill.bind(anotherPerson);
// anotherBill(3000);
// anotherBill(2000);
// console.log(anotherPerson.salary);
// const callBill = person.chargeBill.call(anotherPerson,3000);
// console.log(anotherPerson.salary);

const applyBill = person.chargeBill.apply(anotherPerson,[3000,300,30]);
console.log(anotherPerson.salary);