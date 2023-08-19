interface Canids {
    cute: boolean,
}

interface Doggo extends Canids {
    name: string,
    age: number,
    says(): string //string is return type of says() method
}