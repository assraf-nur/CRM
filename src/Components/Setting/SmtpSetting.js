import { Box, TextField } from "@mui/material";
import React from "react";
import { AiOutlineSetting } from "react-icons/ai";

const SmtpSetting = () => {
  return (
    <div className="p-3 w-50 mx-auto">
      <h4>Smtp Setting</h4>
      <div className="bg-white p-3">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "98%" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            className="mb-3"
            id="outlined-basic"
            label="Name"
            variant="outlined"
            type={"text"}
          />
          <TextField
            className="mb-3"
            id="outlined-basic"
            label="User Name"
            variant="outlined"
            type={"text"}
          />
          <TextField
            className="mb-3"
            id="outlined-basic"
            label="Server Name"
            variant="outlined"
            type={"text"}
          />
          <TextField
            className="mb-3"
            id="outlined-basic"
            label="PORT"
            variant="outlined"
            type={"number"}
          />
          <TextField
            className="mb-3"
            id="outlined-basic"
            label="Type"
            variant="outlined"
            type={"text"}
          />
          <TextField
            className="mb-3"
            id="outlined-basic"
            label="Proxy Server Name"
            variant="outlined"
            type={"text"}
          />

          <button
            style={{ backgroundColor: "#5156BE" }}
            className="add-new-button py-2 px-3 mt-3 ms-2 w-25 mx-auto"
          >
            <AiOutlineSetting className="me-1 mb-1 fs-5" />
            Update Setting
          </button>
        </Box>
      </div>
    </div>
  );
};

export default SmtpSetting;
