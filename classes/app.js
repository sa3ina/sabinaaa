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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        (this.name = name), (this.age = age);
    }
    Animal.prototype.getInfo = function () {
        console.log("name", this.name, "age", this.age);
    };
    return Animal;
}());
var livePlace;
(function (livePlace) {
    livePlace[livePlace["river"] = 0] = "river";
    livePlace[livePlace["ocean"] = 1] = "ocean";
    livePlace[livePlace["sea"] = 2] = "sea";
})(livePlace || (livePlace = {}));
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird(name, age, wingColor) {
        var _this = _super.call(this, name, age) || this;
        _this.wingColor = wingColor;
        return _this;
    }
    Bird.prototype.fly = function () {
        console.log("flying");
    };
    return Bird;
}(Animal));
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish(name, age, livePlace, kill) {
        var _this = _super.call(this, name, age) || this;
        _this.livePlace = livePlace;
        _this.kill = kill;
        return _this;
    }
    Fish.prototype.swim = function () {
        console.log("swimming");
    };
    return Fish;
}(Animal));
var bird1 = new Bird("aysun", 78, "sari");
var fish1 = new Fish("aysunn", 3, livePlace.ocean, "lazim deyil");
bird1.getInfo();
fish1.getInfo();
fish1.swim();
bird1.fly();
