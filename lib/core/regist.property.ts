import { DecoratorType } from "../../src/types";
import { assert } from "../../src/utils";

/**
 * Receive origin function using Closure
 * @param {DecoratorType.DecoratorFunction} originFunc
 * @returns {Function}
 */
export function registPropertyDecorator(
  originFunc: DecoratorType.DecoratorFunction
): Function {
  return function (target: Object, targetName: string) {
    let _value: unknown;
    /**
     * Define object property
     */
    Object.defineProperty(target, targetName, {
      get: function () {
        return _value;
      },
      set: function (value: unknown) {
        const isValid: boolean = originFunc(value);
        assert(isValid);
        _value = value;
      },
    });
  };
}
