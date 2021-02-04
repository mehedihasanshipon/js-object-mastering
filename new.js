class Person {
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const newPerson = new Person('Mehedi' ,'Hasan', 15000);
console.log(newPerson);