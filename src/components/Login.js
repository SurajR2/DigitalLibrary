/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  Button,
  Grid,
  TextField,
  Paper,
  Avatar,
  Typography,
} from "@mui/material";
const BASE_URL = "http://localhost:3000/api";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 300,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1ab5df", ml: "10px" };
  const fieldStyle = { align: "center", margin: "20px auto " };
  const buttonStyle = { margin: "10px auto", backgroundColor: "green" };

  const submitForm = (e) => {
    e.preventDefault();

    const data = { email: email, password: password };

    axios
      .post(`${BASE_URL}/login`, data)
      .then((response) => {
        if (response.status == 200) {
          window.location = "/home";
        }
        if (response.status == 201) {
          console.error(response);
          setError("Invalid password or email");
        }
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <AccountCircleIcon />
            </Avatar>
            <h2>Sign In</h2>
          </Grid>
          <form className="Form" method="post" onSubmit={submitForm}>
            <TextField
              style={fieldStyle}
              variant="filled"
              id="email"
              label="Email"
              type="text"
              value={email}
              required
              fullWidth
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              style={fieldStyle}
              variant="filled"
              id="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="Current-Password"
              fullWidth
            />
            <Button
              style={buttonStyle}
              type="submit"
              variant="contained"
              fullWidth
            >
              Login
            </Button>
            {error ? <label style={{ color: "red" }}>{error}</label> : null}
            <Typography>
              <Link to="#">Forgot password?</Link>
            </Typography>

            <Typography>
              Do you have an account?<Link to="/signup">Sign Up</Link>
            </Typography>
          </form>
        </Paper>
      </Grid>
    </>
  );
}

export default Login;
