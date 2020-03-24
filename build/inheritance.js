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
    constructor(name, age, phone_number) {
        super(name, age);
        this.read = true;
        this.write = true;
        this._username = '';
        this.getRole = () => {
            return {
                read: this.read,
                write: this.write
            };
        };
        this.phone_number = phone_number;
    }
    set username(value) {
        this._username = value;
    }
    get username() {
        return this._username;
    }
}
const admin = new Admin('Verryp', 22, '0821456489');
admin.setName('Bambang');
console.log(admin.getName());
console.log(admin.getRole());
console.log(admin);
admin.username = 'verryp';
console.log(admin.username);
