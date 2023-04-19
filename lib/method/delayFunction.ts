import { applyDecorator } from "../core";
import { DecoratorType } from "../../src/types";
import { assert, isNumber } from "../../src/utils";

const DECORATOR_NAME: string = "DELAY_FUNCTION";
const DECORATOR_APPLY_TYPE: string = "method";

/**
 * Delay function for time
 * @param {number} time
 * @param {DecoratorType.DecoratorBuilder} func
 */
function _delayFunction(
  time: number = 0,
  func: DecoratorType.DecoratorBuilder
): void {
  assert(isNumber(time));
  setTimeout(() => {
    func();
  }, time);
}

/**
 * Regist delayFunction decorator
 * @param {DecoratorType.DecoratorOptions} decoratorOptions
 * @returns {Function}
 */
export function delayFunction(
  decoratorOptions?: DecoratorType.DecoratorOptions
): Function {
  // Regist delay function decorator
  return applyDecorator(
    {
      decoratorName: DECORATOR_NAME,
      applyType: DECORATOR_APPLY_TYPE,
      decoratorFunc: _delayFunction as DecoratorType.DecoratorMethodFunction,
    },
    decoratorOptions
  );
}
