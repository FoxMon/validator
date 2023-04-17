import { applyDecorator } from "../core";
import { CommonType, DecoratorType } from "../../src/types";
import { isString } from "../../src/utils";

const DECORATOR_NAME: string = "IS_UPPER";
const DECORATOR_APPLY_TYPE: string = "property";

/**
 * Check the string is upper case
 * @param {CommonType.CommonVariable} target
 * @returns {boolean}
 */
function _isUpper<T extends CommonType.CommonVariable>(target: T): boolean {
  if (!isString(target)) return false;
  const assetedString: string = target as string;
  return assetedString.toUpperCase() === target;
}

/**
 * Regist isUpper decorator
 * @param {DecoratorType.DecoratorOptions} decoratorOptions
 * @returns {Function}
 */
export function isUpper(
  decoratorOptions?: DecoratorType.DecoratorOptions
): Function {
  // Regist isUpper decorator
  return applyDecorator(
    {
      decoratorName: DECORATOR_NAME,
      applyType: DECORATOR_APPLY_TYPE,
      decoratorFunc: _isUpper,
    },
    decoratorOptions
  );
}
