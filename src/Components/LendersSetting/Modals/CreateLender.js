import React from "react";
import { Form, Modal } from "react-bootstrap";

const CreateLender = () => {
  return (
    <div className="">
      <Modal.Header className="canvas-banner" closeButton>
        <Modal.Title>Send E-Mail</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-2 mt-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Thank you for your Support" />
        </Form.Group>
        <div>
          <div className="d-flex gap-2 mt-2">
            <div className="w-100">
              <Form.Label className="mb-1">Select Message Template</Form.Label>
              <Form.Select
                className="fs-6 text-grey mb-2"
                aria-label="Floating label select example"
              >
                <option>--Select--</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
            <div className="w-100">
              <Form.Label className="mb-1">Personalize Tag</Form.Label>
              <Form.Select
                className="fs-6 text-grey mb-2"
                aria-label="Floating label select example"
              >
                <option>--Select--</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
          </div>
          <div className="mt-2 mx-auto">
            <textarea
              class="form-control"
              placeholder="Message"
              id="floatingTextarea2"
              style={{ height: "100px" }}
            ></textarea>
          </div>
          <div className="mt-3">
            <button className="add-new-button px-2 py-1 bg-success">
              Send
            </button>

            <button className="add-new-button px-2 py-1 ms-2 bg-danger">
              Cancel
            </button>
          </div>
        </div>
      </Modal.Body>
    </div>
  );
};

export default CreateLender;
