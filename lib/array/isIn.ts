import { CommonType, DecoratorType } from "../../src/types";
import { isArray } from "../../src/utils";
import { applyDecorator } from "../core";

const DECORATOR_NAME: string = "IS_IN";
const DECORATOR_APPLY_TYPE: string = "property";

/**
 * Check target is include value
 * @param {CommonType.CommonVariable[]} target
 * @param {CommonType.CommonVariable} value
 * @returns {boolean}
 */
function _isIn<T extends CommonType.CommonVariable>(
  target: T[],
  value: T
): boolean {
  if (!isArray(target)) return false;
  const assertedArray: T[] = target as T[];
  const found: T | undefined = assertedArray.find((e: T) => e === value);
  if (!found) return false;
  return true;
}

/**
 * Check isIn decorator
 * @param {DecoratorType.DecoratorOptions} decoratorOptions
 * @returns {Function}
 */
export function isIn(
  decoratorOptions?: DecoratorType.DecoratorOptions
): Function {
  // Regist is in decorator
  return applyDecorator(
    {
      decoratorName: DECORATOR_NAME,
      applyType: DECORATOR_APPLY_TYPE,
      decoratorFunc: _isIn,
    },
    decoratorOptions
  );
}
