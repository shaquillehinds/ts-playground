const __decoratorInit = Symbol("__decoratorInit");

class Person {
  @observeName
  firstName = "";
  @observeName
  lastName = "";
  fullName = "";
}

function observeName(target: any, property: string) {
  console.log(target);
  Object.defineProperty(target, property, {
    set: function (val: string) {
      console.log(property, val);
      console.log(target);
      if (property === "firstName")
        this.fullName = val + " " + (this.lastName || "");
      else this.fullName = (this.firstName || "") + " " + val;
    },
  });
}

const shaq = new Person();
shaq.firstName = "Shaquille";
shaq.lastName = "Hinds";
console.log(shaq.fullName);
