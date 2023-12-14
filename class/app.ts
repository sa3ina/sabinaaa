interface IHuman {
  name: string;
  surname: string;
  age: number;
  getInfo(): void;
}
abstract class Human implements IHuman {
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
enum Position {
  hr = "hr",
  marketing = "marketing",
  it = "it",
}
interface IEmployee<T> {
  salary: number;
  skills: T;
  position: Position;
}
interface IStudent<K> {
  groupName: string;
  hobbies: K;
  GPA: number;
  hasPassed(): boolean;
}

class Employee extends Human implements IEmployee<string> {
  salary: number;
  skills: string;
  position: Position.hr;
  age: number;
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
  getInfo(): void {
    console.log("name", this.name, "surname", this.surname);
  }
}
let emp1 = new Employee(762, "hsdi", Position.hr, 3279, "s", "dsj");
console.log(emp1);
console.log(emp1.getInfo());

class Student extends Human implements IStudent<string> {
  groupName: string;
  hobbies: string;
  private _GPA: number;
  get GPA() {
    return this._GPA;
  }
  hasPassed(): boolean {
    return true;
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
let student1 = new Student("nck", "csnkfh", 3278, "hids", "dsk", -37);
console.log(student1);
//////////
let nameInp = document.querySelector(".name");
let snameInp = document.querySelector(".surname");
let ageInp = document.querySelector(".age");
let submit = document.querySelector(".submit");
let select = document.querySelector(".select");

let studentsInp = document.querySelector(".studentsInp");
let employeeInp = document.querySelector(".employeeInp");
select?.addEventListener("change", (e) => {
  e.preventDefault();
  //   console.log(select?.value);
  if (select?.value === "student") {
    console.log("student");
    studentsInp.style.display = "block";
    employeeInp.style.display = "none";
  } else {
    console.log("employee");
    employeeInp.style.display = "block";
    studentsInp.style.display = "none";
  }
});
