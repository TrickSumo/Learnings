enum OperationType {
    ADD, SUB, DIV, MUL
}

const calculator = (num1: number, num2: number, operation: OperationType): number => {
    console.log(operation); // it is index of elemnt in enum list
    switch (operation) {
        case 0: return num1 + num2;
        case 1: return num1 - num2;
        case 2: return num1 / num2;
        case 3: return num1 * num2;
    }
}

console.log(calculator(2, 3, OperationType.ADD));
