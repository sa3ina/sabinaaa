import { Human } from "./Human";
export interface IStudent<K> {
  groupName: string;
  hobbies: K;
  GPA: number;
  hasPassed(): boolean;
}
export class Student extends Human implements IStudent<string> {
  groupName: string;
  hobbies: string;
  private _GPA: number;
  get GPA() {
    return this._GPA;
  }
  hasPassed(): boolean {
    return true;
  }
  getInfo(): string {
    return "name " + this.name + " surname " + this.surname;
  }
  constructor(
    name: string,
    surname: string,
    age: number,
    groupName: string,
    hobbies: string,
    GPA: number
  ) {
    super(name, surname, age);
    this.hobbies = hobbies;
    this.groupName = groupName;
    if (GPA < 0 || GPA > 100) {
      this._GPA = 0;
    } else {
      this._GPA = GPA;
    }
  }
}
