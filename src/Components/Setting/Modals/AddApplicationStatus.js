import React from "react";
import { Form, Modal } from "react-bootstrap";

const AddApplicationStatus = () => {
  return (
    <div className="">
      <Modal.Header className="canvas-banner" closeButton>
        <Modal.Title>Add Application Status</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-2 mt-3" controlId="formBasicEmail">
          <Form.Control className="rounded" type="text" placeholder="Add New Application Status" />
          <div className="mt-3">
            <button className="add-new-button px-3 py-2 bg-info">Add New</button>
          </div>
        </Form.Group>
      </Modal.Body>
    </div>
  );
};

export default AddApplicationStatus;
