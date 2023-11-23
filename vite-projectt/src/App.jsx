import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
export default function DenseAppBar() {
  const [value, setValue] = useState("");
  const [data, setData] = useState({});
  const [selectedYear, setSelectedYear] = useState("");
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              Photos
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="md">
        {/* <div className="text"> */}
        <h1>Album Layout</h1>
        <p>
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don't simply skip over it entirely.
        </p>{" "}
        <div className="buttons">
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              console.log(value);
            }}
          />{" "}
          <Button
            variant="contained"
            onClick={() => {
              axios(`https://www.omdbapi.com/?s=${value}&apikey=ad95af94`).then(
                (res) => {
                  console.log(res.data);
                  setData(res.data);
                }
              );
            }}
          >
            Main call to action
          </Button>{" "}
        </div>
        <Select value={value} style={{ marginLeft: "auto" }}>
          <MenuItem value="" disabled>
            Select Year
          </MenuItem>
          <MenuItem value={2023}>2023</MenuItem>
          <MenuItem value={2022}>2022</MenuItem>
          <MenuItem value={2000}>2002</MenuItem>
        </Select>
      </Container>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={2}>
          {data?.Search?.map((card, i) => (
            <Grid item key={i} xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia component="img" height="140" image={card.Poster} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {card.Title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}{" "}
        </Grid>
      </Container>
    </>
  );
}
