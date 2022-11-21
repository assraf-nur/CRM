import React from "react";
import { Form, Modal } from "react-bootstrap";

const AddUserRole = () => {
  return (
    <div className="mt-0">
      <Modal.Header className="canvas-banner" closeButton>
        <Modal.Title id="example-custom-modal-styling-title">Edit User Role</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-md">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="mb-0">Title</Form.Label>
              <Form.Control className="py-2" type="email" placeholder="Enter title" />
            </Form.Group>
          </div>
          <div className="col-md">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="mb-0">Description</Form.Label>
              <Form.Control className="py-2" type="email" placeholder="Enter description" />
            </Form.Group>
          </div>
        </div>

        <div>

        </div>

        {/* <div className="mt-5">
          <div className="row">
            <div className="col-md">
              <h4 className="fw-bold">
                Available Role{" "}
                <span className="fs-6">
                  {" "}
                  <small>Select role and click arrow</small>{" "}
                </span>{" "}
              </h4>
              <div id="nonSelected" style={{ height: "450px" }} className="border p-3 rounded overflow-auto">
                <div className="border rounded mb-2 p-2">
                  <h5 className="mb-0">Dashboard Data View</h5>
                </div>
                <div className="border rounded mb-2 p-2">
                  <h5 className="mb-0">User Manage</h5>
                </div>
                <div className="border rounded mb-2 p-2">
                  <h5 className="mb-0">User Role Manage</h5>
                </div>
                <div className="border rounded mb-2 p-2">
                  <h5 className="mb-0">User Role Create</h5>
                </div>
                <div className="border rounded mb-2 p-2">
                  <h5 className="mb-0">User Role Edit</h5>
                </div>
                <div className="border rounded mb-2 p-2">
                  <h5 className="mb-0">User Role Delete</h5>
                </div>
                <div className="border rounded mb-2 p-2">
                  <h5 className="mb-0">Contact Report</h5>
                </div>
                <div className="border rounded mb-2 p-2">
                  <h5 className="mb-0">Team Manage</h5>
                </div>
                <div className="border rounded mb-2 p-2">
                  <h5 className="mb-0">Team Edit</h5>
                </div>
                <div className="border rounded mb-2 p-2">
                  <h5 className="mb-0">Team Delete</h5>
                </div>
                <div className="border rounded mb-2 p-2">
                  <h5 className="mb-0">Team Appointment List</h5>
                </div>
                <div className="border rounded mb-2 p-2">
                  <h5 className="mb-0">My Appointment List</h5>
                </div>
              </div>
            </div>
            <div className="col-md">
              <h4 className="fw-bold">Assigned Role</h4>
              <div id="selected" style={{ height: "450px" }} className="border p-3 rounded overflow-auto"></div>
            </div>
          </div>

          <div className="d-flex mt-3 gap-5 justify-content-center">
            <button className="arrow-button px-3 py-2" type="submit">
              <ImArrowRight className="" />
            </button>
            <button className="arrow-button px-3 py-2" type="submit">
              <ImArrowLeft className="" />
            </button>
          </div>

          <div className="mt-4 d-flex justify-content-center">
            <button className="role-update-button px-3 py-2" type="submit">
              Update Role
            </button>
          </div>
        </div> */}
      </Modal.Body>
    </div>
  );
};

export default AddUserRole;
