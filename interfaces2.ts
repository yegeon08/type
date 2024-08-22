abstract class User {
  constructor(protected firstName: string, protected lastName: string) {}
  abstract sayHI(name: string): string;
  abstract fullName(): string;
}
class Player extends User {
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHI(name: string) {
    return `Hello ${name}. My name is ${this.fullName()}`;
  }
}

interface User {
  firstName: string;
  lastName: string;
  sayHI(name: string): string;
  fullName(): string;
}
interface Human {
  health: number;
}
class Player implements User, Human {
  constructor(
    public firstName: string,
    public lastName: string,
    public health: number
  ) {}
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHI(name: string) {
    return `Hello ${name}. My name is ${this.fullName()}`;
  }
}

function makeUser(user: User) {}
makeUser({
  firstName: "nico",
  lastName: "las",
  fullName: () => "xx",
  sayHI: (name) => "string",
});
