// let incBtn = document.createElement("button");
// let decBtn = document.createElement("button");
// let count = document.createElement("p");
// incBtn?.innerHTML = "+";
// decBtn?.innerHTML = "-";
// document.body.append(incBtn, decBtn, count);
// let counter: number = 0;
// console.log(count?.innerHTML);
// incBtn?.addEventListener("click", function (e) {
//   e.preventDefault();
//   //   let countt = count?.innerHTML;

//   counter = counter + 1;
//   console.log(counter);
//   count?.innerHTML = counter;
// });
// decBtn?.addEventListener("click", function (e) {
//   e.preventDefault();
//   counter = counter - 1;
//   console.log(counter);
//   count?.innerHTML = counter;
// });

// type types = {
//   name: string;
//   surname: string;
//   age: number;
//   id: number;
//   birthDate: Date;
// };
// function createPerson(
//   name: string,
//   surname: string,
//   age: number,
//   id: number,
//   birthDate: Date
// ) {}
// type date = {
//   birthDate: Date;
// };
enum ShapeKind {
  circle,
  square,
}

interface Shape {
  kind: ShapeKind;
  radius: number | undefined;
  sideLength: number | undefined;
  getArea: (a: number, b: number) => number;
}
class Circle implements Shape {
  kind: ShapeKind;
  radius: number | undefined;
  sideLength: number | undefined;
}
// class Square{

// }
