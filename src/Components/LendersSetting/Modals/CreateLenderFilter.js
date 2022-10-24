import React from "react";
import { Form, Modal } from "react-bootstrap";

const CreateLenderFilter = () => {
  return (
    <div className="">
      <Modal.Header className="canvas-banner" closeButton>
        <Modal.Title>Create Lender Filter</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-2 mt-3" controlId="formBasicEmail">
          <Form.Select  aria-label="Default select example">
            <option>Select Lender Category</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <Form.Control className="mt-3" type="text" placeholder="Lender Category Name" />
          <div>
            <div className="mt-3 mx-auto">
              <textarea
                class="form-control"
                placeholder="Description"
                id="floatingTextarea2"
                style={{ height: "100px" }}
              ></textarea>
            </div>
          </div>
          <div class="form-check mt-3">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Active
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label class="form-check-label" for="flexRadioDefault2">
              Inactive
            </label>
          </div>
          <div className="mt-3">
            <button className="add-new-button px-3 py-2 bg-info">
              Submit
            </button>
          </div>
        </Form.Group>
      </Modal.Body>
    </div>
  );
};

export default CreateLenderFilter;
