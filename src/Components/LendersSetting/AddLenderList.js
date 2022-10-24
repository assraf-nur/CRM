import React from "react";
import { HiViewList } from "react-icons/hi";
import { Form, Link } from "react-router-dom";

const AddLenderList = () => {
  return (
    <div className="p-3">
      <div className="bg-white p-3">
        <div className="border-bottom pb-2 d-flex justify-content-between">
          <h5>Lender Category</h5>
          <Link
            to="/lendersList"
            className="add-new-button contact-list-button px-2"
          >
            <HiViewList className="me-1 mb-1" />
            Lender List
          </Link>
        </div>

        <Form>
            
        </Form>

      </div>
    </div>
  );
};

export default AddLenderList;
