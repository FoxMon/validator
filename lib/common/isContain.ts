import { assertArray } from "../../src/utils";
import { CommonType } from "../../src/types";

/**
 * Check if target contain value, return true.
 * @param {CommonType.CommonVariable[]} target
 * @param {CommonType.CommonVariable} value
 * @returns {boolean}
 */
export function isContain<T extends CommonType.CommonVariable>(
  target: T[],
  value: T
): boolean {
  // Assert target is Array<T>
  assertArray(target);
  return target.some((t: T) => t === value);
}
