import React from "react";
import { BiEditAlt } from "react-icons/bi";
import { HiPlus } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const LendersList = () => {
  return (
    <div className="p-3">
      <div className="bg-white p-3">
        <div className="border-bottom pb-2 d-flex justify-content-between">
          <h5>Lender Category</h5>
          <Link
            to="/addLenderList"
            className="add-new-button contact-list-button px-2"
          >
            <HiPlus className="me-1" />
            Add Lender List
          </Link>
        </div>

        <div>
          <table className="table">
            <thead>
              <tr>
                <th>SL</th>
                <th>Company</th>
                <th>Contact</th>
                <th>Note</th>
                <th>Created At</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3">1</td>
                <td className="py-3">
                  SLS Finnacial,
                  <br />
                  8164238019
                </td>
                <td className="py-3">
                  tgarrett@slsfinancial.com
                  <br />
                  9702143027
                  <br />
                  https://slsfinancial.com/brokerdocs
                </td>
                <td className="py-3">Prefer B and C Paper- 2 Years minimum</td>
                <td className="py-3">21/12/2055</td>
                <td className="py-3">
                  <span className="status-active px-2 py-1 rounded">
                    Active
                  </span>
                </td>
                <td className="py-3">
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
                <td className="py-3">
                  SLS Finnacial,
                  <br />
                  8164238019
                </td>
                <td className="py-3">
                  tgarrett@slsfinancial.com
                  <br />
                  9702143027
                  <br />
                  https://slsfinancial.com/brokerdocs
                </td>
                <td className="py-3">Prefer B and C Paper- 2 Years minimum</td>
                <td className="py-3">21/12/2055</td>
                <td className="py-3">
                  <span className="status-active px-2 py-1 rounded">
                    Active
                  </span>
                </td>
                <td className="py-3">
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
                <td className="py-3">
                  SLS Finnacial,
                  <br />
                  8164238019
                </td>
                <td className="py-3">
                  tgarrett@slsfinancial.com
                  <br />
                  9702143027
                  <br />
                  https://slsfinancial.com/brokerdocs
                </td>
                <td className="py-3">Prefer B and C Paper- 2 Years minimum</td>
                <td className="py-3">21/12/2055</td>
                <td className="py-3">
                  <span className="status-active px-2 py-1 rounded">
                    Active
                  </span>
                </td>
                <td className="py-3">
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
                <td className="py-3">
                  SLS Finnacial,
                  <br />
                  8164238019
                </td>
                <td className="py-3">
                  tgarrett@slsfinancial.com
                  <br />
                  9702143027
                  <br />
                  https://slsfinancial.com/brokerdocs
                </td>
                <td className="py-3">Prefer B and C Paper- 2 Years minimum</td>
                <td className="py-3">21/12/2055</td>
                <td className="py-3">
                  <span className="status-active px-2 py-1 rounded">
                    Active
                  </span>
                </td>
                <td className="py-3">
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
                <td className="py-3">
                  SLS Finnacial,
                  <br />
                  8164238019
                </td>
                <td className="py-3">
                  tgarrett@slsfinancial.com
                  <br />
                  9702143027
                  <br />
                  https://slsfinancial.com/brokerdocs
                </td>
                <td className="py-3">Prefer B and C Paper- 2 Years minimum</td>
                <td className="py-3">21/12/2055</td>
                <td className="py-3">
                  <span className="status-active px-2 py-1 rounded">
                    Active
                  </span>
                </td>
                <td className="py-3">
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
                <td className="py-3">
                  SLS Finnacial,
                  <br />
                  8164238019
                </td>
                <td className="py-3">
                  tgarrett@slsfinancial.com
                  <br />
                  9702143027
                  <br />
                  https://slsfinancial.com/brokerdocs
                </td>
                <td className="py-3">Prefer B and C Paper- 2 Years minimum</td>
                <td className="py-3">21/12/2055</td>
                <td className="py-3">
                  <span className="status-active px-2 py-1 rounded">
                    Active
                  </span>
                </td>
                <td className="py-3">
                  <a title="Edit" href="{}">
                    <BiEditAlt className="fs-5 text-info" />
                  </a>
                  <a title="Delete" className="ms-3" href="{}">
                    <RiDeleteBin6Line className="fs-5 text-danger" />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="py-3">7</td>
                <td className="py-3">
                  SLS Finnacial,
                  <br />
                  8164238019
                </td>
                <td className="py-3">
                  tgarrett@slsfinancial.com
                  <br />
                  9702143027
                  <br />
                  https://slsfinancial.com/brokerdocs
                </td>
                <td className="py-3">Prefer B and C Paper- 2 Years minimum</td>
                <td className="py-3">21/12/2055</td>
                <td className="py-3">
                  <span className="status-active px-2 py-1 rounded">
                    Active
                  </span>
                </td>
                <td className="py-3">
                  <a title="Edit" href="{}">
                    <BiEditAlt className="fs-5 text-info" />
                  </a>
                  <a title="Delete" className="ms-3" href="{}">
                    <RiDeleteBin6Line className="fs-5 text-danger" />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="py-3">8</td>
                <td className="py-3">
                  SLS Finnacial,
                  <br />
                  8164238019
                </td>
                <td className="py-3">
                  tgarrett@slsfinancial.com
                  <br />
                  9702143027
                  <br />
                  https://slsfinancial.com/brokerdocs
                </td>
                <td className="py-3">Prefer B and C Paper- 2 Years minimum</td>
                <td className="py-3">21/12/2055</td>
                <td className="py-3">
                  <span className="status-active px-2 py-1 rounded">
                    Active
                  </span>
                </td>
                <td className="py-3">
                  <a title="Edit" href="{}">
                    <BiEditAlt className="fs-5 text-info" />
                  </a>
                  <a title="Delete" className="ms-3" href="{}">
                    <RiDeleteBin6Line className="fs-5 text-danger" />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="py-3">9</td>
                <td className="py-3">
                  SLS Finnacial,
                  <br />
                  8164238019
                </td>
                <td className="py-3">
                  tgarrett@slsfinancial.com
                  <br />
                  9702143027
                  <br />
                  https://slsfinancial.com/brokerdocs
                </td>
                <td className="py-3">Prefer B and C Paper- 2 Years minimum</td>
                <td className="py-3">21/12/2055</td>
                <td className="py-3">
                  <span className="status-active px-2 py-1 rounded">
                    Active
                  </span>
                </td>
                <td className="py-3">
                  <a title="Edit" href="{}">
                    <BiEditAlt className="fs-5 text-info" />
                  </a>
                  <a title="Delete" className="ms-3" href="{}">
                    <RiDeleteBin6Line className="fs-5 text-danger" />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="py-3">10</td>
                <td className="py-3">
                  SLS Finnacial,
                  <br />
                  8164238019
                </td>
                <td className="py-3">
                  tgarrett@slsfinancial.com
                  <br />
                  9702143027
                  <br />
                  https://slsfinancial.com/brokerdocs
                </td>
                <td className="py-3">Prefer B and C Paper- 2 Years minimum</td>
                <td className="py-3">21/12/2055</td>
                <td className="py-3">
                  <span className="status-active px-2 py-1 rounded">
                    Active
                  </span>
                </td>
                <td className="py-3">
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

export default LendersList;
