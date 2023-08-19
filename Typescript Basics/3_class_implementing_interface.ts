interface Dog {
    name: string,
    age: number,
    says(): string //string is return type of says() method
}

// All variables and methods declared in interface muct be decleared in class
// However class can have its own variables&methods which are not part of interface

class Pomerian implements Dog {
    name: string
    age: number
    category: "small dogs"

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    says() {
        return "who who who"
    }

    sayaWhenAngry() {
        return "haw how how"
    }

}

const myDoggo = new Pomerian("Jack", 3)

console.log(myDoggo.says, myDoggo.sayaWhenAngry);
