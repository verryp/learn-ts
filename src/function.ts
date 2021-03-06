
function getFullName(): string {
    return "Verryanto Paulus"
}

console.log("My name is", getFullName());

function getAge(): number {
    return 23
}

console.log("I'm", getAge(), "years old");

function getProfession(): void {
    console.log("I'm Web Developer");
}

getProfession()

// ! default parameter
const adding = (temp1: number, temp2: number): number => temp1 + temp2
console.log(adding(1,4));

// ! option parameter
const decided = (temp1: number, temp2?: number): number => temp1 / temp2
console.log(decided(4,2));
