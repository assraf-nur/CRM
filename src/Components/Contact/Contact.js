import React from "react";
import "../CSS/Style.css";
import { FloatingLabel, Form } from "react-bootstrap";
import { HiPlus } from "react-icons/hi";
import { FaRegListAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="p-3">
      <div className="upper-option">
        <button className="add-new-button px-3">
          <HiPlus />
          Add New Contact
        </button>
        <div className="dropdown">
          <button
            className="upper-toggle dropdown-toggle px-3"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Select a Team
          </button>
          <div className="dropdown-menu mt-2" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="{}">
              Action
            </a>
            <a className="dropdown-item" href="{}">
              Another action
            </a>
            <a className="dropdown-item" href="{}">
              Something else here
            </a>
          </div>
        </div>
        <div className="dropdown">
          <button
            className="upper-toggle dropdown-toggle px-3"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Select a Collaborator
          </button>
          <div className="dropdown-menu mt-2" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="{}">
              Action
            </a>
            <a className="dropdown-item" href="{}">
              Another action
            </a>
            <a className="dropdown-item" href="{}">
              Something else here
            </a>
          </div>
        </div>
        <div className="dropdown">
          <button
            className="upper-toggle dropdown-toggle px-3"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Loan Status
          </button>
          <div className="dropdown-menu mt-2" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="{}">
              Action
            </a>
            <a className="dropdown-item" href="{}">
              Another action
            </a>
            <a className="dropdown-item" href="{}">
              Something else here
            </a>
          </div>
        </div>
        <div class="dropdown">
          <button
            className="upper-toggle dropdown-toggle px-3"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Application Status
          </button>
          <div className="dropdown-menu mt-2" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="{}">
              Action
            </a>
            <a className="dropdown-item" href="{}">
              Another action
            </a>
            <a className="dropdown-item" href="{}">
              Something else here
            </a>
          </div>
        </div>
        <div class="dropdown">
          <button
            className="upper-toggle dropdown-toggle px-3"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Types of Loan
          </button>
          <div className="dropdown-menu mt-2" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="{}">
              Action
            </a>
            <a className="dropdown-item" href="{}">
              Another action
            </a>
            <a className="dropdown-item" href="{}">
              Something else here
            </a>
          </div>
        </div>
      </div>
      <div className="bg-white mt-3 p-3 contact-form">
        <div className="form-header">
          <h4 className="mt-2">Add Contact</h4>
          <Link className="contact-list-button" to='/users'> <FaRegListAlt className="fs-6 me-1 mb-1"/> Contact List</Link>
        </div>

        <form className="mt-2 p-1">
          <div className="row gap-1">
            <div className="col-xl">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-1">Borrower's First Name</Form.Label>
                <Form.Control
                  className="py-2"
                  type="text"
                  placeholder="Enter first name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-1">Work Number</Form.Label>
                <Form.Control
                  className="py-2"
                  type="number"
                  placeholder="Number"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-1">City</Form.Label>
                <Form.Control className="py-2" type="text" placeholder="" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-1">Loan Amount</Form.Label>
                <Form.Control
                  className="py-2"
                  type="number"
                  placeholder="Number"
                />
              </Form.Group>
            </div>
            <div className="col-xl">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-1">Borrower's Last Name</Form.Label>
                <Form.Control
                  className="py-2"
                  type="text"
                  placeholder="Enter last name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-1">Email *</Form.Label>
                <Form.Control
                  className="py-2"
                  type="email"
                  placeholder="Enter your e-mail"
                />
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
                <Form.Label className="mb-1">Cell Number *</Form.Label>
                <Form.Control
                  className="py-2"
                  type="number"
                  placeholder="Number"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-1">Address</Form.Label>
                <Form.Control
                  className="py-2"
                  type="text"
                  placeholder="Your address"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-1">Zip Code</Form.Label>
                <Form.Control
                  className="py-2"
                  type="number"
                  placeholder="Code"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-1">Any Specific Questions</Form.Label>
                <Form.Control
                  className="py-2"
                  type="text"
                  placeholder="Your question"
                />
              </Form.Group>
            </div>
            <div className="col-xl">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-1">Cell Number *</Form.Label>
                <Form.Control
                  className="py-2"
                  type="number"
                  placeholder="Number"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-1">Loan Status</Form.Label>
                <Form.Control
                  className="py-2"
                  type="text"
                  placeholder="Status"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-1">Lead Source</Form.Label>
                <Form.Control
                  className="py-2"
                  type="text"
                  placeholder="Source"
                />
              </Form.Group>
              {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-1">Set Team *</Form.Label>
                <Form.Control className="py-2" type="text" placeholder="Team" />
              </Form.Group> */}
              <Form.Label className="mb-1">Set Team *</Form.Label>
              <Form.Select
                className="py-2 fs-6 text-grey"
                aria-label="Floating label select example"
              >
                <option>--Select--</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
          </div>

          <div className="row p-1 mt-0">
            <div className="col-xl">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-1">Business Name</Form.Label>
                <Form.Control
                  className="py-2"
                  type="text"
                  placeholder="Business name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-1">Personal Credit Score</Form.Label>
                <Form.Control
                  className="py-2"
                  type="text"
                  placeholder="Score"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-1">Date of Birth</Form.Label>
                <Form.Control className="py-2" type="date" placeholder="" />
              </Form.Group>
            </div>
            <div className="col-xl">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-1">Business Address</Form.Label>
                <Form.Control
                  className="py-2"
                  type="text"
                  placeholder="Address"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-1">Business Credit Score</Form.Label>
                <Form.Control
                  className="py-2"
                  type="text"
                  placeholder="Score"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-1">
                  Borrower's Part Time Income
                </Form.Label>
                <Form.Control
                  className="py-2"
                  type="text"
                  placeholder="Income"
                />
              </Form.Group>
            </div>
            <div className="col-xl">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-1">Monthly Revenue</Form.Label>
                <Form.Control
                  className="py-2"
                  type="text"
                  placeholder="Revenue"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-1">Age of the Business</Form.Label>
                <Form.Control
                  className="py-2"
                  type="text"
                  placeholder="Age of business"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-1">Federal Tax ID</Form.Label>
                <Form.Control
                  className="py-2"
                  type="text"
                  placeholder="Tax ID"
                />
              </Form.Group>
            </div>
            <div className="col-xl">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-1">Down Payment</Form.Label>
                <Form.Control className="py-2" type="number" placeholder="" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-1">Work Number</Form.Label>
                <Form.Control className="py-2" type="number" placeholder="" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-1">Social Security Number</Form.Label>
                <Form.Control className="py-2" type="number" placeholder="" />
              </Form.Group>
            </div>
          </div>

          <div className="row p-1">
            <div className="col-xl">
              <Form.Label className="mb-1">Note</Form.Label>
              <FloatingLabel controlId="floatingTextarea2">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "125px" }}
                />
              </FloatingLabel>
            </div>
            <div className="col-xl-3">
              <Form.Label className="mb-1">Set Collaborator</Form.Label>
              <Form.Select
                className="py-2 fs-6 text-grey mb-3"
                aria-label="Floating label select example"
              >
                <option>--Select--</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-1">Fax Number</Form.Label>
                <Form.Control
                  className="py-2"
                  type="number"
                  placeholder="Fax number"
                />
              </Form.Group>
            </div>
          </div>

          <button className="mx-auto submit-button py-2 px-4" type="">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
