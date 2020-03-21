"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(name, age) {
        this.setName = (value) => {
            this.name = value;
        };
        this.getName = () => {
            return this.name;
        };
        this.name = name;
        this.age = age;
    }
}
exports.User = User;
class Admin extends User {
    constructor() {
        super(...arguments);
        this.read = true;
        this.write = true;
        this.getRole = () => {
            return {
                read: this.read,
                write: this.write
            };
        };
    }
}
const admin = new Admin("Verryp", 22);
admin.setName("Bambang");
console.log(admin.getName());
console.log(admin.getRole());
