interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

// unnecessary since type is defined with object declaration
const oldCivic: Vehicle = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const printVehicle = ({ summary }: Vehicle): void => {
  console.log(summary());
};

printVehicle(oldCivic);

// Refactored to be more generic & code reuse with interfaces

interface Reportable {
  summary(): string;
}

const oldCivic2 = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drink2 = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of suger`;
  },
};

const printSummary = ({ summary }: Reportable): void => {
  console.log(summary());
};

printSummary(oldCivic2);
printSummary(drink2);
