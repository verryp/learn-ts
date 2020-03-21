type addType  = (temp1: number, temp2: number) => number

const addFunction: addType = (temp1: number, temp2: number): number => {
    return temp1 + temp2
}

const result = addFunction(2,5)
console.log(result);
