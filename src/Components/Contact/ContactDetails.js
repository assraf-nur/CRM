import React, { useEffect, useState } from "react";
import contactProfile from "../Images/Profile/contact-profile.jpg";
import { FcCellPhone } from "react-icons/fc";
import { CgProfile } from "react-icons/cg";
import { HiDotsVertical } from "react-icons/hi";
import { FiCheckSquare, FiFilePlus } from "react-icons/fi";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { ProgressBar } from "react-bootstrap";

const ContactDetails = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("loanStatus.json")
      .then((res) => res.json())
      .then((data) => {
        setDatas(data);
      });
  }, []);

  const now = 67;
  return (
    <div className="p-3 contact-details-page">
      <div className="row m-1 bg-white">
        <div className="col-sm-10">
          <div className="row py-3">
            <div className="col-xl-4 d-flex profile-card-start">
              <img src={contactProfile} alt="" />
              <div className="ms-4 mt-1">
                <h5>Nur Tesla</h5>
                <div>
                  <p className="profile-p1">
                    <FcCellPhone className="fs-5 me-0 mb-1" /> 5713167267
                  </p>
                  <p className="profile-p2"> 📧 ibextruckingllc@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 border-start">
              <div className="profile-card-information mt-4 ms-3">
                <p>
                  City: <span>ARLINGTON</span>{" "}
                </p>
                <p>
                  State: <span>VA</span>{" "}
                </p>
                <p>
                  Zip Code: <span>22204</span>{" "}
                </p>
                <p>
                  Types of Loan: <span>No Doc Commercial Loan</span>{" "}
                </p>
                <p>
                  Lead Source: <span>Facebook Ads</span>{" "}
                </p>
              </div>
            </div>
            <div className="col-xl-4 border-start">
              <div className="profile-card-information mt-5 ms-3">
                <p>
                  Assigned person/Broker: <span>ARLINGTON</span>{" "}
                </p>
                <p>
                  Assigned Processor: <span>VA</span>{" "}
                </p>
                <p>
                  Collaborator : <span>22204</span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-2 timer-section">
          <h5 className="mt-2">Reminder</h5>
          <div className="contact-details-progress">
            <CircularProgressbar
              value={65}
              text={`${7} hour`}
              strokeWidth={15}
              styles={buildStyles({
                textSize: "16px",
                pathColor: "#5156BE",
                trailColor: "#DEDCE8",
              })}
            />
          </div>
          <h6 className="mt-2">No Doc Commercial Loan</h6>
          <p>07:08 hour leter start the call</p>
        </div>
      </div>

      <div className="m-1 mt-4 contact-details-page-links">
        <a style={{ backgroundColor: "#00B25B" }} className="" href="{#}">
          Quick Synopsis
        </a>
        <a style={{ backgroundColor: "#348BED" }} className="ms-3" href="{#}">
          Processor Check List
        </a>
        <a style={{ backgroundColor: "#772AB1" }} className="ms-3" href="{#}">
          Closing Audit
        </a>
        <a style={{ backgroundColor: "#00A7B5" }} className="ms-3" href="{#}">
          Closing Sheet
        </a>
        <a style={{ backgroundColor: "#76C65A" }} className="ms-3" href="{#}">
          Closing Request
        </a>
        <a style={{ backgroundColor: "#009789" }} className="ms-3" href="{#}">
          QC Check list
        </a>
        <a style={{ backgroundColor: "#FF9830" }} className="ms-3" href="{#}">
          Note
        </a>
      </div>
      <div className="m-1 mt-4 contact-details-page-links2">
        <a className="page-links2" href="{}">
          <CgProfile className="mb-1" /> Profile
        </a>
        <a className="page-links2" href="{}">
          <FiCheckSquare className="mb-1" /> Appointment
        </a>
        <a className="page-links2" href="{}">
          <FiFilePlus className="mb-1" /> Papers
        </a>
        <a className="page-links2" href="{}">
          <FiFilePlus className="mb-1" /> Email
        </a>
        <a className="page-links2" href="{}">
          <FiFilePlus className="mb-1" /> Text
        </a>
        <a className="page-links2" href="{}">
          <FiFilePlus className="mb-1" /> Millstone
        </a>
        <a className="" href="{}">
          <FiFilePlus className="mb-1" /> Lender
        </a>
      </div>
      <div className="m-1 row gap-3">
        <div className="col-xl-5 bg-white p-3 loan-status">
          <div className="loan-status-box">
            <div className="loan-status-box-title">
              <h6 className="ms-2">Loan Status</h6>
              <HiDotsVertical className="fs-5 mt-1" />
            </div>
            <div className="loan-status-progress">
              <ProgressBar
                colors="#5156BE"
                style={{ height: "8px", backgroundColor: "#FFFFFF" }}
                now={now}
                label={`${now}%`}
                visuallyHidden
              />
            </div>
            <div className="mt-3 ms-2">
              <table className="loan-status-table">
                <thead>
                  <tr>
                    <th width="300px">Step</th>
                    <th width="160px">Date</th>
                    <th width="150px">Status</th>
                    <th width="50px">Action</th>
                  </tr>
                </thead>
                <tbody className="mt-3">
                  {datas.map((data) => (
                    <tr>
                      <td className="py-2 d-flex">
                        {data.status === "Done" ? (
                          <div className="me-3 status-sign-active"></div>
                        ) : (
                          <></>
                        )}
                        {data.status === "Process" ? (
                          <div className="me-3 status-sign-progress"></div>
                        ) : (
                          <></>
                        )}
                        {data.status === "Left" ? (
                          <div className="me-3 status-sign-pending"></div>
                        ) : (
                          <></>
                        )}
                        {data.step}
                      </td>
                      <td className="py-2">{data.date}</td>
                      <td className="py-2">{data.status}</td>
                      <td className="py-2">
                        {/* <button className="loan-status-edit-button" type="">
                          Edit
                        </button> */}
                        <div className="form-check mt-1 ms-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-xl border">
          <div className="row gap-4">
            <div className="col-md-5 bg-white p-3">
              <div className="loan-status-box-title">
                <h6 className="ms-2">Email</h6>
                <HiDotsVertical className="fs-5 mt-1" />
              </div>
              <div>
                <table>
                  <thead></thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-md bg-white p-3">hello</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
