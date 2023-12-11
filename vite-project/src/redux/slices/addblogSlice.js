import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const blogInfo = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await fetch("http://localhost:3000/posts");

  const data = await response.json();
  return data;
});
export const postBlog = createAsyncThunk("postProduct", async (obj) => {
  const response = await axios.post("http://localhost:3000/posts", obj);
  return response.data;
});
export const deleteBlog = createAsyncThunk(
  "products/deleteBlog",
  async (productId) => {
    await fetch(`http://localhost:3000/posts/${productId}`, {
      method: "DELETE",
    });
    return productId;
  }
);
export const editBlog = createAsyncThunk(
  "products/editProduct",
  async ({ productId, updatedProduct }) => {
    const response = await fetch(`http://localhost:3000/posts/${productId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    });

    const data = await response.json();
    return data;
  }
);
const addblogSlice = createSlice({
  name: "blog",
  initialState: {
    blogss: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postBlog.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(postBlog.fulfilled, (state, action) => {
      state.loading = false;
      state.blogss = action.payload;
    });
    builder.addCase(postBlog.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(blogInfo.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(blogInfo.fulfilled, (state, action) => {
      state.loading = false;
      state.blogss = action.payload;
    });
    builder.addCase(blogInfo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(deleteBlog.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deleteBlog.fulfilled, (state, action) => {
      state.loading = false;
      state.blogss = state.blogss.filter((blog) => blog.id !== action.payload);
    });
    builder.addCase(deleteBlog.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // builder.addCase(editBlog.fulfilled, (state, action) => {
    //   const updatedProduct = action.payload;
    //   const index = state.blogss.findIndex(
    //     (post) => post.id === updatedProduct.id
    //   );

    //   if (index !== -1) {
    //     state.blogss = state.blogss.map((blogss, idx) => {
    //       if (idx === index) {
    //         return updatedProduct;
    //       }
    //       return post;
    //     });
    //   }
    // });

    // builder.addCase(editBlog.pending, (state, action) => {
    //   state.loading = true;
    // });

    // builder.addCase(editBlog.fulfilled, (state, action) => {
    //   state.loading = false;
    //   const editedBlog = action.payload;
    //   state.blogss = state.blogss.map((blog) => {
    //     if (blog.id === editedBlog.id) {
    //       return editedBlog;
    //     }
    //     return blog;
    //   });
    // });

    // builder.addCase(editBlog.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload;
    // });
  },
});
export default addblogSlice.reducer;

export const { addBlog } = addblogSlice.actions;
// export const { deleteBlog } = addblogSlice.actions;

export { addblogSlice };
