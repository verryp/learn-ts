export class Person {
    public name: string
    public age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

let person = new Person("Verryp", 22)
console.log(person);
