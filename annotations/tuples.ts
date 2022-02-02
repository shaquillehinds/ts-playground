const drink = {
  color: "brown",
  carbonated: true,
  suger: 40,
};

const pepsi: [string, boolean, number] = ["brown", true, 40];

// using type alias
type Drink = [string, boolean, number];
const coke: Drink = ["brown", true, 40];
const sprite: Drink = ["clear", true, 40];
const tea: Drink = ["green", false, 0];

const carSpecs: [number, number] = [400, 3354];

const carStates = {
  horsepower: 400,
  weight: 3354,
};
