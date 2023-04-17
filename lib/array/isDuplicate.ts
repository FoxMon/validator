import { applyDecorator } from "../core";
import { CommonType, DecoratorType } from "../../src/types";
import { isArray } from "../../src/utils";

const DECORATOR_NAME: string = "IS_DUPLICATE";
const DECORATOR_APPLY_TYPE: string = "property";

/**
 * Check target is duplicate
 * @param target
 * @return {boolean}
 */
function _isDuplicate<T extends CommonType.CommonVariable>(
  target: T[]
): boolean {
  if (!isArray(target)) return false;
  const assertedArray: T[] = target as T[];
  const removedArray: T[] = assertedArray.filter(
    (t: T, idx: number) => assertedArray.indexOf(t) === idx
  );
  return removedArray.length === assertedArray.length ? false : true;
}

/**
 * Check isDuplicate decorator
 * @param {DecoratorType.DecoratorOptions} decoratorOptions
 * @returns {Function}
 */
export function isDuplicate(
  decoratorOptions?: DecoratorType.DecoratorOptions
): Function {
  // Regist is duplicate decorator
  return applyDecorator(
    {
      decoratorName: DECORATOR_NAME,
      applyType: DECORATOR_APPLY_TYPE,
      decoratorFunc: _isDuplicate,
    },
    decoratorOptions
  );
}
