import { DecoratorType } from "../../src/types";
import { assert, isString, isUndefined } from "../../src/utils";

/**
 * Regist method decorator
 * @returns {Function}
 */
export function registMethodDecorator(
  originFunc: DecoratorType.DecoratorMethodFunction,
  options?: DecoratorType.DecoratorOptions
): Function {
  return function (
    target: Object,
    targetName: string,
    descriptor: PropertyDescriptor
  ) {
    /**
     * The target must be defined
     */
    assert(!isUndefined(target));
    /**
     * The target name must be string
     */
    assert(isString(targetName));
    /**
     * The origin descriptor method is decorated function
     */
    const originDescriptorMethod: DecoratorType.DecoratorBuilder =
      descriptor.value;
    const value = (() => {
      if (options) {
        return options.value ? options.value : 0;
      }
      return 0;
    })();
    const orgFunc: DecoratorType.DecoratorMethodFunction = originFunc;
    descriptor.value = function () {
      orgFunc(value, originDescriptorMethod);
    };
    return descriptor;
  };
}
