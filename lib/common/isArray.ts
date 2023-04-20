import { CommonType, DecoratorType } from "../../src/types";
import { isArray as isArrayCheck } from "../../src/utils";
import { applyDecorator } from "../core";

const DECORATOR_NAME: string = "IS_ARRAY";
const DECORATOR_APPLY_TYPE: string = "property";

/**
 * Check target is array
 * @param {CommonType.CommonVariable} target
 * @returns {boolean}
 */
function _isArray<T extends CommonType.CommonVariable>(target: T[]): boolean {
  if (!isArrayCheck(target)) return false;
  return true;
}

/**
 * Regist isArray decorator
 * @param {DecoratorType.DecoratorOptions} decoratorOptions
 * @returns {Function}
 */
export function isArray(
  decoratorOptions?: DecoratorType.DecoratorOptions
): Function {
  // Regist is array decorator
  return applyDecorator(
    {
      decoratorName: DECORATOR_NAME,
      applyType: DECORATOR_APPLY_TYPE,
      decoratorFunc: _isArray,
    },
    decoratorOptions
  );
}
