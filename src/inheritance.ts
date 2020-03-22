export class User {
    protected name: string;
    protected age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    setName = (value: string): void => {
        this.name = value;
    };

    getName = (): string => {
        return this.name;
    };
}

class Admin extends User {
    private read: boolean = true;
    private write: boolean = true;
    private phone_number: string;

    constructor(name: string, age: number, phone_number: string) {
        super(name, age);
        this.phone_number = phone_number;
    }

    getRole = (): {
        read: boolean;
        write: boolean;
    } => {
        return {
            read: this.read,
            write: this.write
        };
    };
}

const admin = new Admin('Verryp', 22, '0821456489');

admin.setName('Bambang');
console.log(admin.getName());
console.log(admin.getRole());

console.log(admin);
