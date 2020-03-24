"use strict";
class Asus {
    constructor(name, isGaming) {
        this.name = name;
        this.isGaming = isGaming;
    }
    on() {
        console.log('Laptop Asus menyala');
    }
    off() {
        console.log('Laptop Asus dimatikan');
    }
}
class MacBook {
    constructor(name, isDesign) {
        this.name = name;
        this.isDesign = isDesign;
    }
    on() {
        console.log('Laptop MacBook menyala');
    }
    off() {
        console.log('Laptop MacBook dimatikan');
    }
}
let asus = new Asus('ROG', true);
let macbook = new MacBook('MBP 2015', true);
asus.on();
macbook.off();
