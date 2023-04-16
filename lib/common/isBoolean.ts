import { CommonType, DecoratorType } from "../../src/types";
import { isBoolean as isBooleanCheck } from "../../src/utils";
import { applyDecorator } from "../core";

const DECORATOR_NAME: string = "IS_BOOLEAN";
const DECORATOR_APPLY_TYPE: string = "property";

/**
 * Check target is boolean
 * @param {CommonType.CommonVariable} target
 * @returns {boolean}
 */
function _isBoolean<T extends CommonType.CommonVariable>(target: T): boolean {
  if (!isBooleanCheck(target)) return false;
  return true;
}

/**
 * Regist isBoolean decorator
 * @param {DecoratorType.DecoratorOptions} decoratorOptions
 * @returns {Function}
 */
export function isBoolean(
  decoratorOptions?: DecoratorType.DecoratorOptions
): Function {
  // Regist is boolean decorator
  return applyDecorator(
    {
      decoratorName: DECORATOR_NAME,
      applyType: DECORATOR_APPLY_TYPE,
      decoratorFunc: _isBoolean,
    },
    decoratorOptions
  );
}
