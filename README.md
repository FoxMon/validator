# TypeScript Validator

```typescript
class Person {
  // name empty check
  @isEmpty()
  name: string;

  // age number check
  @isNumber()
  age: number;

  // address string check
  @isString()
  addr: string;

  constructor(name: string, age: number, addr: string) {
    this.name = name;
    this.age = age;
    this.addr = addr;
  }
}

const person: Person = new Person("Fox", 10, "Seoul");
```
