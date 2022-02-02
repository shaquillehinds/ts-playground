@classDecorator
class Boat {
  @testDecorator
  color: string = "red";

  @testDecorator
  get formattedColor(): string {
    return `This boat's color is ${this.color}`;
  }

  @methodDescriptor
  @logError("oops there was an error")
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator generateWake: boolean
  ): void {
    if (speed === "fast") {
      console.log("swish");
    } else {
      console.log("nothing");
    }
    throw new Error();
    console.log("swish");
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

function testDecorator(target: any, key: string) {
  console.log("Target", target);
  console.log("Key", key);
}

function logError(error: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;
    console.log("error");
    desc.value = function () {
      try {
        method();
      } catch (error) {
        console.log(error);
      }
    };
    // console.log("Target: ", target);
    // console.log("Key: ", key);
  };
}

function methodDescriptor(target: any, key: string, desc: PropertyDescriptor) {
  console.log(desc);
}
