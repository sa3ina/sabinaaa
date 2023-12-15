import React, { useState } from "react";
import { Employee } from "../OOP/Employee";
import { Position } from "../OOP/Employee";
import { Student } from "../OOP/Student";
import { v4 as uuidv4 } from "uuid";
type Props = {};

const Form = (props: Props) => {
  const [select, setSelect] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState(0);
  const [group, setGroup] = useState("");
  const [gpa, setGpa] = useState(0);
  const [hobbies, setHobbies] = useState("");
  const [salary, setSalary] = useState(0);
  const [skills, setSkills] = useState("");
  const [list, setList] = useState<string[]>([]);
  return (
    <>
      <form
        action=""
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          if (select === "employee") {
            let emp = new Employee(
              salary,
              skills,
              Position.hr,
              age,
              name,
              surname
            );
            console.log(emp);

            setList([...list, emp.getInfo()]);
            // <ul>
            //   {arr.map((elem) => {
            //     return <li key={uuidv4()}>{elem.age}</li>;
            //   })}
            // </ul>;
          } else if (select === "student") {
            let student = new Student(name, surname, age, group, hobbies, gpa);
            setList([...list, student.getInfo()]);
          } else {
            console.log("");
          }
        }}
      >
        <input
          type="text"
          className="name"
          placeholder="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          className="surname"
          placeholder="surname"
          onChange={(e) => {
            setSurname(e.target.value);
          }}
        />
        <input
          type="number"
          className="age"
          placeholder="age"
          onChange={(e) => {
            setAge(Number(e.target.value));
          }}
        />

        <select
          name=""
          id=""
          className="select"
          style={{ marginBottom: "100px" }}
          onChange={(e) => {
            if (e.target.value === "student") {
              setSelect("student");
            } else if (e.target.value === "employee") {
              setSelect("employee");
            } else {
              setSelect("");
            }
          }}
        >
          <option value="student" className="student">
            Student
          </option>
          <option value="employee" className="employee">
            Employee
          </option>
        </select>
        {select === "student" ? (
          <div className="studentsInp" style={{ marginBottom: "40px" }}>
            <input
              type="text"
              className="groupName"
              placeholder="groupname"
              onChange={(e) => {
                setGroup(e.target.value);
              }}
            />
            <input
              type="text"
              className="GPA"
              placeholder="GPA"
              onChange={(e) => {
                setGpa(Number(e.target.value));
              }}
            />
            <input
              type="text"
              className="hobbies"
              placeholder="hobbies"
              onChange={(e) => {
                setHobbies(e.target.value);
              }}
            />
          </div>
        ) : select === "employee" ? (
          <div className="employeeInp" style={{ marginBottom: "20px" }}>
            <input
              type="text"
              className="salary"
              placeholder="salary"
              onChange={(e) => {
                setSalary(Number(e.target.value));
              }}
            />
            <input
              type="text"
              className="skills"
              placeholder="skills"
              onChange={(e) => {
                setSkills(e.target.value);
              }}
            />
            <select name="position" id="">
              <option value="dev">Dev</option>
              <option value="marketing">Marketing</option>
            </select>
          </div>
        ) : null}

        <button type="submit" className="submit">
          Submit
        </button>
      </form>
      <ul>
        {list.map((elem) => {
          return <li key={uuidv4()}>{elem}</li>;
        })}
      </ul>
      ;
    </>
  );
};

export default Form;
