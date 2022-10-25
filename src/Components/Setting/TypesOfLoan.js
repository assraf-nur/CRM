import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { BiEditAlt } from "react-icons/bi";
import { HiPlus } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";
import AddTypesOfLoan from "./Modals/AddTypesOfLoan";

const TypesOfLoan = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  return (
    <div className="p-3">
      <div className="bg-white p-3">
        <div className="border-bottom pb-2 d-flex justify-content-between">
          <h5>Types of Loan</h5>
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
          <AddTypesOfLoan></AddTypesOfLoan>
        </Modal>

        <div>
          <table className="table border w-25 mx-auto mt-4">
            <thead>
              <tr>
                <th>Name</th>
                <th className="text-end">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3">Working Capital Loan</td>
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
                <td className="py-3">Equipments Loan</td>
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
                <td className="py-3">Lite DOC Commercial Loan</td>
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
                <td className="py-3">Trucking Loan</td>
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
                <td className="py-3">Business Loan</td>
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
                <td className="py-3">Refinance</td>
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

export default TypesOfLoan;
