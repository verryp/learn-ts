"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
exports.Person = Person;
let person = new Person("Verryp", 22);
console.log(person);
