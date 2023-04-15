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

  // friends check
  @isContain({ value: "FoxMon" })
  friends[]: string[]

  constructor(name: string, age: number, addr: string, friends: string[]) {
    this.name = name;
    this.age = age;
    this.addr = addr;
    this.friends: friends;
  }
}

const person: Person = new Person("Fox", 10, "Seoul", ["FoxMon"]);
```
