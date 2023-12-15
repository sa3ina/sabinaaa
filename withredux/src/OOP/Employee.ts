import { Human } from "./Human";
export enum Position {
  hr = "hr",
  marketing = "marketing",
  it = "it",
}
export interface IEmployee<T> {
  salary: number;
  skills: T;
  position: Position;
}
export class Employee extends Human implements IEmployee<string> {
  salary: number;
  skills: string;
  position: Position.hr;
  age: number;
  getInfo(): string {
    return "name " + this.name + " surname " + this.surname;
  }
  constructor(
    salary: number,
    skills: string,
    position: Position.hr,
    age: number,
    name: string,
    surname: string
  ) {
    super(name, surname, age);
    (this.salary = salary), (this.age = age);
    this.skills = skills;
    this.position = position;
  }
}
// let emp1 = new Employee(762, "hsdi", Position.hr, 3279, "s", "dsj");
// console.log(emp1);
// console.log(emp1.getInfo());
