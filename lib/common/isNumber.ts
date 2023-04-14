import { CommonType, DecoratorType } from "../../src/types";
import { isNumber as isNumberCheck } from "../../src/utils";
import { applyDecorator } from "../core";

const DECORATOR_NAME: string = "IS_NUMBER";
const DECORATOR_APPLY_TYPE: string = "property";

/**
 * Check target is number
 * @param {CommonType.CommonVariable} target
 * @returns {boolean}
 */
function _isNumber<T extends CommonType.CommonVariable>(target: T): boolean {
  if (isNumberCheck(target)) {
    return true;
  }
  return false;
}

/**
 * Regist isNumber decorator
 * @param {DecoratorType.DecoratorOptions} decoratorOptions
 * @returns {Function}
 */
export function isNumber(
  decoratorOptions?: DecoratorType.DecoratorOptions
): Function {
  // Regist is number decorator
  return applyDecorator(
    {
      decoratorName: DECORATOR_NAME,
      applyType: DECORATOR_APPLY_TYPE,
      decoratorFunc: _isNumber,
    },
    decoratorOptions
  );
}
