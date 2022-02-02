class ArrayOfNumbers {
  constructor(public collection: number[]) {}
  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}
  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}
  get(index: number): T {
    return this.collection[index];
  }
}

const arr = new ArrayOfAnything(["a", "b", "c"]); //generic type impherance
const arr2 = new ArrayOfAnything<string>(["a", "b", "c"]); //recommended

// Example of generics with functions

function printString(arr: string[]): void {
  arr.forEach((item: string): void => {
    console.log(item);
  });
}

function printNumbers(arr: number[]): void {
  arr.forEach((item: number): void => {
    console.log(item);
  });
}

function printAnything<T>(arr: T[]): void {
  arr.forEach((item: T): void => {
    console.log(item);
  });
}

printAnything(["a", "b", "c"]); //type generic impherance
printAnything<string>(["a", "b", "c"]); //recommended

// Generic Constraints

class Cars {
  print() {
    console.log("I am a car");
  }
}

class House {
  print() {
    console.log("I am a house");
  }
}

interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printHousesOrCars<House>([new House(), new House()]);
printHousesOrCars<Cars>([new Cars(), new Cars()]);
