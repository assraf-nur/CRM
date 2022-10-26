import React from "react";
import { Form } from "react-bootstrap";
import {  HiViewList } from "react-icons/hi";
import { Link } from "react-router-dom";

const AddLendersList = () => {
  return (
    <div className="p-3">
      <div className="bg-white p-3">
        <div className="border-bottom pb-2 d-flex justify-content-between">
          <h5>Add Lender List</h5>
          <Link
            to="/lendersList"
            className="add-new-button contact-list-button px-3"
          >
            <HiViewList className="me-1 mb-1" />
            Lender List
          </Link>
        </div>
        {/* form start */}
        <Form>
          <div className="mt-3">
            <Form.Label className="fw-bold fs-6">
              Select Types of Loan
            </Form.Label>
            <div className="row gap-0">
              <div className="col-md mt-0 px-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    1. Working Capital
                  </label>
                </div>
                <div className="form-check mt-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="Business"
                  />
                  <label className="form-check-label" for="Business">
                    2. Business Loan Term
                  </label>
                </div>
                <div className="form-check mt-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="SBA"
                  />
                  <label className="form-check-label" for="SBA">
                    3. SBA Loan
                  </label>
                </div>
                <div className="form-check mt-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="Equipment"
                  />
                  <label className="form-check-label" for="Equipment">
                    4. Equipment Finance
                  </label>
                </div>
                <div className="form-check mt-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="Equipment"
                  />
                  <label className="form-check-label" for="Equipment">
                    5. No Doc Commercial Loan
                  </label>
                </div>
                <div className="form-check mt-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="Other"
                  />
                  <label className="form-check-label" for="Other">
                    6. Other Loan
                  </label>
                </div>
                <div className="form-check mt-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="Conventional"
                  />
                  <label className="form-check-label" for="Conventional">
                    7. Conventional Commercial Loan
                  </label>
                </div>
                <div className="form-check mt-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="Credit"
                  />
                  <label className="form-check-label" for="Credit">
                    8. Business Line of Credit
                  </label>
                </div>
                <div className="form-check mt-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="Doctor"
                  />
                  <label className="form-check-label" for="Doctor">
                    9. Doctor or Healthcare Loan
                  </label>
                </div>
                <div className="form-check mt-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="Lease"
                  />
                  <label className="form-check-label" for="Lease">
                    10. Equipment Lease
                  </label>
                </div>
              </div>
              <div className="col-md mt-0 px-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="Factoring"
                  />
                  <label className="form-check-label" for="Factoring">
                    11. Factoring Invoice
                  </label>
                </div>
                <div className="form-check mt-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="Fix"
                  />
                  <label className="form-check-label" for="Fix">
                    12. Fix and Flip Loan
                  </label>
                </div>
                <div className="form-check mt-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="Hard"
                  />
                  <label className="form-check-label" for="Hard">
                    13. Hard Money Loan
                  </label>
                </div>
                <div className="form-check mt-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="Assets"
                  />
                  <label className="form-check-label" for="Assets">
                    14. Assets Based Loan
                  </label>
                </div>
                <div className="form-check mt-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="Commercial_Loans"
                  />
                  <label className="form-check-label" for="Commercial_Loans">
                    15. Commercial Loans
                  </label>
                </div>
                <div className="form-check mt-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="Truck"
                  />
                  <label className="form-check-label" for="Truck">
                    16. Truck Financing
                  </label>
                </div>
                <div className="form-check mt-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="Line"
                  />
                  <label className="form-check-label" for="Line">
                    17. Business Line of Credit
                  </label>
                </div>
                <div className="form-check mt-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="Estate"
                  />
                  <label className="form-check-label" for="Estate">
                    18. Real Estate Investor
                  </label>
                </div>
                <div className="form-check mt-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="Healthcare"
                  />
                  <label className="form-check-label" for="Healthcare">
                    19. Healthcare
                  </label>
                </div>
                <div className="form-check mt-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="Technology"
                  />
                  <label className="form-check-label" for="Technology">
                    20. Technology
                  </label>
                </div>
              </div>
              <div className="col-md px-3 mt-0">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="Based Lending"
                  />
                  <label className="form-check-label" for="Based Lending">
                    21. Assets Based Lending
                  </label>
                </div>
                <div className="form-check mt-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="USDA"
                  />
                  <label className="form-check-label" for="USDA">
                    22. USDA Loans
                  </label>
                </div>
                <div className="form-check mt-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="Hard_Money"
                  />
                  <label className="form-check-label" for="Hard_Money">
                    23. Hard Money Loan
                  </label>
                </div>
                <div className="form-check mt-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="n"
                  />
                  <label className="form-check-label" for="n">
                    24. Fix n Flip Loan
                  </label>
                </div>
                <div className="form-check mt-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="Stated"
                  />
                  <label className="form-check-label" for="Stated">
                    25. Stated Income Loan
                  </label>
                </div>
                <div className="form-check mt-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="Refinancing"
                  />
                  <label className="form-check-label" for="Refinancing">
                    26. Commercial Refinancing
                  </label>
                </div>
                <div className="form-check mt-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="Unsecured"
                  />
                  <label className="form-check-label" for="Unsecured">
                    27. Unsecured Line of Credit
                  </label>
                </div>
                <div className="form-check mt-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="Lite"
                  />
                  <label className="form-check-label" for="Lite">
                    28. Commercial Lite
                  </label>
                </div>
                <div className="form-check mt-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="Invest"
                  />
                  <label className="form-check-label" for="Invest">
                    29. Residential Invest
                  </label>
                </div>
                <div className="form-check mt-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="Mixed"
                  />
                  <label className="form-check-label" for="Mixed">
                    30. Mixed Properties
                  </label>
                </div>
              </div>
              <div className="col-md px-3 mt-0">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="Commercial"
                  />
                  <label className="form-check-label" for="Commercial">
                    31. Commercial Construction Loan
                  </label>
                </div>
                <div className="form-check mt-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="Home"
                  />
                  <label className="form-check-label" for="Home">
                    32. New Home Loans
                  </label>
                </div>
                <div className="form-check mt-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="Term2"
                  />
                  <label className="form-check-label" for="Term2">
                    33. Term Loans
                  </label>
                </div>
                <div className="form-check mt-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="Govt"
                  />
                  <label className="form-check-label" for="Govt">
                    34. Govt contract finance
                  </label>
                </div>
                <div className="form-check mt-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="Bridge"
                  />
                  <label className="form-check-label" for="Bridge">
                    35. Bridge Loan
                  </label>
                </div>
                <div className="form-check mt-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="Doc"
                  />
                  <label className="form-check-label" for="Doc">
                    36. Full Doc Loan
                  </label>
                </div>
                <div className="form-check mt-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="Consolidation"
                  />
                  <label className="form-check-label" for="Consolidation">
                    37. MCA Consolidation
                  </label>
                </div>
              </div>
            </div>

            <div className="row gap-3 mt-4">
              <div className="col-md">
                <Form.Label className="fw-bold mb-0">Credit Score</Form.Label>
                <Form.Select className="rounded" aria-label="Default">
                  <option>Select Credit Score</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>

                <Form.Label className="fw-bold mt-3 mb-0">
                  Minimum Revenue
                </Form.Label>
                <Form.Select className="rounded" aria-label="Default">
                  <option>Select Minimum Revenue</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>

                <Form.Label className="fw-bold mt-3 mb-0">
                  Loan Range
                </Form.Label>
                <Form.Select className="rounded" aria-label="Default">
                  <option>Select Loan Range</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>

                <Form.Label className="fw-bold mt-3 mb-0">
                  Lender Grading
                </Form.Label>
                <Form.Select className="rounded" aria-label="Default">
                  <option>Select Lender Grading</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>

                <Form.Label className="fw-bold mt-3 mb-0">
                  Company Name
                </Form.Label>
                <Form.Control
                  className="rounded"
                  type="text"
                  placeholder="Enter company name"
                />

                <Form.Label className="fw-bold mt-3 mb-0">Email</Form.Label>
                <Form.Control
                  className="rounded"
                  type="email"
                  placeholder="Enter company name"
                />
              </div>
              <div className="col-md">
                <Form.Label className="fw-bold mb-0">AE Name</Form.Label>
                <Form.Control
                  className="rounded"
                  type="text"
                  placeholder="Enter AE Name"
                />

                <Form.Label className="fw-bold mt-3 mb-0">
                  AE Cell Number
                </Form.Label>
                <Form.Control
                  className="rounded"
                  type="number"
                  placeholder="Enter AE Cell Number"
                />
                <Form.Label className="fw-bold mt-3 mb-0">
                  AE Email Address
                </Form.Label>
                <Form.Control
                  className="rounded"
                  type="email"
                  placeholder="Enter AE Email Address"
                />

                <Form.Label className="fw-bold mt-3 mb-0">
                  Office Number
                </Form.Label>
                <Form.Control
                  className="rounded"
                  type="text"
                  placeholder="Enter Office Number"
                />

                <Form.Label className="fw-bold mt-3 mb-0">
                  Submission Email Address
                </Form.Label>
                <Form.Control
                  className="rounded"
                  type="email"
                  placeholder="Enter Submission Email"
                />

                <Form.Label className="fw-bold mt-3 mb-0">
                  Portal Link
                </Form.Label>
                <Form.Control
                  className="rounded"
                  type="text"
                  placeholder="Enter Portal Link"
                />
              </div>
              <div className="col-md">
                <Form.Label className="fw-bold mb-0">Short Note</Form.Label>
                <Form.Control
                  className="rounded"
                  type="text"
                  placeholder="Enter Note"
                />

                <Form.Label className="fw-bold mt-3 mb-0">User ID</Form.Label>
                <Form.Control
                  className="rounded"
                  type="text"
                  placeholder="Enter User ID"
                />

                <Form.Label className="fw-bold mt-3 mb-0">
                  User Password
                </Form.Label>
                <Form.Control
                  className="rounded"
                  type="password"
                  placeholder="Enter User Password"
                />

                <div className="form-check mt-4">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label" for="flexRadioDefault1">
                    Active
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                  />
                  <label className="form-check-label" for="flexRadioDefault2">
                    Inactive
                  </label>
                </div>
              </div>
            </div>
          </div>
        </Form>
        <div className="mt-4">
          <button className="add-new-button px-3 py-2 bg-info">Submit</button>
        </div>
        {/* form end */}
      </div>
    </div>
  );
};

export default AddLendersList;
