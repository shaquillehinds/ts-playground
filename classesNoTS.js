class Vehicle2 {
  drive() {
    console.log("chugga chugga");
  }
  honk() {
    console.log("beep beep");
  }
}

class Car2 extends Vehicle2 {
  drive() {
    console.log("vroom vroom");
  }
}

const car2 = new Car2();
car2.honk();
car2.drive();
