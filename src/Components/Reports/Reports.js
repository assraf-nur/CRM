import React from "react";
import { Form } from "react-bootstrap";
import "../CSS/Style.css";

const Reports = () => {
  return (
    <div className="p-3">
      <div className="p-3 bg-white">
        <h5>Add Report</h5>
        <form>
          <div className="row gap-2 mt-3">
            <div className="col-xl">
              <Form.Label className="mb-1">Status</Form.Label>
              <Form.Select
                className="py-2 fs-6 text-grey mb-3"
                aria-label="Floating label select example"
                placeholder="Status"
              >
                <option value="Select">Select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>

              <Form.Label className="mb-1">Types of Loan</Form.Label>
              <Form.Select
                className="py-2 fs-6 text-grey mb-3"
                aria-label="Floating label select example"
              >
                <option value="Select">Select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>

              <Form.Label className="mb-1">Contact</Form.Label>
              <Form.Select
                className="py-2 fs-6 text-grey mb-3"
                aria-label="Floating label select example"
                placeholder="Status"
              >
                <option value="Select">Select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
            <div className="col-xl">
              <Form.Label className="mb-1">Source</Form.Label>
              <Form.Select
                className="py-2 fs-6 text-grey mb-3"
                aria-label="Floating label select example"
                placeholder="Status"
              >
                <option value="Select">Select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              <Form.Label className="mb-1">Loan Progress</Form.Label>
              <Form.Select
                className="py-2 fs-6 text-grey mb-3"
                aria-label="Floating label select example"
                placeholder="Status"
              >
                <option value="Select">Select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
            <div className="col-xl">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-1">From Date</Form.Label>
                <Form.Control className="py-2" type="date" placeholder="" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-1">To Date</Form.Label>
                <Form.Control className="py-2" type="date" placeholder="" />
              </Form.Group>
            </div>
          </div>
          <button className="submit-button px-4 py-2">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Reports;
