interface data { num1: number, num2: number }

const adder2 = (numbersToAdd: data): number => {
    return numbersToAdd.num1 + numbersToAdd.num2;
}

console.log(adder2({ num1: 3, num2: 6 }));
