import React, { useState } from "react";
import { HiPlus } from "react-icons/hi";

const ApplicationStatus = () => {
  const [showLenderAddModal, setShowLenderAddModal] = useState(false);

  const handleCloseLenderAddModal = () => setShowLenderAddModal(false);
  const handleShowLenderAddModal = () => setShowLenderAddModal(true);
  return (
    <div className="p-3">
      <div className="bg-white p-3">
        <div className="border-bottom pb-2 d-flex justify-content-between">
          <h5>Application Status</h5>
          <button
            onClick={handleShowLenderAddModal}
            className="add-new-button px-2"
          >
            <HiPlus className="me-1" />
            Add New
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationStatus;
