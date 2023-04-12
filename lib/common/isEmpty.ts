import { CommonType, DecoratorType } from "../../src/types";
import { registDecorator } from "../core";

const DECORATOR_NAME: string = "IS_EMPTY";

/**
 * Check target is empty
 * @param {CommonType.CommonVariable} target
 * @returns {boolean}
 */
function _isEmpty<T extends CommonType.CommonVariable>(target: T): boolean {
  return target === "" || target === null || target === undefined;
}

/**
 * Regist isEmpty decorator
 * @param {DecoratorType.DecoratorOptions} decoratorOptions
 */
export function isEmpty(decoratorOptions?: DecoratorType.DecoratorOptions) {
  // Regist decorator
  registDecorator(
    {
      decoratorName: DECORATOR_NAME,
      func: _isEmpty,
    },
    decoratorOptions
  );
}
