import React, { useState } from "react";
import { Button, Box, TextField, Typography } from "@material-ui/core";

export default function Auth({ isSignup } = this.props) {
  const [userInput, setUserInput] = useState("");
  const [passInput, setPassInput] = useState("");
  const [passVerifyInput, setPassVerifyInput] = useState("");
  const [validateValidForm, setValidateValidForm] = useState(false);
  const [passVerifyHasError, setPassVerifyHasError] = useState(false);

  const getUser = (e) => {
    setUserInput(e);
  };

  const getPass = (e) => {
    setPassInput(e);
  };

  const getPassVerify = (e) => {
    setPassVerifyInput(e);
    if (passInput == passVerifyInput) {
      passVerifyHasError(false);
    }

    if (passInput != passVerifyInput) {
      passVerifyHasError(true);
    }
  };

  return (
    <Box className="auth-container">
      <form className="auth-form" noValidate autoComplete="off">
        <h1 m={0} className="auth-label" style={{ margin: "0" }}>
          {isSignup ? "Register" : "Login"}
        </h1>
        <TextField
          width={1}
          id="standard-basic"
          label="Username"
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
            onChange={(e) => setPassVerifyInput(e.target.value)}
            style={{ width: "250px", marginBottom: "30px" }}
            // helperText={passVerifyHasError ? "Incorrect Password Inserted" : ""}
            helperText={passVerifyHasError ? "wad" : "duhek"}
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
