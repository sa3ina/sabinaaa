import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBlog, postBlog } from "../../redux/slices/addblogSlice";
import { useState } from "react";
import { Container } from "@mui/material";
import axios from "axios";
function AddBlogs() {
  const [name, setName] = useState("");
  const [blog, setBlog] = useState("");

  const dispatch = useDispatch();

  return (
    <>
      <Container style={{ margin: "100px" }}>
        <form action="" onSubmit={addBlog}>
          <div>
            <label htmlFor="">Name</label>
            <input
              value={name}
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label htmlFor="">Blog</label>
            <input
              value={blog}
              type="text"
              onChange={(e) => setBlog(e.target.value)}
            />
            <br />
            <button
              onClick={(e) => {
                e.preventDefault();
                let obj = { name: name, blog: blog };
                dispatch(postBlog(obj));
                setBlog("");
                setName("");
              }}
              type="submit"
            >
              Add Blog
            </button>
          </div>
        </form>
      </Container>
    </>
  );
}

export default AddBlogs;
