import { DecoratorType } from "../../src/types";
import { assert } from "../../src/utils";

/**
 * Receive origin function using Closure
 * @param {DecoratorType.DecoratorFunction} originFunc
 * @returns {Function}
 */
export function registPropertyDecorator(
  originFunc: DecoratorType.DecoratorFunction,
  options?: DecoratorType.DecoratorOptions
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
        const isValid: boolean = (() => {
          /**
           * The value of options are the value received
           * from the parameter of the decorator.
           */
          if (options) {
            return options.value
              ? originFunc(value, options.value)
              : originFunc(value);
          } else {
            return originFunc(value);
          }
        })();
        assert(isValid);
        _value = value;
      },
    });
  };
}
