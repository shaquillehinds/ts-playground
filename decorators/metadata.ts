import "reflect-metadata";
// Mock
// const Reflect: any = {};

@printMetadata
class Plane {
  color: string = "white";

  @markFunction("hello world")
  fly(): void {
    console.log("vrrrrrr");
  }
}

function markFunction(secret: string) {
  return function (target: any, key: string): void {
    Reflect.defineMetadata("secret", secret, target, key);
  };
}

function printMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata("secret", target.prototype, key);
    console.log(secret);
  }
}

const plane = {
  color: "white",
};

Reflect.defineMetadata("note", "hi color", plane, "color");
const note = Reflect.getMetadata("note", plane, "color");
console.log(note);

// Reflect.defineMetadata("note", "hi there", plane);
// Reflect.defineMetadata("height", 10, plane);

// console.log(plane);
// const note = Reflect.getMetadata("note", plane);
// const height = Reflect.getMetadata("height", plane);

// console.log(note);
// console.log(height);
