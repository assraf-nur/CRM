import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { BiEditAlt } from "react-icons/bi";
import { HiPlus } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";
import AddMilestone from "./Modals/AddMilestone";

const Milestone = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  return (
    <div className="p-3">
      <div className="bg-white p-3">
        <div className="border-bottom pb-2 d-flex justify-content-between">
          <h5>Milestone</h5>
          <button onClick={handleShowModal} className="add-new-button px-2">
            <HiPlus className="me-1" />
            Add New
          </button>
        </div>
        <Modal
          className="email-modal"
          show={showModal}
          onHide={handleCloseModal}
        >
          <AddMilestone></AddMilestone>
        </Modal>

        <div>
          <table className="table table-striped border w-25 mx-auto mt-4">
            <thead className="bg-dark text-white">
              <tr>
                <th>Name</th>
                <th className="text-end">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3">Doc Submitted</td>
                <td className="py-3 text-end">
                  <a title="Edit" href="{}">
                    <BiEditAlt className="fs-5 text-info" />
                  </a>
                  <a title="Delete" className="ms-3" href="{}">
                    <RiDeleteBin6Line className="fs-5 text-danger" />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="py-3">Loan Application Complete</td>
                <td className="py-3 text-end">
                  <a title="Edit" href="{}">
                    <BiEditAlt className="fs-5 text-info" />
                  </a>
                  <a title="Delete" className="ms-3" href="{}">
                    <RiDeleteBin6Line className="fs-5 text-danger" />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="py-3">Submitted File for Processing</td>
                <td className="py-3 text-end">
                  <a title="Edit" href="{}">
                    <BiEditAlt className="fs-5 text-info" />
                  </a>
                  <a title="Delete" className="ms-3" href="{}">
                    <RiDeleteBin6Line className="fs-5 text-danger" />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="py-3">Loan Submitted to the Bank</td>
                <td className="py-3 text-end">
                  <a title="Edit" href="{}">
                    <BiEditAlt className="fs-5 text-info" />
                  </a>
                  <a title="Delete" className="ms-3" href="{}">
                    <RiDeleteBin6Line className="fs-5 text-danger" />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="py-3">Loan Suspended</td>
                <td className="py-3 text-end">
                  <a title="Edit" href="{}">
                    <BiEditAlt className="fs-5 text-info" />
                  </a>
                  <a title="Delete" className="ms-3" href="{}">
                    <RiDeleteBin6Line className="fs-5 text-danger" />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="py-3">Clear to close</td>
                <td className="py-3 text-end">
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
    </div>
  );
};

export default Milestone;
