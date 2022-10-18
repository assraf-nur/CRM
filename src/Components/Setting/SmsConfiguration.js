import { Box, TextField } from "@mui/material";
import React from "react";
import { AiOutlineSave } from "react-icons/ai";

const SmsConfiguration = () => {
  return (
    <div className="p-3 w-50 mx-auto">
      <h4>SMS Configuration</h4>
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
            label="Number"
            variant="outlined"
            type={"number"}
          />
          <TextField
            className="mb-3"
            id="outlined-basic"
            label="API Key"
            variant="outlined"
            type={"text"}
          />
          <TextField
            className="mb-3"
            id="outlined-basic"
            label="Your Text Here"
            variant="outlined"
            type={"text"}
          />

          <button
            style={{ backgroundColor: "#5156BE" }}
            className="add-new-button py-2 px-3 mt-3 ms-2 w-25"
          >
            <AiOutlineSave className="me-1 mb-1" />
            Save
          </button>
        </Box>
      </div>
    </div>
  );
};

export default SmsConfiguration;
