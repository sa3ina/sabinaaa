import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { addTopping } from "./redux/slices/todoSlice";
import { addToggle } from "./redux/slices/todoSlice";
import { deletee } from "./redux/slices/todoSlice";
function App() {
  const toppings = useSelector((state) => state.todo.toppings);
  const toggle = useSelector((state) => state.todo.toggle);
  const reftopping = useRef();
  console.log(toppings);

  const dispatch = useDispatch();
  return (
    <>
      <h2>Pizza</h2>
      <input
        ref={reftopping}
        type="text"
        onChange={(e) => {
          addTopping(reftopping.current.value);
        }}
      />
      <div>
        <button
          onClick={() => {
            let isAdded = toppings.find(
              (elem) => elem.title == reftopping.current.value
            );
            if (!isAdded) {
              dispatch(addTopping(reftopping.current.value));
              reftopping.current.value = "";
            } else {
              console.log("AY Allahhh", reftopping.current.value);
            }
          }}
        >
          Add topping
        </button>

        <ul>
          {toppings &&
            toppings.map((elem) => {
              return (
                <li key={elem.id}>
                  {elem.title}
                  <button
                    onClick={() => {
                      dispatch(deletee(elem.id));
                    }}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
      <button
        onClick={() => {
          dispatch(addToggle());
        }}
      >
        Toggle
      </button>
      <h4>
        Gluten:
        {toggle ? "true" : "false"}
      </h4>
    </>
  );
}

export default App;
