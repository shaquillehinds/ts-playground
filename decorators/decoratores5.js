function decorFunc(decorators, prototype, property, desc) {
  var decorFuncArgsLength = arguments.length;
  var protoOrDesc;

  if (decorFuncArgsLength < 3) {
    protoOrDesc = prototype;
  } else if (desc === null) {
    desc = Object.getOwnPropertyDescriptor(prototype, property);
    protoOrDesc = desc;
  } else protoOrDesc = desc;

  var decorator;

  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
    protoOrDesc = Reflect.decorate(decorators, prototype, property, desc);
  } else {
    for (var i = decorators.length - 1; i >= 0; i--) {
      decorator = decorators[i];
      if (decorator) {
        if (decorFuncArgsLength < 3) {
          protoOrDesc = decorator(protoOrDesc);
        } else if (decorFuncArgsLength > 3) {
          protoOrDesc = decorator(prototype, property, protoOrDesc);
        } else {
          protoOrDesc = decorator(prototype, property) || protoOrDesc;
        }
      }
    }
  }

  if (decorFuncArgsLength > 3 && protoOrDesc) {
    Object.defineProperty(prototype, key, protoOrDesc);
  }

  return protoOrDesc;
}

var __decorate = (this && this.__decorate) || decorFunc;

var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };

var __param =
  (this && this.__param) ||
  function (paramIndex, decorator) {
    return function (target, key) {
      decorator(target, key, paramIndex);
    };
  };

var Boat = /** @class */ (function () {
  function Boat() {
    this.color = "red";
  }
  Object.defineProperty(Boat.prototype, "formattedColor", {
    get: function () {
      return "This boat's color is ".concat(this.color);
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(Boat.prototype, "changeColor", {
    set: function (color) {
      this.color = color;
    },
    enumerable: false,
    configurable: true,
  });
  Boat.prototype.pilot = function (speed, generateWake) {
    if (speed === "fast") {
      console.log("swish");
    } else {
      console.log("nothing");
    }
    throw new Error();
  };
  __decorate(
    [
      testDecorator,
      __metadata("design:type", String),
      __metadata("design:paramtypes", []),
    ],
    Boat.prototype,
    "formattedColor",
    null
  );
  Boat = __decorate([classDecorator], Boat);
  return Boat;
})();

function testDecorator(target, key, desc) {
  console.log("Target", target);
  console.log("Key", key);
}
function classDecorator(constructor) {
  console.log(constructor);
}
