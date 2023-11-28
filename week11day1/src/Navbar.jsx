import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Outlet, Link } from "react-router-dom";
export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button>
            {" "}
            <Link style={{ color: "white", textDecoration: "none" }} to="/">
              Home
            </Link>
          </Button>
          <Button>
            {" "}
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/contact"
            >
              Contact
            </Link>
          </Button>
          <Button>
            {" "}
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/categories"
            >
              Categories
            </Link>
          </Button>
          <Button>
            {" "}
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/addcategory"
            >
              AddCategory
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
