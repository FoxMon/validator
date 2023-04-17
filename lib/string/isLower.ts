import { applyDecorator } from "../core";
import { CommonType, DecoratorType } from "../../src/types";
import { isString } from "../../src/utils";

const DECORATOR_NAME: string = "IS_LOWER";
const DECORATOR_APPLY_TYPE: string = "property";

/**
 * Check the string is lower case
 * @param {CommonType.CommonVariable} target
 * @returns {boolean}
 */
function _isLower<T extends CommonType.CommonVariable>(target: T): boolean {
  if (!isString(target)) return false;
  const assetedString: string = target as string;
  return assetedString.toLocaleLowerCase() === target;
}

/**
 * Regist isLower decorator
 * @param {DecoratorType.DecoratorOptions} decoratorOptions
 * @returns {Function}
 */
export function isLower(
  decoratorOptions?: DecoratorType.DecoratorOptions
): Function {
  // Regist isLower decorator
  return applyDecorator(
    {
      decoratorName: DECORATOR_NAME,
      applyType: DECORATOR_APPLY_TYPE,
      decoratorFunc: _isLower,
    },
    decoratorOptions
  );
}
