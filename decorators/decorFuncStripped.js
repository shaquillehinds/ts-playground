export default function decorFunc(
  decorators,
  protoOrConFunc,
  property,
  argDesc
) {
  var decorFuncArgsLength = arguments.length;
  var descOrConFun;

  if (decorFuncArgsLength < 3) {
    descOrConFun = protoOrConFunc;
  } else if (argDesc === null) {
    descOrConFun = Object.getOwnPropertyDescriptor(protoOrConFunc, property);
  } else descOrConFun = argDesc;

  var decorator;

  for (var i = decorators.length - 1; i >= 0; i--) {
    decorator = decorators[i];
    if (decorator) {
      if (decorFuncArgsLength < 3) {
        descOrConFun = decorator(protoOrConFunc) || descOrConFun;
      } else if (decorFuncArgsLength > 3) {
        descOrConFun =
          decorator(protoOrConFunc, property, descOrConFun) || descOrConFun;
      } else {
        descOrConFun = decorator(protoOrConFunc, property) || descOrConFun;
      }
    }
  }

  if (decorFuncArgsLength > 3 && descOrConFun) {
    Object.defineProperty(protoOrConFunc, property, descOrConFun);
  }

  return descOrConFun;
}
