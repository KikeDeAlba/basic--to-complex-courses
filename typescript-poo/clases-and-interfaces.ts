/*
class UserPassport {
  age: number;

  constructor(age: number) {
    this.age = age;
  }
}

// Clase: Sentencia class -> nombre -> bloque de codigo
class User {
  private name: string;
  email: `${string}@${string}`;
  passport: UserPassport;

  constructor(name: string, email: `${string}@${string}`, age: number) {
    this.name = name;
    this.email = email;
    this.passport = new UserPassport(age);
  }

  info() {
    console.log(
      `Hola, soy ${this.name}, mi email es ${this.email} y mi edad es ${this.passport.age}`
    );
  }
}

const user1 = new User("Omar", "omar@gmail.com", 40);

const user2 = new User("Snow", "snow@gmail.com", 20);

class Utilities {
  static log(value: any) {
    console.log(value);
  }
}

Utilities.log("Esto es un metodo estatico");
*/

interface IUser<TInput> {
  name: string;
  email: `${string}@${string}`;
  age: number;
  data: TInput;
  info(): void;
}

class User implements IUser<{ phoneNumber: number }> {
  age: number;
  email: `${string}@${string}`;
  name: string;
  data: { phoneNumber: number };

  constructor(payload: Partial<User>) {
    Object.assign(this, payload);
  }

  info(): void {
    console.log(this.data);
  }
}

class UserExtended implements IUser<string[]> {
  age: number;
  email: `${string}@${string}`;
  name: string;
  data: string[];

  constructor(payload: Partial<UserExtended>) {
    Object.assign(this, payload);
  }

  info(): void {
    console.log(this.data);
  }
}

const user1 = new User({
  age: 10,
  data: {
    phoneNumber: 6693171220,
  },
  email: "email@email.com",
  name: "Omar",
});

const user2 = new UserExtended({
  age: 20,
  data: ["Pedro", "Jael", "junto por siempre"],
  email: "email@email.com",
  name: "Snow",
});

user2.info();

interface UseCase<TInput, TOutput> {
  execute(prop: TInput): TOutput;
}

class removeUserUseCase
  implements UseCase<Partial<number>, { message: string; id: number }>
{
  execute(prop?: number): { message: string; id: number } {
    return {
      message: "Usuario eliminado",
      id: prop || 0,
    };
  }
}
