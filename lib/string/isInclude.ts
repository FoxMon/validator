import { CommonType, DecoratorType } from "../../src/types";
import { isString } from "../../src/utils";
import { assert } from "../../src/utils";
import { applyDecorator } from "../core";

const DECORATOR_NAME: string = "IS_INCLUDE";
const DECORATOR_APPLY_TYPE: string = "property";

/**
 * Check the string includes value
 * @param {CommonType.CommonVariable} target
 * @param {string} value
 * @returns {boolean}
 */
function _isInclude<T extends CommonType.CommonVariable>(
  target: T,
  value: string
): boolean {
  if (!isString(target)) return false;
  /**
   * The value must be string
   */
  assert(isString(value));
  const assertedString: string = target as string;
  return assertedString.includes(value);
}

/**
 * Regist isInclude decorator
 * @param {DecoratorType.DecoratorOptions} decoratorOptions
 * @returns {Function}
 */
export function isInclude(
  decoratorOptions?: DecoratorType.DecoratorOptions
): Function {
  // Regist is include decorator
  return applyDecorator(
    {
      decoratorName: DECORATOR_NAME,
      applyType: DECORATOR_APPLY_TYPE,
      decoratorFunc: _isInclude,
    },
    decoratorOptions
  );
}
