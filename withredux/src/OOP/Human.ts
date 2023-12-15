export interface IHuman {
  name: string;
  surname: string;
  age: number;
  getInfo(): void;
}
export abstract class Human implements IHuman {
  private _name: string;
  private _surname: string;
  age: number;

  constructor(_name: string, _surname: string, age: number) {
    this._name = _name;
    this._surname = _surname;
    this.age = age;
  }
  get fullName() {
    return this._name + " " + this._surname;
  }
  get name() {
    return this._name;
  }
  get surname() {
    return this._surname;
  }
  getInfo() {
    console.log("name", this._name, "surname", this._surname);
  }
}
