export class User {
    protected name: string
    protected age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    setName = (value: string): void => {
        this.name = value
    }

    getName = (): string => {
        return this.name
    }
}

class Admin extends User {
    read: boolean = true
    write: boolean = true

    getRole = (): {
        read: boolean,
        write: boolean
    } => {
        return {
            read: this.read,
            write: this.write
        }
    }
}

const admin = new Admin("Verryp", 22)

admin.setName("Bambang")
console.log(admin.getName());
console.log(admin.getRole());
