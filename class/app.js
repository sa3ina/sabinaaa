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
var Human = /** @class */ (function () {
    function Human(_name, _surname, age) {
        this._name = _name;
        this._surname = _surname;
        this.age = age;
    }
    Object.defineProperty(Human.prototype, "fullName", {
        get: function () {
            return this._name + " " + this._surname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Human.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Human.prototype, "surname", {
        get: function () {
            return this._surname;
        },
        enumerable: false,
        configurable: true
    });
    Human.prototype.getInfo = function () {
        console.log("name", this._name, "surname", this._surname);
    };
    return Human;
}());
var Position;
(function (Position) {
    Position["hr"] = "hr";
    Position["marketing"] = "marketing";
    Position["it"] = "it";
})(Position || (Position = {}));
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(salary, skills, position, age, name, surname) {
        var _this = _super.call(this, name, surname, age) || this;
        (_this.salary = salary), (_this.age = age);
        _this.skills = skills;
        _this.position = position;
        return _this;
    }
    Employee.prototype.getInfo = function () {
        console.log("name", this.name, "surname", this.surname);
    };
    return Employee;
}(Human));
var emp1 = new Employee(762, "hsdi", Position.hr, 3279, "s", "dsj");
console.log(emp1);
console.log(emp1.getInfo());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, surname, age, groupName, hobbies, GPA) {
        var _this = _super.call(this, name, surname, age) || this;
        _this.hobbies = hobbies;
        _this.groupName = groupName;
        if (GPA < 0 || GPA > 100) {
            _this._GPA = 0;
        }
        else {
            _this._GPA = GPA;
        }
        return _this;
    }
    Object.defineProperty(Student.prototype, "GPA", {
        get: function () {
            return this._GPA;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.hasPassed = function () {
        return true;
    };
    return Student;
}(Human));
var student1 = new Student("nck", "csnkfh", 3278, "hids", "dsk", -37);
console.log(student1);
//////////
var nameInp = document.querySelector(".name");
var snameInp = document.querySelector(".surname");
var ageInp = document.querySelector(".age");
var submit = document.querySelector(".submit");
var select = document.querySelector(".select");
var studentsInp = document.querySelector(".studentsInp");
var employeeInp = document.querySelector(".employeeInp");
select === null || select === void 0 ? void 0 : select.addEventListener("change", function (e) {
    e.preventDefault();
    //   console.log(select?.value);
    if ((select === null || select === void 0 ? void 0 : select.value) === "student") {
        console.log("student");
        studentsInp.style.display = "block";
        employeeInp.style.display = "none";
    }
    else {
        console.log("employee");
        employeeInp.style.display = "block";
        studentsInp.style.display = "none";
    }
});
