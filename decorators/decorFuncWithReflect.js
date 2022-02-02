export default function decorFunc(decorators, prototype, property, desc) {
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
