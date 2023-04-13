# TypeScript Validator

```typescript
class Person {
  // name empty check
  @isEmpty()
  name: string;

  @isEmpty()
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const person: Person = new Person("Fox", 10);
```
