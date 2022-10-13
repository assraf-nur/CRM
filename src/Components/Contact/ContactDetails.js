import React, { useEffect, useState } from "react";
import contactProfile from "../Images/Profile/contact-profile.jpg";
import { FcCellPhone } from "react-icons/fc";
import { CgProfile } from "react-icons/cg";
import { HiDotsVertical } from "react-icons/hi";
import { FiCheckSquare, FiFilePlus } from "react-icons/fi";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { ProgressBar } from "react-bootstrap";
import profilePic from "../Images/Profile/profile-pic.png";
import profilePic2 from "../Images/Profile/profile-pic2.png";
import "../CSS/Style.css";

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

      <div className="m-1 mt-3 contact-details-page-links">
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
      <div className="m-1 mt-2 contact-details-page-links2">
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
      <div className="mx-1 mt-3 row gap-3">
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
        <div className="col-xl">
          <div className="row gap-4">
            <div className="col-md-5 bg-white p-3">
              <div className="loan-status-box-title">
                <h6 className="ms-2">Email</h6>
                <HiDotsVertical className="fs-5 mt-1" />
              </div>
              <div>
                <table className="table">
                  <thead></thead>
                  <tbody>
                    <tr>
                      <td>debra.holt@example.com</td>
                      <td>18/05/2022</td>
                      <td>
                        <HiDotsVertical
                          style={{ marginRight: "-12px" }}
                          className="fs-5 mb-1"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>bill.sanders@example.com</td>
                      <td>18/05/2022</td>
                      <td>
                        <HiDotsVertical
                          style={{ marginRight: "-12px" }}
                          className="fs-5 mb-1"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>tanya.hill@example.com</td>
                      <td>18/05/2022</td>
                      <td>
                        <HiDotsVertical
                          style={{ marginRight: "-12px" }}
                          className="fs-5 mb-1"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-md bg-white p-3">
              <div className="loan-status-box-title">
                <h6 className="ms-2">Call</h6>
                <h6 style={{ marginLeft: "-28px" }} className="me-5">
                  Time
                </h6>
                <HiDotsVertical className="fs-5 mt-1" />
              </div>
              <div>
                <table className="table">
                  <thead></thead>
                  <tbody>
                    <tr>
                      <td>(319) 555-0115</td>
                      <td>10.12 PM</td>
                      <td>18/05/2022</td>
                      <td>
                        <HiDotsVertical
                          style={{ marginRight: "-18px" }}
                          className="fs-5 mb-1"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>(319) 555-0115</td>
                      <td>10.12 PM</td>
                      <td>18/05/2022</td>
                      <td>
                        <HiDotsVertical
                          style={{ marginRight: "-18px" }}
                          className="fs-5 mb-1"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>(319) 555-0115</td>
                      <td>10.12 PM</td>
                      <td>18/05/2022</td>
                      <td>
                        <HiDotsVertical
                          style={{ marginRight: "-18px" }}
                          className="fs-5 mb-1"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="row gap-4">
              <div className="col-md-7 p-3 bg-white">
                <div>
                  <div className="loan-status-box-title">
                    <h6>Activity Timeline</h6>
                    <HiDotsVertical className="fs-5" />
                  </div>
                  <div>
                    <div class="step completed">
                      <div class="v-stepper">
                        <div class="circle"></div>
                        <div class="line"></div>
                      </div>

                      <div class="content w-100">
                        <div className="row">
                          <p className="col-sm-9 step-title">
                            Mrinmoy Krishna join in Jibble
                          </p>
                          <p className="col-sm-3 text-end">
                            <small>05 min ago</small>
                          </p>
                        </div>
                        <div className="d-flex gap-3 step-content">
                          <div>
                            <img
                              style={{ width: "40px", height: "40px" }}
                              src={profilePic}
                              alt=""
                            />
                          </div>
                          <div className="step-sub-content">
                            <p>Mrinmoy Krishna</p>
                            <small>UI UX Designer</small>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="step pending">
                      <div class="v-stepper">
                        <div class="circle"></div>
                        <div class="line"></div>
                      </div>

                      <div class="content w-100">
                        <div className="row">
                          <p className="col-sm-9 step-title">Client Meeting</p>
                          <p className="col-sm-3 text-end">
                            <small>45 min ago</small>
                          </p>
                        </div>
                        <p className="sub-paragraph">
                          Project meeting with Krishna @10:15am
                        </p>
                        <div className="d-flex gap-3 step-content">
                          <div>
                            <img
                              style={{ width: "40px", height: "40px" }}
                              src={profilePic2}
                              alt=""
                            />
                          </div>
                          <div className="step-sub-content">
                            <p>Krishna (Client)</p>
                            <small>Manager of XYZ</small>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="step completed">
                      <div class="v-stepper">
                        <div class="circle"></div>
                        <div class="line"></div>
                      </div>

                      <div class="content w-100">
                        <div className="row">
                          <p className="col-sm-9 step-title">
                            Mrinmoy Krishna join in Jibble
                          </p>
                          <p className="col-sm-3 text-end">
                            <small>05 min ago</small>
                          </p>
                        </div>
                        <div className="d-flex gap-3 step-content">
                          <div>
                            <img
                              style={{ width: "40px", height: "40px" }}
                              src={profilePic}
                              alt=""
                            />
                          </div>
                          <div className="step-sub-content">
                            <p>Mrinmoy Krishna</p>
                            <small>UI UX Designer</small>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="step">
                      <div class="v-stepper">
                        <div class="circle"></div>
                        <div class="line"></div>
                      </div>

                      <div class="content w-100">
                        <div className="row">
                          <p className="col-sm-9 step-title">
                            Create a new project for client
                          </p>
                          <p className="col-sm-3 text-end">
                            <small>1 day ago</small>
                          </p>
                        </div>
                        <p className="sub-paragraph">
                          5 team members in a project
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md p-3 bg-white">
                <div className="loan-status-box-title">
                  <h6>Call History</h6>
                  <HiDotsVertical className="fs-5" />
                </div>
                <div className="mt-2">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefaultList"
                      id="flexRadioDefaultList1"
                    />
                    <label class="form-check-label" for="flexRadioDefaultList1">
                      Appointment
                    </label>
                  </div>
                  <div class="form-check call-history-radio-button">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefaultList"
                      id="flexRadioDefaultList2"
                    />
                    <label class="form-check-label" for="flexRadioDefaultList2">
                      Left Message
                    </label>
                  </div>
                  <div class="form-check call-history-radio-button">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefaultList"
                      id="flexRadioDefaultList3"
                    />
                    <label class="form-check-label" for="flexRadioDefaultList3">
                      Busy Telephone Line
                    </label>
                  </div>
                  <div class="form-check call-history-radio-button">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefaultList"
                      id="flexRadioDefaultList4"
                    />
                    <label class="form-check-label" for="flexRadioDefaultList4">
                      Reminder
                    </label>
                  </div>
                  <div class="form-check call-history-radio-button">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefaultList"
                      id="flexRadioDefaultList5"
                    />
                    <label class="form-check-label" for="flexRadioDefaultList5">
                      Will Call Back
                    </label>
                  </div>
                  <div class="form-check call-history-radio-button">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefaultList"
                      id="flexRadioDefaultList6"
                    />
                    <label class="form-check-label" for="flexRadioDefaultList6">
                      Not Interested
                    </label>
                  </div>
                  <div class="form-check call-history-radio-button">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefaultList"
                      id="flexRadioDefaultList7"
                    />
                    <label class="form-check-label" for="flexRadioDefaultList7">
                      No Answer/Voicemail
                    </label>
                  </div>
                  <div class="form-check call-history-radio-button">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefaultList"
                      id="flexRadioDefaultList8"
                    />
                    <label class="form-check-label" for="flexRadioDefaultList8">
                      Do Not Call
                    </label>
                  </div>
                  <div class="form-check call-history-radio-button">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefaultList"
                      id="flexRadioDefaultList9"
                    />
                    <label class="form-check-label" for="flexRadioDefaultList9">
                      Wrong Number
                    </label>
                  </div>
                  <div class="form-check call-history-radio-button">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefaultList"
                      id="flexRadioDefaultList10"
                    />
                    <label
                      class="form-check-label"
                      for="flexRadioDefaultList10"
                    >
                      Discussed in details
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row gap-3">
          <div className="col-xl bg-white p-3">hello</div>
          <div className="col-xl bg-white p-3">hello</div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
