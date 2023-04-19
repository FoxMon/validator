import { DecoratorType } from "./decorator.type";

/**
 * CheckType for decorator function option type
 */
export namespace CheckType {
  /**
   * To regist function decorator...
   */
  export interface Options {
    /**
     * Name option
     */
    decoratorName: string;

    /**
     * Apply decorator type
     * Property decorator: property
     * Method decorator: method
     * Class decorator: class
     */
    applyType: string;

    /**
     * Function option
     */
    decoratorFunc:
      | DecoratorType.DecoratorFunction
      | DecoratorType.DecoratorMethodFunction;
  }
}
