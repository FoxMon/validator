import { applyDecorator } from "../core";
import { CommonType, DecoratorType } from "../../src/types";
import { isArray } from "../../src/utils";

const DECORATOR_NAME: string = "IS_CONTAIN";
const DECORATOR_APPLY_TYPE: string = "property";

/**
 * Check target is contain value
 * @param {CommonType.CommonVariable[]} target
 * @param {CommonType.CommonVariable} value
 * @returns {boolean}
 */
function _isContain<T extends CommonType.CommonVariable>(
  target: T[],
  value: T
): boolean {
  if (!isArray(target)) return false;
  return target.some((t: T) => t === value);
}

/**
 * Regist isContain decorator
 * @param {DecoratorType.DecoratorOptions} decoratorOptions
 * @returns {Function}
 */
export function isContain(
  decoratorOptions?: DecoratorType.DecoratorOptions
): Function {
  return applyDecorator(
    {
      decoratorName: DECORATOR_NAME,
      applyType: DECORATOR_APPLY_TYPE,
      decoratorFunc: _isContain,
    },
    decoratorOptions
  );
}
