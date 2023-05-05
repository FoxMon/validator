/**
 * {
 *  ClassA: {
 *      property1: "",
 *  },
 *  ClassB: {
 *      property2: "",
 *  }
 * }
 */

interface DataObjectType {
  [key: string]: unknown;
}

class DataForValidate {
  clzName: string;

  constructor(clzName: string) {
    this.clzName = clzName;
  }
}

Object.freeze(DataForValidate);
export default DataForValidate;
