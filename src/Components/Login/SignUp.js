import { Box, TextField } from "@mui/material";
import React from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { Link } from "react-router-dom";
import loginImage from "../Images/Image/login-box-image.png";
import logo from "../Images/Logo/crmLogo.png";

const SignUp = () => {
  return (
    <div className="w-75 mx-auto">
      <div className="w-50 mx-auto">
        <div className="login-box mx-auto">
          <div className="login-box-upper-part">
            <div>
              <h4>Welcome !</h4>
              <p>Sign in to continue to CRM.</p>
            </div>
            <div>
              <img src={loginImage} alt="" />
            </div>
          </div>
          <div className="login-box-logo border">
            <img className="ms-1" src={logo} alt="" />
          </div>
          <div className="login-option bg-white">
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "93%" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Your Name"
                variant="outlined"
                type="text"
              />
              <TextField
                className="mt-4"
                id="outlined-basic"
                label="Your Email"
                variant="outlined"
                type="email"
              />
              <TextField
                className="mt-4"
                id="outlined-basic"
                label="Your Password"
                variant="outlined"
                type="password"
              />
              <TextField
                className="mt-4"
                id="outlined-basic"
                label="Re-type Password"
                variant="outlined"
                type="password"
              />
              <button className="add-new-button mt-3 py-2 px-3">
                <AiOutlineLogin className="fs-5 me-1" />
                Sign In
              </button>
            </Box>
            <p className="text-center mt-2">
              <small>Already have account ! <Link to='/login'>Login</Link></small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
