import AddBlogs from "../pages/addblog";
import Blogs from "../pages/blogs";
export const routes = [
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <AddBlogs />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
];
