import { CommonType, DecoratorType } from "../../src/types";
import { isString as isStringCheck } from "../../src/utils";
import { applyDecorator } from "../core";

const DECORATOR_NAME: string = "IS_NUMBER";
const DECORATOR_APPLY_TYPE: string = "property";

/**
 * Check target is string
 * @param {CommonType.CommonVariable} target
 * @returns {boolean}
 */
function _isString<T extends CommonType.CommonVariable>(target: T): boolean {
  if (isStringCheck(target)) {
    return true;
  }
  return false;
}

/**
 * Regist isString decorator
 * @param {DecoratorType.DecoratorOptions} decoratorOptions
 * @returns {Function}
 */
export function isString(
  decoratorOptions?: DecoratorType.DecoratorOptions
): Function {
  // Regist is string decorator
  return applyDecorator(
    {
      decoratorName: DECORATOR_NAME,
      applyType: DECORATOR_APPLY_TYPE,
      decoratorFunc: _isString,
    },
    decoratorOptions
  );
}
