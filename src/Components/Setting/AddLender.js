import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React from "react";
import { AiOutlineSave } from "react-icons/ai";

const AddLender = () => {
  return (
    <div className="p-3">
      <h4 className="ms-1">Add Lenders</h4>
      <div className="row mx-1 bg-white">
        <div className="col-xl p-2">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "98%" },
            }}
            noValidate
            autoComplete="on"
          >
            <TextField
              id="outlined-basic"
              label="Lender Address"
              variant="outlined"
              type={"text"}
            />
            <TextField
              className="mt-3"
              id="outlined-basic"
              label="Special Features"
              variant="outlined"
              type={"text"}
            />
            <TextField
              className="mt-3"
              id="outlined-basic"
              label="Contact Person"
              variant="outlined"
              type={"text"}
            />
            <TextField
              className="mt-3"
              id="outlined-basic"
              label="Work Phone Number"
              variant="outlined"
              type={"number"}
            />
            <TextField
              className="mt-3"
              id="outlined-basic"
              label="Loan Range"
              variant="outlined"
              type={"text"}
            />

            <h5 className="mb-0 mt-3">Rate Measurement</h5>
            <RadioGroup
              className="mt-0 fs-6"
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="high" control={<Radio />} label="High" />
              <FormControlLabel
                value="medium"
                control={<Radio />}
                label="Medium"
              />
              <FormControlLabel value="low" control={<Radio />} label="Low" />
            </RadioGroup>

            <TextField
              className="mt-0"
              id="outlined-basic"
              label="User ID"
              variant="outlined"
              type={"text"}
            />

            <h5 className="mb-0 mt-3">Remarks</h5>
            <RadioGroup
              className="mt-0 fs-6"
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="bad" control={<Radio />} label="Bad" />
              <FormControlLabel
                value="average"
                control={<Radio />}
                label="Average"
              />
              <FormControlLabel value="good" control={<Radio />} label="Good" />
              <FormControlLabel
                value="excellent"
                control={<Radio />}
                label="Excellent"
              />
            </RadioGroup>
          </Box>

          <button
            style={{ backgroundColor: "#5156BE" }}
            className="add-new-button py-2 px-3 mt-3 ms-2"
          >
            <AiOutlineSave className="me-1 mb-1" />
            Save
          </button>
        </div>
        <div className="col-xl p-2">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "98%" },
            }}
            noValidate
            autoComplete="on"
          >
            <TextField
              id="outlined-basic"
              label="Company Name"
              variant="outlined"
              type={"text"}
            />
            <TextField
              className="mt-3"
              id="outlined-basic"
              label="Loan Products"
              variant="outlined"
              type={"text"}
            />
            <TextField
              className="mt-3"
              id="outlined-basic"
              label="Web Site"
              variant="outlined"
              type={"text"}
            />
            <TextField
              className="mt-3"
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
              type={"number"}
            />
            <TextField
              className="mt-3"
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
              type={"email"}
            />
            <TextField
              className="mt-3"
              id="outlined-basic"
              label="Credit Range"
              variant="outlined"
              type={"text"}
            />
            <TextField
              className="mt-3"
              id="outlined-basic"
              label="Portal Link"
              variant="outlined"
              type={"text"}
            />
            <TextField
              className="mt-3"
              id="outlined-basic"
              label="User Password"
              variant="outlined"
              type={"password"}
            />
            <TextField
              className="mt-3"
              id="outlined-basic"
              label="Note"
              variant="outlined"
              type={"text"}
            />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default AddLender;
