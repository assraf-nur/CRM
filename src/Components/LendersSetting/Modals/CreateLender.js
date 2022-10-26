import React from "react";
import { Form, Modal } from "react-bootstrap";

const CreateLender = () => {
  return (
    <div className="">
      <Modal.Header className="canvas-banner" closeButton>
        <Modal.Title>Create Lender Category</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-2 mt-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Lender Category Name" />
          <div>
            <div className="mt-2 mx-auto">
              <textarea
                className="form-control"
                placeholder="Description"
                id="floatingTextarea2"
                style={{ height: "100px" }}
              ></textarea>
            </div>
          </div>
          <div className="form-check mt-3">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" for="flexRadioDefault1">
              Active
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label className="form-check-label" for="flexRadioDefault2">
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

export default CreateLender;
