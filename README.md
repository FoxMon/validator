# TypeScript Validator

Property decorator & Function decorator

---

# Author

| Author | Version |
| :----: | :-----: |
| FoxMon |  1.0.0  |

---

## Stack

---

> TypeScript
>
> ES2020

---

## Decorator options

---

|      msg      |           every            |   value   |
| :-----------: | :------------------------: | :-------: |
| Error message | Every element must be true | Parameter |

> msg: Error message parameter
>
> every: Every element must be true
>
> value: Decorator parameter value

---

## Example

---

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

  // setTimeout 1s, 1000ms
  // study
  @delayFunction({ value: 1000 })
  study() {
    console.log("Study");
  }
}

const person: Person = new Person("Fox", 10, "Seoul", ["FoxMon"]);
```

---
