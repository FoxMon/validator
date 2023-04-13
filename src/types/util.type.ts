/**
 * Util type package
 */
export namespace UtilType {
  /**
   * match.on ....
   */
  export interface Match<T, V> {
    on: (pred: (v: T) => boolean, fn: (v: T) => V) => Match<T, V>;
    otherwise: (fn: (x: T) => V) => V;
  }
}
