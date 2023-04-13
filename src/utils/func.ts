import { UtilType } from "../types/util.type";

/**
 * Matched
 * @param {T} v
 */
export function matched<T>(v: T) {
  return {
    on: () => matched(v),
    otherwise: () => v,
  };
}

/**
 * Match
 * @param {T} v
 */
export function match<T, V>(v: T): UtilType.Match<T, V> {
  return {
    on: (predict: (v: T) => boolean, fn: (v: T) => V) =>
      predict(v) ? matched(fn(v)) : match(v),
    otherwise: (fn: (x: T) => V) => fn(v),
  };
}
