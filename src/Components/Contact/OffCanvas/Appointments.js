import React from "react";
import { HiDotsVertical, HiPlus } from "react-icons/hi";
import { Card, Form } from "react-bootstrap";
import { MdCancel, MdDelete } from "react-icons/md";
import { FaEdit } from 'react-icons/fa';

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
            <Form.Control className="col-sm" type="date" placeholder="" />
            <div className="d-flex gap-2 mt-2">
              <div className="w-100">
                <Form.Label className="mb-0">From</Form.Label>
                <Form.Control className="col-sm" type="time" placeholder="" />
              </div>
              <div className="w-100">
                <Form.Label className="mb-0">To</Form.Label>
                <Form.Control className="col-sm" type="time" placeholder="" />
              </div>
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
            <label for="exampleInputSummery" className="form-label mb-0">
              Details
            </label>
            <textarea
              className="form-control"
              placeholder="Details"
              id="floatingTextarea2"
              style={{ height: "100px" }}
            ></textarea>
          </div>
          <div className="mt-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                <strong>Email to Team members</strong>
              </label>
            </div>
            <div className="form-check mt-2">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label className="form-check-label" for="flexCheckChecked">
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

      {/* Appointment List */}
      <div className="mt-4">
        <Card style={{ width: "100%" }}>
          <Card.Body>
            <div className="note-upper-part">
              <div className="">
                <h6>
                  {" "}
                  <strong>Date:</strong> 22/10/2022
                </h6>
              </div>

              <div className="dropdown">
                <button
                  className="note-option-button"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <HiDotsVertical className="fs-5" />
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="{#}">
                      <FaEdit className="mb-1 me-1" /> Edit
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="{#}">
                      {" "}
                      <MdDelete className="mb-1 me-1" /> Delete
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <h6>
              {" "}
              <strong>Start Time:</strong> 10.00 AM
            </h6>
            <h6>
              {" "}
              <strong>End Time:</strong> 1.00 PM
            </h6>
            <h6>
              {" "}
              <strong>Team:</strong>{" "}
              <span>Rifa</span>{" "}
            </h6>
            <h6 className="mt-3">
              {" "}
              <strong>Description:</strong>
            </h6>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="mt-4">
        <Card style={{ width: "100%" }}>
          <Card.Body>
            <div className="note-upper-part">
              <div className="">
                <h6>
                  {" "}
                  <strong>Date:</strong> 22/10/2022
                </h6>
              </div>

              <div className="dropdown">
                <button
                  className="note-option-button"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <HiDotsVertical className="fs-5" />
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="{#}">
                      <FaEdit className="mb-1 me-1" /> Edit
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="{#}">
                      {" "}
                      <MdDelete className="mb-1 me-1" /> Delete
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <h6>
              {" "}
              <strong>Start Time:</strong> 10.00 AM
            </h6>
            <h6>
              {" "}
              <strong>End Time:</strong> 1.00 PM
            </h6>
            <h6>
              {" "}
              <strong>Team:</strong>{" "}
              <span>Rifa</span>{" "}
            </h6>
            <h6 className="mt-3">
              {" "}
              <strong>Description:</strong>
            </h6>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="mt-4">
        <Card style={{ width: "100%" }}>
          <Card.Body>
            <div className="note-upper-part">
              <div className="">
                <h6>
                  {" "}
                  <strong>Date:</strong> 22/10/2022
                </h6>
              </div>

              <div className="dropdown">
                <button
                  className="note-option-button"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <HiDotsVertical className="fs-5" />
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="{#}">
                      <FaEdit className="mb-1 me-1" /> Edit
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="{#}">
                      {" "}
                      <MdDelete className="mb-1 me-1" /> Delete
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <h6>
              {" "}
              <strong>Start Time:</strong> 10.00 AM
            </h6>
            <h6>
              {" "}
              <strong>End Time:</strong> 1.00 PM
            </h6>
            <h6>
              {" "}
              <strong>Team:</strong>{" "}
              <span>Rifa</span>{" "}
            </h6>
            <h6 className="mt-3">
              {" "}
              <strong>Description:</strong>
            </h6>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="mt-4">
        <Card style={{ width: "100%" }}>
          <Card.Body>
            <div className="note-upper-part">
              <div className="">
                <h6>
                  {" "}
                  <strong>Date:</strong> 22/10/2022
                </h6>
              </div>

              <div className="dropdown">
                <button
                  className="note-option-button"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <HiDotsVertical className="fs-5" />
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="{#}">
                      <FaEdit className="mb-1 me-1" /> Edit
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="{#}">
                      {" "}
                      <MdDelete className="mb-1 me-1" /> Delete
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <h6>
              {" "}
              <strong>Start Time:</strong> 10.00 AM
            </h6>
            <h6>
              {" "}
              <strong>End Time:</strong> 1.00 PM
            </h6>
            <h6>
              {" "}
              <strong>Team:</strong>{" "}
              <span>Rifa</span>{" "}
            </h6>
            <h6 className="mt-3">
              {" "}
              <strong>Description:</strong>
            </h6>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Appointments;
