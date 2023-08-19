type addData = { num1: number, num2: number }


const adder3 = (numbersToAdd: addData): number => {
    return numbersToAdd.num1 + numbersToAdd.num2;
}

console.log(adder3({ num1: 3, num2: 6 }));


// type are useful for unions and intersections

interface Flower {
    petals: number
}
interface Branch {
    strong: boolean
}
type Plant = Flower & Branch

const flowers = (plant: Plant) => {
    console.log(plant);

}

flowers({ petals: 3, strong: true })
