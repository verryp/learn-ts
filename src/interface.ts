interface Laptop {
    name: string
    on(): void
    off(): void 
}

class Asus implements Laptop {
    name: string 
    isGaming: boolean

    constructor(name: string, isGaming: boolean) {
        this.name = name
        this.isGaming = isGaming
    }
    
    on(): void {
        console.log('Laptop Asus menyala');
    }

    off(): void {
        console.log('Laptop Asus dimatikan');
    }
}

class MacBook implements Laptop {
    name: string
    isDesign: boolean

    constructor(name: string, isDesign: boolean) {
        this.name = name
        this.isDesign = isDesign
    }
    
    on(): void {
        console.log('Laptop MacBook menyala');
    }

    off(): void {
        console.log('Laptop MacBook dimatikan');
    }
}

let asus = new Asus('ROG', true)
let macbook = new MacBook('MBP 2015', true)
asus.on()
macbook.off()