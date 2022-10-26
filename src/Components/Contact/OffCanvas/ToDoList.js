import React from "react";
import { Card } from 'react-bootstrap';
import { HiDotsVertical } from "react-icons/hi";
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { MdCancel } from 'react-icons/md';
import { HiPlus } from 'react-icons/hi';
import { Form } from 'react-bootstrap';

const ToDoList = () => {
  return (
    <div className="ms-3 mt-3">
      <div>
        <button className="add-new-button px-2 py-2">
          <HiPlus />
          Add To-Do
        </button>
        <form className="mt-4">
          <div className="mb-2">
            <label for="exampleInputSummery" className="form-label mb-0">
              Summery
            </label>
            <input
              type="text"
              className="form-control mt-0 rounded"
              id="exampleInputSummery"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-2">
            <label for="exampleInputPriority" className="form-label mb-0">
              Priority
            </label>
            <input
              type="text"
              className="form-control mt-0 rounded"
              id="exampleInputPriority"
              aria-describedby="emailHelp"
            />
          </div>
          <div>
            <Form.Label className="mb-1">Assigned To</Form.Label>
            <Form.Select
              className="py-2 fs-6 text-grey mb-2 rounded"
              aria-label="Floating label select example"
            >
              <option>--Select--</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </div>
          <div className="mb-2">
            <label for="exampleInputDate" className="form-label mb-0">
              Due Date
            </label>
            <input
              type="date"
              className="form-control mt-0 rounded"
              id="exampleInputDate"
              aria-describedby="emailHelp"
            />
          </div>

          <div>
            <label for="exampleInputSummery" className="form-label mb-0">
              Details
            </label>
            <textarea
              className="form-control rounded"
              placeholder="Details"
              id="floatingTextarea2"
              style={{ height: "100px" }}
            ></textarea>
          </div>
          <div className="mt-3">
            <button className="add-new-button px-2 py-1 bg-info">
              <HiPlus />
              Add
            </button>

            <button className="add-new-button px-2 py-1 ms-2 bg-danger">
              <MdCancel className="me-1 mb-1" />
              Cancel
            </button>
          </div>
        </form>
      </div>
      <div className="toDo-list mt-3">
        <div className="mt-4">
          <Card style={{ width: "100%" }}>
            <Card.Body>
              <div className="note-upper-part">
                <div className="">
                  <h6>
                    {" "}
                    <strong>Assigned To:</strong> Anne495{" "}
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
                <strong>Priority:</strong> Low{" "}
              </h6>
              <h6>
                {" "}
                <strong>Due Date:</strong> 27-10-2022{" "}
              </h6>
              <h6>
                {" "}
                <strong>Status:</strong>{" "}
                <span className="status-active px-1 py-1 rounded">
                  completed
                </span>{" "}
              </h6>
              <h6 className="mt-3">
                {" "}
                <strong>Summery:</strong>
              </h6>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <h6 className="mt-3">
                {" "}
                <strong>Details:</strong>
              </h6>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
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
                    <strong>Assigned To:</strong> Anne495{" "}
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
                <strong>Priority:</strong> Low{" "}
              </h6>
              <h6>
                {" "}
                <strong>Due Date:</strong> 27-10-2022{" "}
              </h6>
              <h6>
                {" "}
                <strong>Status:</strong>{" "}
                <span className="status-active px-1 py-1 rounded">
                  completed
                </span>{" "}
              </h6>
              <h6 className="mt-3">
                {" "}
                <strong>Summery:</strong>
              </h6>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <h6 className="mt-3">
                {" "}
                <strong>Details:</strong>
              </h6>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
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
                    <strong>Assigned To:</strong> Anne495{" "}
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
                <strong>Priority:</strong> Low{" "}
              </h6>
              <h6>
                {" "}
                <strong>Due Date:</strong> 27-10-2022{" "}
              </h6>
              <h6>
                {" "}
                <strong>Status:</strong>{" "}
                <span className="status-active px-1 py-1 rounded">
                  completed
                </span>{" "}
              </h6>
              <h6 className="mt-3">
                {" "}
                <strong>Summery:</strong>
              </h6>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <h6 className="mt-3">
                {" "}
                <strong>Details:</strong>
              </h6>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
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
                    <strong>Assigned To:</strong> Anne495{" "}
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
                <strong>Priority:</strong> Low{" "}
              </h6>
              <h6>
                {" "}
                <strong>Due Date:</strong> 27-10-2022{" "}
              </h6>
              <h6>
                {" "}
                <strong>Status:</strong>{" "}
                <span className="status-active px-1 py-1 rounded">
                  completed
                </span>{" "}
              </h6>
              <h6 className="mt-3">
                {" "}
                <strong>Summery:</strong>
              </h6>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <h6 className="mt-3">
                {" "}
                <strong>Details:</strong>
              </h6>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
