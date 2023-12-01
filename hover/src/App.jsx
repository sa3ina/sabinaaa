import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="row">
        <div className="block">
          <div class="hovicon effect-4 sub-b">(o)</div>
        </div>
      </div>
    </>
  );
}

export default App;
