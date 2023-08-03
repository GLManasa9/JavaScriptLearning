class Person{
    constructor(fname,lname){
        this.fname=fname
        this.lname=lname
    }
}

class Car{
    constructor(kms){
        this.kms = kms
    }
}

const Roland = new Person("Ronald", "Deschain");
const Susan = new Person("Susan", "Delgado");
const Eddie = new Person("Eddie", "Dean");
const Detta = new Person("Detta", "Walker");
const Jake = new Person("Jake", "Chambers");
const tatacar = new Car(18)

console.log(Roland.fname)
console.log(Roland.lname)
console.log(tatacar.kms)