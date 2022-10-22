import React from "react";
import { HiPlus } from "react-icons/hi";
import { Form } from "react-bootstrap";
import { MdCancel } from 'react-icons/md';

const Appointments = () => {
  return (
    <div>
      <Form>
        <div>
          <button className="add-new-button px-2 py-1">
            <HiPlus />
            Add Appointments
          </button>
          <Form.Group className="mb-2 mt-3" controlId="formBasicEmail">
            <Form.Label className="mb-0">What</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label className="mb-0">When</Form.Label>
            <div className="d-flex gap-2">
              <Form.Control className="col-sm" type="date" placeholder="" />
              <Form.Control className="col-sm" type="time" placeholder="" />
            </div>
          </Form.Group>
          <Form.Label className="mb-1">Assigned To</Form.Label>
          <Form.Select
            className="text-grey mb-2"
            aria-label="Floating label select example"
          >
            <option>--Select--</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <div>
            <label for="exampleInputSummery" class="form-label mb-0">
              Details
            </label>
            <textarea
              class="form-control"
              placeholder="Details"
              id="floatingTextarea2"
              style={{ height: "100px" }}
            ></textarea>
          </div>
          <div className="mt-3">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                <strong>Email to Team members</strong>
              </label>
            </div>
            <div class="form-check mt-2">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                <strong>Email to Contact</strong>
              </label>
            </div>
          </div>
        </div>
      </Form>
      <div className="mt-3">
        <button className="add-new-button px-2 py-1 bg-info">
          <HiPlus />
          Set Appointment
        </button>

        <button className="add-new-button px-2 py-1 ms-2 bg-danger">
          <MdCancel className="me-1 mb-1" />
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Appointments;
