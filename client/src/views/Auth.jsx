import React, { useState } from "react";
import { Button, Box, TextField, Typography } from "@material-ui/core";
import Axios from "axios";
import axios from "axios";

export default function Auth({ isSignup } = this.props) {
  const [emailInput, setEmailInput] = useState("");
  const [passInput, setPassInput] = useState("");
  const [passVerifyInput, setPassVerifyInput] = useState("");
  const [validateValidForm, setValidateValidForm] = useState(false);
  const [passVerifyHasError, setPassVerifyHasError] = useState(false);
  const [userId, setUserId] = useState(0);

  const getUser = (e) => {
    setEmailInput(e);
  };

  const getPass = (e) => {
    setPassInput(e);
  };

  const getPassVerify = (e) => {
    setPassVerifyInput(e);
  };

  const checkVerifiedPass = () => {
    if (passVerifyInput === passInput) {
      setPassVerifyHasError(false);
    } else {
      setPassVerifyHasError(true);
    }
  };

  const captureForm = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/login", {
        email: emailInput,
        password: passInput,
      })
      .then((res) => {
        console.log(res.data);
        setUserId(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box className="auth-container">
      <form
        className="auth-form"
        noValidate
        autoComplete="off"
        onSubmit={captureForm}
      >
        <h1 m={0} className="auth-label" style={{ margin: "0" }}>
          {isSignup ? "Register" : "Login"}
        </h1>
        <TextField
          width={1}
          id="standard-basic"
          label="Email"
          onChange={(e) => getUser(e.target.value)}
          style={{ width: "250px", marginBottom: "15px" }}
        />
        <TextField
          width={1}
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={(e) => getPass(e.target.value)}
          style={{ width: "250px", marginBottom: isSignup ? "15px" : "30px" }}
        />
        {!isSignup ? (
          ""
        ) : (
          <TextField
            width={1}
            id="standard-password-input"
            label="Confirm Password"
            type="password"
            autoComplete="current-password"
            onChange={(e) => getPassVerify(e.target.value)}
            style={{ width: "250px", marginBottom: "30px" }}
            onBlur={checkVerifiedPass}
            helperText={
              !passVerifyHasError ? "" : "Please make sure your Password Match."
            }
          />
        )}

        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{ width: "250px" }}
        >
          {isSignup ? "Register" : "Login"}
        </Button>
      </form>
    </Box>
  );
}
