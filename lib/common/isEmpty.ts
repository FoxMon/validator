import { applyDecorator } from "../core";
import { isNull, isUndefined } from "../../src/utils";
import { CommonType, DecoratorType } from "../../src/types";

const DECORATOR_NAME: string = "IS_EMPTY";
const DECORATOR_APPLY_TYPE: string = "property";

/**
 * Check target is empty
 * @param {CommonType.CommonVariable} target
 * @returns {boolean}
 */
function _isEmpty<T extends CommonType.CommonVariable>(target: T): boolean {
  if (target === "" || isNull(target) || isUndefined(target)) {
    return false;
  }
  return true;
}

/**
 * Regist isEmpty decorator
 * @param {DecoratorType.DecoratorOptions} decoratorOptions
 */
export function isEmpty(
  decoratorOptions?: DecoratorType.DecoratorOptions
): Function {
  // Regist decorator
  return applyDecorator(
    {
      decoratorName: DECORATOR_NAME,
      applyType: DECORATOR_APPLY_TYPE,
      decoratorFunc: _isEmpty,
    },
    decoratorOptions
  );
}
