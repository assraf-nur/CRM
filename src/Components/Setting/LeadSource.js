import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { BiEditAlt } from "react-icons/bi";
import { HiPlus } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";
import AddLeadSource from "./Modals/AddLeadSource";

const LeadSource = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  return (
    <div className="p-3">
      <div className="bg-white p-3">
        <div className="border-bottom pb-2 d-flex justify-content-between">
          <h5>Lead Source</h5>
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
          <AddLeadSource></AddLeadSource>
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
                <td className="py-3">Call center Leads</td>
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
                <td className="py-3">Facebook Adds</td>
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
                <td className="py-3">Website Leads</td>
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
                <td className="py-3">SMS Broadcasting</td>
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
                <td className="py-3">Referral Partner</td>
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
                <td className="py-3">Others Source</td>
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

export default LeadSource;
