import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import "../CSS/Style.css";
import { HiPlus } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GoPrimitiveDot } from "react-icons/go";
import { BiEditAlt } from "react-icons/bi";
import { GiRapidshareArrow } from "react-icons/gi";

const Marketing = () => {
  const data = [
    { name: "Total Message", value: 9000 },
    { name: "Success Message", value: 3050 },
    { name: "Failed Message", value: 6300 },
  ];
  const COLORS = ["#5156BE", "#00C49F", "#FFBB28"];

  return (
    <div className="p-3">
      <div className="row gap-4 mx-1">
        <div className="col-xl-9 p-3 bg-white">
          <div className="box-head">
            <h5>Campaign List</h5>
            <button
              style={{ backgroundColor: "#5156BE" }}
              className="add-new-button py-1 px-2"
            >
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
                      class="form-check-input ms-3"
                      id="exampleCheck112"
                    />
                    <label class="form-check-label ms-5" for="exampleCheck112">
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
                      class="form-check-input ms-3"
                      id="exampleCheck123"
                    />
                    <label class="form-check-label ms-5" for="exampleCheck123">
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
                      class="form-check-input ms-3"
                      id="exampleCheck134"
                    />
                    <label class="form-check-label ms-5" for="exampleCheck134">
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
                <tr className="">
                  <td className="p-2 py-3">
                    <input
                      type="checkbox"
                      class="form-check-input ms-3"
                      id="exampleCheck145"
                    />
                    <label class="form-check-label ms-5" for="exampleCheck145">
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
        <div className="col-xl p-3 bg-white">
          <div className="box-head">
            <h5>SMS Summary</h5>
          </div>
          <div>
            <PieChart width={290} height={200}>
              <Pie
                data={data}
                cx={190}
                cy={100}
                innerText={"Nur"}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={0}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </div>
          <div className="sms-pie-chart mx-1">
            <div className="d-flex">
              <GoPrimitiveDot
                style={{ color: "#5156BE" }}
                className="fs-4 mt-3 me-1"
              />
              <div>
                <p className="">9000</p>
                <small className="">Total SMS</small>
              </div>
            </div>
            <div className="d-flex">
              <GoPrimitiveDot
                style={{ color: "#00C49F" }}
                className="fs-4 mt-3 me-1"
              />
              <div>
                <p className="">3050</p>
                <small className="">Success SMS</small>
              </div>
            </div>
            <div className="d-flex">
              <GoPrimitiveDot
                style={{ color: "#FFBB28" }}
                className="fs-4 mt-3 me-1"
              />
              <div>
                <p className="">6300</p>
                <small className="">Failed SMS</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row gap-3 mx-1 mt-4">
        <div className="col-md p-3 bg-white">
          <div className="box-head">
            <h5>Processing List</h5>
          </div>
          <div>
            <table className="mt-3 table-box">
              <thead>
                <tr>
                  <th className="p-2" width={"5%"}>
                    Number
                  </th>
                  <th className="p-2" width={"20%"}>
                    Name
                  </th>
                  <th className="p-2" width={"10%"}>
                    Status
                  </th>
                  <th className="p-2 text-center" width={"2%"}>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-bottom">
                  <td className="p-2 py-3">
                    <input
                      type="checkbox"
                      class="form-check-input ms-3"
                      id="exampleCheck199"
                    />
                    <label class="form-check-label ms-5" for="exampleCheck199">
                      1
                    </label>
                  </td>
                  <td className="p-2 py-3">
                    How to improve a bad credit score quickly
                  </td>

                  <td className="p-2 py-3">
                    <small className="campaign-status-active">Success</small>
                  </td>
                  <td>
                    <button
                      style={{ backgroundColor: "#5156BE" }}
                      className="add-new-button py-1 px-2 ms-4"
                    >
                      <GiRapidshareArrow className="me-1 mb-1" />
                      Retry
                    </button>
                  </td>
                </tr>
                <tr className="border-bottom">
                  <td className="p-2 py-3">
                    <input
                      type="checkbox"
                      class="form-check-input ms-3"
                      id="exampleCheck188"
                    />
                    <label class="form-check-label ms-5" for="exampleCheck188">
                      2
                    </label>
                  </td>
                  <td className="p-2 py-3">
                    How to improve a bad credit score quickly
                  </td>

                  <td className="p-2 py-3">
                    <small className="campaign-status-closed">Failed</small>
                  </td>
                  <td>
                    <button
                      style={{ backgroundColor: "#5156BE" }}
                      className="add-new-button py-1 px-2 ms-4"
                    >
                      <GiRapidshareArrow className="me-1 mb-1" />
                      Retry
                    </button>
                  </td>
                </tr>
                <tr className="border-bottom">
                  <td className="p-2 py-3">
                    <input
                      type="checkbox"
                      class="form-check-input ms-3"
                      id="exampleCheck177"
                    />
                    <label class="form-check-label ms-5" for="exampleCheck177">
                      3
                    </label>
                  </td>
                  <td className="p-2 py-3">
                    How to improve a bad credit score quickly
                  </td>

                  <td className="p-2 py-3">
                    <small className="campaign-status-active">Success</small>
                  </td>
                  <td>
                    <button
                      style={{ backgroundColor: "#5156BE" }}
                      className="add-new-button py-1 px-2 ms-4"
                    >
                      <GiRapidshareArrow className="me-1 mb-1" />
                      Retry
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 py-3">
                    <input
                      type="checkbox"
                      class="form-check-input ms-3"
                      id="exampleCheck166"
                    />
                    <label class="form-check-label ms-5" for="exampleCheck166">
                      4
                    </label>
                  </td>
                  <td className="p-2 py-3">
                    How to improve a bad credit score quickly
                  </td>

                  <td className="p-2 py-3">
                    <small className="campaign-status-closed">Failed</small>
                  </td>
                  <td>
                    <button
                      style={{ backgroundColor: "#5156BE" }}
                      className="add-new-button py-1 px-2 ms-4"
                    >
                      <GiRapidshareArrow className="me-1 mb-1" />
                      Retry
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-md p-3 bg-white">
          <div className="box-head">
            <h5>Delivered status</h5>
          </div>
          <div>
            <table className="mt-3 table-box">
              <thead>
                <tr>
                  <th className="p-2" width={"5%"}>
                    Number
                  </th>
                  <th className="p-2" width={"20%"}>
                    Name
                  </th>
                  <th className="p-2" width={"10%"}>
                    Status
                  </th>
                  <th className="p-2 text-center" width={"2%"}>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-bottom">
                  <td className="p-2 py-3">
                    <input
                      type="checkbox"
                      class="form-check-input ms-3"
                      id="exampleCheck144"
                    />
                    <label class="form-check-label ms-5" for="exampleCheck144">
                      1
                    </label>
                  </td>
                  <td className="p-2 py-3">
                    How to improve a bad credit score quickly
                  </td>

                  <td className="p-2 py-3">
                    <small className="campaign-status-active">Success</small>
                  </td>
                  <td>
                    <button
                      style={{ backgroundColor: "#5156BE" }}
                      className="add-new-button py-1 px-2 ms-4"
                    >
                      <GiRapidshareArrow className="me-1 mb-1" />
                      Retry
                    </button>
                  </td>
                </tr>
                <tr className="border-bottom">
                  <td className="p-2 py-3">
                    <input
                      type="checkbox"
                      class="form-check-input ms-3"
                      id="exampleCheck133"
                    />
                    <label class="form-check-label ms-5" for="exampleCheck133">
                      2
                    </label>
                  </td>
                  <td className="p-2 py-3">
                    How to improve a bad credit score quickly
                  </td>

                  <td className="p-2 py-3">
                    <small className="campaign-status-closed">Failed</small>
                  </td>
                  <td>
                    <button
                      style={{ backgroundColor: "#5156BE" }}
                      className="add-new-button py-1 px-2 ms-4"
                    >
                      <GiRapidshareArrow className="me-1 mb-1" />
                      Retry
                    </button>
                  </td>
                </tr>
                <tr className="border-bottom">
                  <td className="p-2 py-3">
                    <input
                      type="checkbox"
                      class="form-check-input ms-3"
                      id="exampleCheck122"
                    />
                    <label class="form-check-label ms-5" for="exampleCheck122">
                      3
                    </label>
                  </td>
                  <td className="p-2 py-3">
                    How to improve a bad credit score quickly
                  </td>

                  <td className="p-2 py-3">
                    <small className="campaign-status-closed">Failed</small>
                  </td>
                  <td>
                    <button
                      style={{ backgroundColor: "#5156BE" }}
                      className="add-new-button py-1 px-2 ms-4"
                    >
                      <GiRapidshareArrow className="me-1 mb-1" />
                      Retry
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 py-3">
                    <input
                      type="checkbox"
                      class="form-check-input ms-3"
                      id="exampleCheck111"
                    />
                    <label class="form-check-label ms-5" for="exampleCheck111">
                      4
                    </label>
                  </td>
                  <td className="p-2 py-3">
                    How to improve a bad credit score quickly
                  </td>

                  <td className="p-2 py-3">
                    <small className="campaign-status-active">Success</small>
                  </td>
                  <td>
                    <button
                      style={{ backgroundColor: "#5156BE" }}
                      className="add-new-button py-1 px-2 ms-4"
                    >
                      <GiRapidshareArrow className="me-1 mb-1" />
                      Retry
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
