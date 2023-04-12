import { CommonType } from "../../src/types";

/**
 * Check target is empty
 * @param {CommonType.CommonVariable} target
 * @returns {boolean}
 */
export function isEmpty<T extends CommonType.CommonVariable>(
  target: T
): boolean {
  return target === "" || target === null || target === undefined;
}
