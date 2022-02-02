const carMakers = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [["f150"], ["corolla"], ["camaro"]];

// Help with inference when extracting values

const car = carMakers[1];
const myCar = carMakers.pop();

// prevent incompatible values
carMakers.push(3);

// Help with 'map' or any other higher order array methods
carMakers.map((car: string): string => {
  return car;
});

// Flexible types
const importantDates: (string | Date)[] = [];
importantDates.push("2030-10-10");
importantDates.push(new Date());
