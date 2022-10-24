import React from "react";

const LenderCategory = () => {
  return (
    <div className="p-3">
      <div className="bg-white p-3">
        <div className="border-bottom pb-2">
          <h5>Lender Category</h5>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Description</th>
              <th>Created At</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Type of Loan</td>
              <td>Type of Loan</td>
              <td>24/10/2022</td>
              <td>
                <span className="status-active px-1 py-1 rounded">
                  completed
                </span>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LenderCategory;
