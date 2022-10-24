import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { BiEditAlt } from "react-icons/bi";
import { HiPlus } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";
import CreateLenderFilter from "./Modals/CreateLenderFilter";

const LenderFilter = () => {
  const [showLenderAddModal, setShowLenderAddModal] = useState(false);

  const handleCloseLenderAddModal = () => setShowLenderAddModal(false);
  const handleShowLenderAddModal = () => setShowLenderAddModal(true);
  return (
    <div className="p-3">
      <div className="bg-white p-3">
        <div className="border-bottom pb-2 d-flex justify-content-between">
          <h5>Lender Filter</h5>
          <button
            onClick={handleShowLenderAddModal}
            className="add-new-button px-2"
          >
            <HiPlus className="me-1" />
            Create Lender Filter
          </button>
        </div>
        <Modal
          className="email-modal"
          show={showLenderAddModal}
          onHide={handleCloseLenderAddModal}
        >
          <CreateLenderFilter></CreateLenderFilter>
        </Modal>
        <table className="table">
          <thead>
            <tr>
              <th>SL</th>
              <th>Category</th>
              <th>Name</th>
              <th>Description</th>
              <th>Created At</th>
              <th>Status</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-3">1</td>
              <td className="py-3">Type of Loan</td>
              <td className="py-3">Type of Loan</td>
              <td className="py-3">Type of Loan</td>
              <td className="py-3">24/10/2022</td>
              <td className="py-3">
                <span className="status-de-active px-2 py-1 rounded">
                  Inactive
                </span>
              </td>
              <td className="py-3 text-center">
                <a title="Edit" href="{}">
                  <BiEditAlt className="fs-5 text-info" />
                </a>
                <a title="Delete" className="ms-3" href="{}">
                  <RiDeleteBin6Line className="fs-5 text-danger" />
                </a>
              </td>
            </tr>
            <tr>
              <td className="py-3">2</td>
              <td className="py-3">Credit Score</td>
              <td className="py-3">Credit Score</td>
              <td className="py-3">Credit Score</td>
              <td className="py-3">29/10/2022</td>
              <td className="py-3">
                <span className="status-active px-2 py-1 rounded">Active</span>
              </td>
              <td className="py-3 text-center">
                <a title="Edit" href="{}">
                  <BiEditAlt className="fs-5 text-info" />
                </a>
                <a title="Delete" className="ms-3" href="{}">
                  <RiDeleteBin6Line className="fs-5 text-danger" />
                </a>
              </td>
            </tr>
            <tr>
              <td className="py-3">3</td>
              <td className="py-3">Minimum Revenue</td>
              <td className="py-3">Minimum Revenue</td>
              <td className="py-3">Minimum Revenue</td>
              <td className="py-3">2/12/2022</td>
              <td className="py-3">
                <span className="status-active px-2 py-1 rounded">Active</span>
              </td>
              <td className="py-3 text-center">
                <a title="Edit" href="{}">
                  <BiEditAlt className="fs-5 text-info" />
                </a>
                <a title="Delete" className="ms-3" href="{}">
                  <RiDeleteBin6Line className="fs-5 text-danger" />
                </a>
              </td>
            </tr>
            <tr>
              <td className="py-3">4</td>
              <td className="py-3">Lender Grading</td>
              <td className="py-3">Lender Grading</td>
              <td className="py-3">Lender Grading</td>
              <td className="py-3">24/10/2022</td>
              <td className="py-3">
                <span className="status-de-active px-2 py-1 rounded">
                  Inactive
                </span>
              </td>
              <td className="py-3 text-center">
                <a title="Edit" href="{}">
                  <BiEditAlt className="fs-5 text-info" />
                </a>
                <a title="Delete" className="ms-3" href="{}">
                  <RiDeleteBin6Line className="fs-5 text-danger" />
                </a>
              </td>
            </tr>
            <tr>
              <td className="py-3">5</td>
              <td className="py-3">Type of Loan</td>
              <td className="py-3">Type of Loan</td>
              <td className="py-3">Type of Loan</td>
              <td className="py-3">24/10/2022</td>
              <td className="py-3">
                <span className="status-active px-2 py-1 rounded">Active</span>
              </td>
              <td className="py-3 text-center">
                <a title="Edit" href="{}">
                  <BiEditAlt className="fs-5 text-info" />
                </a>
                <a title="Delete" className="ms-3" href="{}">
                  <RiDeleteBin6Line className="fs-5 text-danger" />
                </a>
              </td>
            </tr>
            <tr>
              <td className="py-3">6</td>
              <td className="py-3">Monthly Deposit</td>
              <td className="py-3">Monthly Deposit</td>
              <td className="py-3">Monthly Deposit</td>
              <td className="py-3">01/01/2022</td>
              <td className="py-3">
                <span className="status-active px-2 py-1 rounded">Active</span>
              </td>
              <td className="py-3 text-center">
                <a title="Edit" href="{}">
                  <BiEditAlt className="fs-5 text-info" />
                </a>
                <a title="Delete" className="ms-3" href="{}">
                  <RiDeleteBin6Line className="fs-5 text-danger" />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LenderFilter;
