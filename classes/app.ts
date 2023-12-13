// type fuelCapacity = 30 | 40 | 50 | 70 | 100;
// interface Vehicle {
//   brandname: string;
//   modelname: string;
//   year: number;
//   fuelCapacity: fuelCapacity;
//   currentFuel: number;
//   millage: number;
//   fuelFor1Km: number;
//   engine: EngineType;
//   vehicleType: VehicleType;
//   getInfo(): void;
//   drive(km: number): number;
// }
// enum EngineType {
//   dohc,
//   turbo,
// }
// enum VehicleType {
//   car,
//   motorcycle,
// }
// class Car implements Vehicle {
//   brandname: string;
//   modelname: string;
//   year: number;
//   fuelCapacity: fuelCapacity;
//   currentFuel: number;
//   millage: number;
//   fuelFor1Km: number;
//   engine: EngineType = EngineType.turbo;
//   vehicleType: VehicleType = VehicleType.car;
//   constructor(
//     brandname: string,
//     modelname: string,
//     year: number,
//     fuelCapacity: fuelCapacity,
//     currentFuel: number,
//     millage: number,
//     fuelFor1Km: number
//   ) {
//     (this.brandname = brandname),
//       (this.modelname = modelname),
//       (this.year = year),
//       (this.fuelCapacity = fuelCapacity),
//       (this.millage = millage),
//       (this.fuelFor1Km = fuelFor1Km);
//     this.currentFuel = currentFuel;
//   }

//   getInfo(): void {
//     console.log(this.brandname);
//   }
//   drive(km: number): number {
//     return this.fuelCapacity - km * this.fuelFor1Km;
//   }
// }

// let car1 = new Car("aysun", "balaken", 2004, 100, 24, 1000, 572367898);
// car1.getInfo();
interface IAnimal {
  name: string;
  age: number;
  getInfo(): void;
}
abstract class Animal implements IAnimal {
  readonly name: string;
  age: number;
  getInfo(): void {
    console.log("name", this.name, "age", this.age);
  }
  constructor(name: string, age: number) {
    (this.name = name), (this.age = age);
  }
}

interface IBird {
  fly(): void;
  wingColor: string;
}
interface IFish<T> {
  swim(): void;
  livePlace: livePlace;
  kill: T;
}
enum livePlace {
  river,
  ocean,
  sea,
}
class Bird extends Animal implements IBird {
  fly(): void {
    console.log("flying");
  }
  wingColor: string;
  constructor(name: string, age: number, wingColor: string) {
    super(name, age);
    this.wingColor = wingColor;
  }
}
class Fish extends Animal implements IFish<string> {
  swim(): void {
    console.log("swimming");
  }
  livePlace: livePlace;
  kill: string;
  constructor(name: string, age: number, livePlace: livePlace, kill: string) {
    super(name, age);
    this.livePlace = livePlace;
    this.kill = kill;
  }
}
let bird1 = new Bird("aysun", 78, "sari");
let fish1 = new Fish("aysunn", 3, livePlace.ocean, "lazim deyil");
bird1.getInfo();
fish1.getInfo();
fish1.swim();
bird1.fly();
