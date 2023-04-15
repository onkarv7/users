import { Box, TextField, Stack, Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "test@test.com" && password === "password") {
      navigate("/orders");
      console.log("details");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <Box>
      <Box className="content">
        <Stack spacing={5} className="form">
          <h2 className="title">Login</h2>

          <TextField
            id="email"
            name="email"
            label="Email"
            type="email"
            placeholder="Enter Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />

          <TextField
            id="password"
            name="password"
            label="password"
            type="password"
            placeholder="Enter Password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
          />

          {error && <p style={{ color: "red" }}>{error}</p>}

          <Button
            className="login-btn"
            variant="contained"
            onClick={handleSubmit}
          >
            LOGIN
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Login;
