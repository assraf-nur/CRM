import React from "react";
import "../CSS/Style.css";
import { Form } from "react-bootstrap";
import { HiPlus } from "react-icons/hi";

const Contact = () => {
  return (
    <div className="p-3">
      <div className="upper-option">
        <button className="add-new-button px-3">
          <HiPlus />
          Add New Contact
        </button>
        <div class="dropdown">
          <button
            class="upper-toggle dropdown-toggle px-3"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Select a Team
          </button>
          <div class="dropdown-menu mt-2" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="{}">
              Action
            </a>
            <a class="dropdown-item" href="{}">
              Another action
            </a>
            <a class="dropdown-item" href="{}">
              Something else here
            </a>
          </div>
        </div>
        <div class="dropdown">
          <button
            class="upper-toggle dropdown-toggle px-3"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Select a Collaborator
          </button>
          <div class="dropdown-menu mt-2" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="{}">
              Action
            </a>
            <a class="dropdown-item" href="{}">
              Another action
            </a>
            <a class="dropdown-item" href="{}">
              Something else here
            </a>
          </div>
        </div>
        <div class="dropdown">
          <button
            class="upper-toggle dropdown-toggle px-3"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Loan Status
          </button>
          <div class="dropdown-menu mt-2" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="{}">
              Action
            </a>
            <a class="dropdown-item" href="{}">
              Another action
            </a>
            <a class="dropdown-item" href="{}">
              Something else here
            </a>
          </div>
        </div>
        <div class="dropdown">
          <button
            class="upper-toggle dropdown-toggle px-3"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Application Status
          </button>
          <div class="dropdown-menu mt-2" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="{}">
              Action
            </a>
            <a class="dropdown-item" href="{}">
              Another action
            </a>
            <a class="dropdown-item" href="{}">
              Something else here
            </a>
          </div>
        </div>
        <div class="dropdown">
          <button
            class="upper-toggle dropdown-toggle px-3"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Types of Loan
          </button>
          <div class="dropdown-menu mt-2" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="{}">
              Action
            </a>
            <a class="dropdown-item" href="{}">
              Another action
            </a>
            <a class="dropdown-item" href="{}">
              Something else here
            </a>
          </div>
        </div>
      </div>
      <div className="bg-white mt-3 p-3 contact-form">
        <h4 className="mt-2">Add Contact</h4>

        <form className="mt-2 p-1">
          <div className="row gap-1">
            <div className="col-xl">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-1">Borrower's First Name</Form.Label>
                <Form.Control className="py-2" type="text" placeholder="Enter first name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-1">Work Number</Form.Label>
                <Form.Control className="py-2" type="number" placeholder="Number" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-1">City</Form.Label>
                <Form.Control className="py-2" type="text" placeholder="" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-1">Loan Amount</Form.Label>
                <Form.Control className="py-2" type="number" placeholder="Number" />
              </Form.Group>
            </div>
            <div className="col-xl">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-1">Borrower's Last Name</Form.Label>
                <Form.Control className="py-2" type="text" placeholder="Enter last name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-1">Email *</Form.Label>
                <Form.Control className="py-2" type="email" placeholder="Enter your e-mail" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-1">State</Form.Label>
                <Form.Control className="py-2" type="text" placeholder="" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-1">Any Issues</Form.Label>
                <Form.Control className="py-2" type="text" placeholder="" />
              </Form.Group>
            </div>
            <div className="col-xl">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-1">Cell Number * *</Form.Label>
                <Form.Control className="py-2" type="number" placeholder="Number" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-1">Address</Form.Label>
                <Form.Control className="py-2" type="text" placeholder="Your address" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-1">Zip Code</Form.Label>
                <Form.Control className="py-2" type="number" placeholder="Code" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-1">Any Specific Questions</Form.Label>
                <Form.Control className="py-2" type="text" placeholder="Your question" />
              </Form.Group>
            </div>
            <div className="col-xl">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-1">Cell Number *</Form.Label>
                <Form.Control className="py-2" type="number" placeholder="Number" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-1">Loan Status</Form.Label>
                <Form.Control className="py-2" type="text" placeholder="Status" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-1">Lead Source</Form.Label>
                <Form.Control className="py-2" type="text" placeholder="Source" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-1">Set Team *</Form.Label>
                <Form.Control className="py-2" type="text" placeholder="Team" />
              </Form.Group>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
