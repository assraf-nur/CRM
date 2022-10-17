import React from "react";
import "../CSS/Style.css";
import { HiPlus } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";

const Marketing = () => {
  return (
    <div className="p-3">
      <div className="row gap-3 mx-1">
        <div className="col-xl-9 p-3 bg-white">
          <div className="box-head">
            <h5>Campaign List</h5>
            <button style={{backgroundColor: "#5156BE"}} className="add-new-button py-1 px-2">
              <HiPlus className="me-1 mb-1" />
              Add New
            </button>
          </div>

          <div>
            <table className="mt-3 ms-2 table-box">
              <thead>
                <tr>
                  <th className="p-2" width={"10%"}>
                    Number
                  </th>
                  <th className="p-2" width={"30%"}>
                    Name
                  </th>
                  <th className="p-2" width={"15%"}>
                    End
                  </th>
                  <th className="p-2" width={"15%"}>
                    Start
                  </th>
                  <th className="p-2" width={"5%"}>
                    Status
                  </th>
                  <th className="p-2 text-center" width={"10%"}>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-bottom">
                  <td className="p-2 py-3">
                    <input
                      type="checkbox"
                      class="form-check-input ms-0"
                      id="exampleCheck1"
                    />
                    <label class="form-check-label ms-4" for="exampleCheck1">
                      1
                    </label>
                  </td>
                  <td className="p-2 py-3">
                    Need Business Loans Before Christmas?
                  </td>
                  <td className="p-2 py-3">5 Feb 2022</td>
                  <td className="p-2 py-3">10 Feb 2022</td>
                  <td className="p-2 py-3">
                    <small className="campaign-status-active">Active</small>
                  </td>
                  <td className="p-2 py-3 text-center">
                    <a title="Edit" href="{}">
                      <BiEditAlt className="fs-5 text-info" />
                    </a>
                    <a title="Delete" className="ms-3" href="{}">
                      <RiDeleteBin6Line className="fs-5 text-danger" />
                    </a>
                  </td>
                </tr>
                <tr className="border-bottom">
                  <td className="p-2 py-3">
                    <input
                      type="checkbox"
                      class="form-check-input ms-0"
                      id="exampleCheck1"
                    />
                    <label class="form-check-label ms-4" for="exampleCheck1">
                      2
                    </label>
                  </td>
                  <td className="p-2 py-3">
                    How to improve a bad credit score quickly
                  </td>
                  <td className="p-2 py-3">5 Feb 2022</td>
                  <td className="p-2 py-3">10 Feb 2022</td>
                  <td className="p-2 py-3">
                    <small className="campaign-status-closed">Closed</small>
                  </td>
                  <td className="p-2 py-3 text-center">
                    <a title="Edit" href="{}">
                      <BiEditAlt className="fs-5 text-info" />
                    </a>
                    <a title="Delete" className="ms-3" href="{}">
                      <RiDeleteBin6Line className="fs-5 text-danger" />
                    </a>
                  </td>
                </tr>
                <tr className="border-bottom">
                  <td className="p-2 py-3">
                    <input
                      type="checkbox"
                      class="form-check-input ms-0"
                      id="exampleCheck1"
                    />
                    <label class="form-check-label ms-4" for="exampleCheck1">
                      3
                    </label>
                  </td>
                  <td className="p-2 py-3">
                    Need Business Loans Before Christmas?
                  </td>
                  <td className="p-2 py-3">5 Feb 2022</td>
                  <td className="p-2 py-3">10 Feb 2022</td>
                  <td className="p-2 py-3">
                    <small className="campaign-status-active">Active</small>
                  </td>
                  <td className="p-2 py-3 text-center">
                    <a title="Edit" href="{}">
                      <BiEditAlt className="fs-5 text-info" />
                    </a>
                    <a title="Delete" className="ms-3" href="{}">
                      <RiDeleteBin6Line className="fs-5 text-danger" />
                    </a>
                  </td>
                </tr>
                <tr className="border-bottom">
                  <td className="p-2 py-3">
                    <input
                      type="checkbox"
                      class="form-check-input ms-0"
                      id="exampleCheck1"
                    />
                    <label class="form-check-label ms-4" for="exampleCheck1">
                      4
                    </label>
                  </td>
                  <td className="p-2 py-3">
                    How to improve a bad credit score quickly
                  </td>
                  <td className="p-2 py-3">5 Feb 2022</td>
                  <td className="p-2 py-3">10 Feb 2022</td>
                  <td className="p-2 py-3">
                    {" "}
                    <small className="campaign-status-closed">
                      Closed
                    </small>{" "}
                  </td>
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
        <div className="col-xl p-3 bg-white"></div>
      </div>
    </div>
  );
};

export default Marketing;
