import React from "react";
import { BiEditAlt } from "react-icons/bi";
import { HiPlus } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const LenderList = () => {
  return (
    <div className="p-3">
      <div className="lenderPage-header">
        <h4 className="ms-1">Add Lenders</h4>
        <Link className="contact-list-button justify-end" to='/addLender'> <HiPlus className="fs-6 me-1 mb-1"/> Add Lenders</Link>
      </div>
      <div className="bg-white p-2">
        <table className="mt-3 ms-2 table-box w-100 table-striped">
          <thead>
            <tr>
              <th className="p-2">Number</th>
              <th className="p-2">Company Name</th>
              <th className="p-2">Phone</th>
              <th className="p-2">Email</th>
              <th className="p-2">Credit Range</th>
              <th className="p-2">Remarks</th>
              <th className="p-2">Contact Person</th>
              <th className="p-2">Loan Range</th>
              <th className="p-2 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 py-3">
                <input
                  type="checkbox"
                  className="form-check-input ms-3"
                  id="Check1"
                />
                <label className="form-check-label ms-5" for="Check1">
                  1
                </label>
              </td>
              <td className="p-2 py-3">Tesla INC</td>
              <td className="p-2 py-3">+8801760523833</td>
              <td className="p-2 py-3">nurtesla@gmail.com</td>
              <td className="p-2 py-3">18000 $</td>
              <td className="p-2 py-3">Good</td>
              <td className="p-2 py-3">Nur Tesla</td>
              <td className="p-2 py-3">9999 $</td>
              <td className="p-2 py-3 text-center">
                <a title="Edit" href="{}">
                  <BiEditAlt className="fs-5 text-info" />
                </a>
                <a title="Delete" className="ms-3" href="{}">
                  <RiDeleteBin6Line className="fs-5 text-danger" />
                </a>
              </td>
            </tr>
            <tr>
              <td className="p-2 py-3">
                <input
                  type="checkbox"
                  className="form-check-input ms-3"
                  id="Check12"
                />
                <label className="form-check-label ms-5" for="Check12">
                  2
                </label>
              </td>
              <td className="p-2 py-3">Tesla INC</td>
              <td className="p-2 py-3">+8801760523833</td>
              <td className="p-2 py-3">nurtesla@gmail.com</td>
              <td className="p-2 py-3">18000 $</td>
              <td className="p-2 py-3">Good</td>
              <td className="p-2 py-3">Nur Tesla</td>
              <td className="p-2 py-3">9999 $</td>
              <td className="p-2 py-3 text-center">
                <a title="Edit" href="{}">
                  <BiEditAlt className="fs-5 text-info" />
                </a>
                <a title="Delete" className="ms-3" href="{}">
                  <RiDeleteBin6Line className="fs-5 text-danger" />
                </a>
              </td>
            </tr>
            <tr>
              <td className="p-2 py-3">
                <input
                  type="checkbox"
                  className="form-check-input ms-3"
                  id="Check13"
                />
                <label className="form-check-label ms-5" for="Check13">
                  3
                </label>
              </td>
              <td className="p-2 py-3">Tesla INC</td>
              <td className="p-2 py-3">+8801760523833</td>
              <td className="p-2 py-3">nurtesla@gmail.com</td>
              <td className="p-2 py-3">18000 $</td>
              <td className="p-2 py-3">Good</td>
              <td className="p-2 py-3">Nur Tesla</td>
              <td className="p-2 py-3">9999 $</td>
              <td className="p-2 py-3 text-center">
                <a title="Edit" href="{}">
                  <BiEditAlt className="fs-5 text-info" />
                </a>
                <a title="Delete" className="ms-3" href="{}">
                  <RiDeleteBin6Line className="fs-5 text-danger" />
                </a>
              </td>
            </tr>
            <tr>
              <td className="p-2 py-3">
                <input
                  type="checkbox"
                  className="form-check-input ms-3"
                  id="Check4"
                />
                <label className="form-check-label ms-5" for="Check4">
                  4
                </label>
              </td>
              <td className="p-2 py-3">Tesla INC</td>
              <td className="p-2 py-3">+8801760523833</td>
              <td className="p-2 py-3">nurtesla@gmail.com</td>
              <td className="p-2 py-3">18000 $</td>
              <td className="p-2 py-3">Good</td>
              <td className="p-2 py-3">Nur Tesla</td>
              <td className="p-2 py-3">9999 $</td>
              <td className="p-2 py-3 text-center">
                <a title="Edit" href="{}">
                  <BiEditAlt className="fs-5 text-info" />
                </a>
                <a title="Delete" className="ms-3" href="{}">
                  <RiDeleteBin6Line className="fs-5 text-danger" />
                </a>
              </td>
            </tr>
            <tr>
              <td className="p-2 py-3">
                <input
                  type="checkbox"
                  className="form-check-input ms-3"
                  id="Check5"
                />
                <label className="form-check-label ms-5" for="Check5">
                  5
                </label>
              </td>
              <td className="p-2 py-3">Tesla INC</td>
              <td className="p-2 py-3">+8801760523833</td>
              <td className="p-2 py-3">nurtesla@gmail.com</td>
              <td className="p-2 py-3">18000 $</td>
              <td className="p-2 py-3">Good</td>
              <td className="p-2 py-3">Nur Tesla</td>
              <td className="p-2 py-3">9999 $</td>
              <td className="p-2 py-3 text-center">
                <a title="Edit" href="{}">
                  <BiEditAlt className="fs-5 text-info" />
                </a>
                <a title="Delete" className="ms-3" href="{}">
                  <RiDeleteBin6Line className="fs-5 text-danger" />
                </a>
              </td>
            </tr>
            <tr>
              <td className="p-2 py-3">
                <input
                  type="checkbox"
                  className="form-check-input ms-3"
                  id="Check6"
                />
                <label className="form-check-label ms-5" for="Check6">
                  6
                </label>
              </td>
              <td className="p-2 py-3">Tesla INC</td>
              <td className="p-2 py-3">+8801760523833</td>
              <td className="p-2 py-3">nurtesla@gmail.com</td>
              <td className="p-2 py-3">18000 $</td>
              <td className="p-2 py-3">Good</td>
              <td className="p-2 py-3">Nur Tesla</td>
              <td className="p-2 py-3">9999 $</td>
              <td className="p-2 py-3 text-center">
                <a title="Edit" href="{}">
                  <BiEditAlt className="fs-5 text-info" />
                </a>
                <a title="Delete" className="ms-3" href="{}">
                  <RiDeleteBin6Line className="fs-5 text-danger" />
                </a>
              </td>
            </tr>
            <tr>
              <td className="p-2 py-3">
                <input
                  type="checkbox"
                  className="form-check-input ms-3"
                  id="Check7"
                />
                <label className="form-check-label ms-5" for="Check7">
                  7
                </label>
              </td>
              <td className="p-2 py-3">Tesla INC</td>
              <td className="p-2 py-3">+8801760523833</td>
              <td className="p-2 py-3">nurtesla@gmail.com</td>
              <td className="p-2 py-3">18000 $</td>
              <td className="p-2 py-3">Good</td>
              <td className="p-2 py-3">Nur Tesla</td>
              <td className="p-2 py-3">9999 $</td>
              <td className="p-2 py-3 text-center">
                <a title="Edit" href="{}">
                  <BiEditAlt className="fs-5 text-info" />
                </a>
                <a title="Delete" className="ms-3" href="{}">
                  <RiDeleteBin6Line className="fs-5 text-danger" />
                </a>
              </td>
            </tr>
            <tr>
              <td className="p-2 py-3">
                <input
                  type="checkbox"
                  className="form-check-input ms-3"
                  id="Check8"
                />
                <label className="form-check-label ms-5" for="Check8">
                  8
                </label>
              </td>
              <td className="p-2 py-3">Tesla INC</td>
              <td className="p-2 py-3">+8801760523833</td>
              <td className="p-2 py-3">nurtesla@gmail.com</td>
              <td className="p-2 py-3">18000 $</td>
              <td className="p-2 py-3">Good</td>
              <td className="p-2 py-3">Nur Tesla</td>
              <td className="p-2 py-3">9999 $</td>
              <td className="p-2 py-3 text-center">
                <a title="Edit" href="{}">
                  <BiEditAlt className="fs-5 text-info" />
                </a>
                <a title="Delete" className="ms-3" href="{}">
                  <RiDeleteBin6Line className="fs-5 text-danger" />
                </a>
              </td>
            </tr>
            <tr>
              <td className="p-2 py-3">
                <input
                  type="checkbox"
                  className="form-check-input ms-3"
                  id="Check9"
                />
                <label className="form-check-label ms-5" for="Check9">
                  9
                </label>
              </td>
              <td className="p-2 py-3">Tesla INC</td>
              <td className="p-2 py-3">+8801760523833</td>
              <td className="p-2 py-3">nurtesla@gmail.com</td>
              <td className="p-2 py-3">18000 $</td>
              <td className="p-2 py-3">Good</td>
              <td className="p-2 py-3">Nur Tesla</td>
              <td className="p-2 py-3">9999 $</td>
              <td className="p-2 py-3 text-center">
                <a title="Edit" href="{}">
                  <BiEditAlt className="fs-5 text-info" />
                </a>
                <a title="Delete" className="ms-3" href="{}">
                  <RiDeleteBin6Line className="fs-5 text-danger" />
                </a>
              </td>
            </tr>
            <tr>
              <td className="p-2 py-3">
                <input
                  type="checkbox"
                  className="form-check-input ms-3"
                  id="Check10"
                />
                <label className="form-check-label ms-5" for="Check10">
                  10
                </label>
              </td>
              <td className="p-2 py-3">Tesla INC</td>
              <td className="p-2 py-3">+8801760523833</td>
              <td className="p-2 py-3">nurtesla@gmail.com</td>
              <td className="p-2 py-3">18000 $</td>
              <td className="p-2 py-3">Good</td>
              <td className="p-2 py-3">Nur Tesla</td>
              <td className="p-2 py-3">9999 $</td>
              <td className="p-2 py-3 text-center">
                <a title="Edit" href="{}">
                  <BiEditAlt className="fs-5 text-info" />
                </a>
                <a title="Delete" className="ms-3" href="{}">
                  <RiDeleteBin6Line className="fs-5 text-danger" />
                </a>
              </td>
            </tr>
            <tr>
              <td className="p-2 py-3">
                <input
                  type="checkbox"
                  className="form-check-input ms-3"
                  id="Check11"
                />
                <label className="form-check-label ms-5" for="Check11">
                  11
                </label>
              </td>
              <td className="p-2 py-3">Tesla INC</td>
              <td className="p-2 py-3">+8801760523833</td>
              <td className="p-2 py-3">nurtesla@gmail.com</td>
              <td className="p-2 py-3">18000 $</td>
              <td className="p-2 py-3">Good</td>
              <td className="p-2 py-3">Nur Tesla</td>
              <td className="p-2 py-3">9999 $</td>
              <td className="p-2 py-3 text-center">
                <a title="Edit" href="{}">
                  <BiEditAlt className="fs-5 text-info" />
                </a>
                <a title="Delete" className="ms-3" href="{}">
                  <RiDeleteBin6Line className="fs-5 text-danger" />
                </a>
              </td>
            </tr>
            <tr>
              <td className="p-2 py-3">
                <input
                  type="checkbox"
                  className="form-check-input ms-3"
                  id="Check12"
                />
                <label className="form-check-label ms-5" for="Check12">
                  12
                </label>
              </td>
              <td className="p-2 py-3">Tesla INC</td>
              <td className="p-2 py-3">+8801760523833</td>
              <td className="p-2 py-3">nurtesla@gmail.com</td>
              <td className="p-2 py-3">18000 $</td>
              <td className="p-2 py-3">Good</td>
              <td className="p-2 py-3">Nur Tesla</td>
              <td className="p-2 py-3">9999 $</td>
              <td className="p-2 py-3 text-center">
                <a title="Edit" href="{}">
                  <BiEditAlt className="fs-5 text-info" />
                </a>
                <a title="Delete" className="ms-3" href="{}">
                  <RiDeleteBin6Line className="fs-5 text-danger" />
                </a>
              </td>
            </tr>
            <tr>
              <td className="p-2 py-3">
                <input
                  type="checkbox"
                  className="form-check-input ms-3"
                  id="Check13"
                />
                <label className="form-check-label ms-5" for="Check13">
                  13
                </label>
              </td>
              <td className="p-2 py-3">Tesla INC</td>
              <td className="p-2 py-3">+8801760523833</td>
              <td className="p-2 py-3">nurtesla@gmail.com</td>
              <td className="p-2 py-3">18000 $</td>
              <td className="p-2 py-3">Good</td>
              <td className="p-2 py-3">Nur Tesla</td>
              <td className="p-2 py-3">9999 $</td>
              <td className="p-2 py-3 text-center">
                <a title="Edit" href="{}">
                  <BiEditAlt className="fs-5 text-info" />
                </a>
                <a title="Delete" className="ms-3" href="{}">
                  <RiDeleteBin6Line className="fs-5 text-danger" />
                </a>
              </td>
            </tr>
            <tr>
              <td className="p-2 py-3">
                <input
                  type="checkbox"
                  className="form-check-input ms-3"
                  id="Check14"
                />
                <label className="form-check-label ms-5" for="Check14">
                  14
                </label>
              </td>
              <td className="p-2 py-3">Tesla INC</td>
              <td className="p-2 py-3">+8801760523833</td>
              <td className="p-2 py-3">nurtesla@gmail.com</td>
              <td className="p-2 py-3">18000 $</td>
              <td className="p-2 py-3">Good</td>
              <td className="p-2 py-3">Nur Tesla</td>
              <td className="p-2 py-3">9999 $</td>
              <td className="p-2 py-3 text-center">
                <a title="Edit" href="{}">
                  <BiEditAlt className="fs-5 text-info" />
                </a>
                <a title="Delete" className="ms-3" href="{}">
                  <RiDeleteBin6Line className="fs-5 text-danger" />
                </a>
              </td>
            </tr>
            <tr>
              <td className="p-2 py-3">
                <input
                  type="checkbox"
                  className="form-check-input ms-3"
                  id="Check15"
                />
                <label className="form-check-label ms-5" for="Check15">
                  15
                </label>
              </td>
              <td className="p-2 py-3">Tesla INC</td>
              <td className="p-2 py-3">+8801760523833</td>
              <td className="p-2 py-3">nurtesla@gmail.com</td>
              <td className="p-2 py-3">18000 $</td>
              <td className="p-2 py-3">Good</td>
              <td className="p-2 py-3">Nur Tesla</td>
              <td className="p-2 py-3">9999 $</td>
              <td className="p-2 py-3 text-center">
                <a title="Edit" href="{}">
                  <BiEditAlt className="fs-5 text-info" />
                </a>
                <a title="Delete" className="ms-3" href="{}">
                  <RiDeleteBin6Line className="fs-5 text-danger" />
                </a>
              </td>
            </tr>
            <tr>
              <td className="p-2 py-3">
                <input
                  type="checkbox"
                  className="form-check-input ms-3"
                  id="Check16"
                />
                <label className="form-check-label ms-5" for="Check16">
                  16
                </label>
              </td>
              <td className="p-2 py-3">Tesla INC</td>
              <td className="p-2 py-3">+8801760523833</td>
              <td className="p-2 py-3">nurtesla@gmail.com</td>
              <td className="p-2 py-3">18000 $</td>
              <td className="p-2 py-3">Good</td>
              <td className="p-2 py-3">Nur Tesla</td>
              <td className="p-2 py-3">9999 $</td>
              <td className="p-2 py-3 text-center">
                <a title="Edit" href="{}">
                  <BiEditAlt className="fs-5 text-info" />
                </a>
                <a title="Delete" className="ms-3" href="{}">
                  <RiDeleteBin6Line className="fs-5 text-danger" />
                </a>
              </td>
            </tr>
            <tr>
              <td className="p-2 py-3">
                <input
                  type="checkbox"
                  className="form-check-input ms-3"
                  id="Check17"
                />
                <label className="form-check-label ms-5" for="Check17">
                  17
                </label>
              </td>
              <td className="p-2 py-3">Tesla INC</td>
              <td className="p-2 py-3">+8801760523833</td>
              <td className="p-2 py-3">nurtesla@gmail.com</td>
              <td className="p-2 py-3">18000 $</td>
              <td className="p-2 py-3">Good</td>
              <td className="p-2 py-3">Nur Tesla</td>
              <td className="p-2 py-3">9999 $</td>
              <td className="p-2 py-3 text-center">
                <a title="Edit" href="{}">
                  <BiEditAlt className="fs-5 text-info" />
                </a>
                <a title="Delete" className="ms-3" href="{}">
                  <RiDeleteBin6Line className="fs-5 text-danger" />
                </a>
              </td>
            </tr>
            <tr>
              <td className="p-2 py-3">
                <input
                  type="checkbox"
                  className="form-check-input ms-3"
                  id="Check18"
                />
                <label className="form-check-label ms-5" for="Check18">
                  18
                </label>
              </td>
              <td className="p-2 py-3">Tesla INC</td>
              <td className="p-2 py-3">+8801760523833</td>
              <td className="p-2 py-3">nurtesla@gmail.com</td>
              <td className="p-2 py-3">18000 $</td>
              <td className="p-2 py-3">Good</td>
              <td className="p-2 py-3">Nur Tesla</td>
              <td className="p-2 py-3">9999 $</td>
              <td className="p-2 py-3 text-center">
                <a title="Edit" href="{}">
                  <BiEditAlt className="fs-5 text-info" />
                </a>
                <a title="Delete" className="ms-3" href="{}">
                  <RiDeleteBin6Line className="fs-5 text-danger" />
                </a>
              </td>
            </tr>
            <tr>
              <td className="p-2 py-3">
                <input
                  type="checkbox"
                  className="form-check-input ms-3"
                  id="Check19"
                />
                <label className="form-check-label ms-5" for="Check19">
                  19
                </label>
              </td>
              <td className="p-2 py-3">Tesla INC</td>
              <td className="p-2 py-3">+8801760523833</td>
              <td className="p-2 py-3">nurtesla@gmail.com</td>
              <td className="p-2 py-3">18000 $</td>
              <td className="p-2 py-3">Good</td>
              <td className="p-2 py-3">Nur Tesla</td>
              <td className="p-2 py-3">9999 $</td>
              <td className="p-2 py-3 text-center">
                <a title="Edit" href="{}">
                  <BiEditAlt className="fs-5 text-info" />
                </a>
                <a title="Delete" className="ms-3" href="{}">
                  <RiDeleteBin6Line className="fs-5 text-danger" />
                </a>
              </td>
            </tr>
            <tr>
              <td className="p-2 py-3">
                <input
                  type="checkbox"
                  className="form-check-input ms-3"
                  id="Check20"
                />
                <label className="form-check-label ms-5" for="Check20">
                  20
                </label>
              </td>
              <td className="p-2 py-3">Tesla INC</td>
              <td className="p-2 py-3">+8801760523833</td>
              <td className="p-2 py-3">nurtesla@gmail.com</td>
              <td className="p-2 py-3">18000 $</td>
              <td className="p-2 py-3">Good</td>
              <td className="p-2 py-3">Nur Tesla</td>
              <td className="p-2 py-3">9999 $</td>
              <td className="p-2 py-3 text-center">
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

export default LenderList;
