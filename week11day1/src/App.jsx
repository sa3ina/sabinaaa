import * as React from "react";
import "./App.css";
import About from "./About";
import AddCategory from "./AddCategory";
import Categories from "./Categories";
import CategoryDetail from "./CategoryDetail";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./Navbar";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        {" "}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}>
            {" "}
          </Route>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="categories" element={<Categories />} />
          <Route path="addcategory" element={<AddCategory />} />
          <Route path="categorydetail" element={<CategoryDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
