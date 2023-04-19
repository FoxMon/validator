import { CommonType } from "./common.type";

/**
 * Decorator type package
 */
export namespace DecoratorType {
  /**
   * Define DecoratorBuilder type
   * any || MethodDecorator
   */
  export type DecoratorBuilder = any | MethodDecorator | PropertyDescriptor;

  /**
   * Define DecoratorFunction type
   * Decorator function type
   */
  export type DecoratorFunction = (target: any, value?: any) => boolean;

  /**
   * Define DecoratorMethodFunction type
   * The param is define or not
   */
  export type DecoratorMethodFunction = <
    T extends CommonType.CommonVariable,
    E extends DecoratorBuilder,
    V extends CommonType.CommonMethodReturn
  >(
    params?: T,
    func?: E
  ) => V;

  /**
   * Define DecoratorOptions type
   */
  export interface DecoratorOptions {
    /**
     * Error message
     * If decorator function failed
     */
    msg?: string;
    /**
     * If decorator target is array, it must be valid
     */
    every?: boolean;
    /**
     * Target value
     */
    value?: CommonType.CommonVariable;
  }
}
