import React, { useEffect } from "react";
import {
  addBlog,
  blogInfo,
  deleteBlog,
  editBlog,
} from "../../redux/slices/addblogSlice";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useDispatch, useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Grid } from "@mui/material";

const pages = ["Blogs", "AddBlog"];

function Blogs() {
  const [id, setId] = useState("");
  const [edit, setEdit] = useState(false);
  const [edited, setEdited] = useState();
  const dispatch = useDispatch();
  const [prod, setProd] = useState([]);
  const products = useSelector((state) => state.blogs.blogss);
  console.log(products);
  useEffect(() => {
    dispatch(blogInfo());
  }, [dispatch]);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  console.log(id);
  return (
    <>
      <AppBar position="static" style={{ backgroundColor: "pink" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              BLOGS
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Blogs
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Container style={{ marginTop: "30px" }}>
        {" "}
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          {edit ? (
            <>
              <input
                value={edited}
                onChange={(e) => {
                  e.preventDefault();
                  setEdited(edited);
                }}
              />
              <button
                style={{
                  // width: "160px",
                  // height: "30px",
                  backgroundColor: "orange",
                }}
                onClick={(e) => {
                  let obj = {
                    name: edited,
                  };
                  e.preventDefault();
                  console.log(id);
                  setEdited(e.target.value);
                  dispatch(editBlog({ productId: id, updatedProduct: obj }));
                  setEdit(!edit);
                }}
              >
                edit changes
              </button>
            </>
          ) : (
            ""
          )}
        </Container>
        <Grid container spacing={2}>
          {products &&
            products.map((elem, i) => {
              return (
                <Grid key={i} item xs={6}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Blog
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {elem.blog}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        size="small"
                        onClick={(e) => {
                          e.preventDefault();
                          setEdit(!edit);
                          console.log(edit);
                          setId(elem.id);
                        }}
                      >
                        Edit
                      </Button>

                      <Button
                        onClick={(e) => {
                          e.preventDefault();
                          dispatch(deleteBlog(elem.id));
                        }}
                        size="small"
                      >
                        Delete
                      </Button>
                    </CardActions>
                  </Card>{" "}
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </>
  );
}
export default Blogs;
