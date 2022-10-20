import React, { useEffect, useState } from "react";
import contactProfile from "../Images/Profile/contact-profile.jpg";
import { FcCellPhone } from "react-icons/fc";
import { FaEdit } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { HiDotsVertical, HiPlus } from "react-icons/hi";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { MdCancel, MdDelete } from "react-icons/md";
import { FiCheckSquare, FiFilePlus } from "react-icons/fi";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { Offcanvas, ProgressBar } from "react-bootstrap";
import profilePic from "../Images/Profile/profile-pic.png";
import profilePic2 from "../Images/Profile/profile-pic2.png";
import profilePic3 from "../Images/Profile/pro-icon.png";
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

  const [showMileStone, setShowMileStone] = useState(false);
  const [showAddMileStone, setShowAddMileStone] = useState(false);
  const [showNote, setShowAddNote] = useState(false);

  const handleClose1 = () => setShowMileStone(false);
  const handleShow1 = () => setShowMileStone(true);

  const handleClose2 = () => setShowAddMileStone(false);
  const handleShow2 = () => setShowAddMileStone(true);

  const handleClose3 = () => setShowAddNote(false);
  const handleShow3 = () => setShowAddNote(true);

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
        <a className="page-links2" onClick={handleShow3}>
          <FiFilePlus className="mb-1" /> Note
        </a>
        <a className="page-links2" onClick={handleShow2}>
          <FiFilePlus className="mb-1 me-1" />
          Add Millstone
        </a>
        <a className="page-links2" onClick={handleShow1}>
          <FiFilePlus className="mb-1 me-1" />
          Millstone
        </a>
        <a className="" href="{}">
          <FiFilePlus className="mb-1" /> Lender
        </a>
      </div>

      {/* off canvas start */}
      <Offcanvas
        className="off-canvas"
        placement="end"
        show={showMileStone}
        onHide={handleClose1}
      >
        <Offcanvas.Header className="canvas-banner" closeButton>
          <Offcanvas.Title className="ms-3 py-1">Milestone</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <div class="step">
              <div class="v-stepper">
                <div class="circle"></div>
                <div class="line"></div>
              </div>

              <div class="content w-100">
                <div className="row">
                  <p className="col-sm-5 step-title">21 Jan 2055</p>
                  <p className="col-sm-7">
                    <small>At 5.50 AM</small>
                  </p>
                </div>
                <div className="d-flex gap-3 step-content">
                  <div>
                    <img
                      className="mb-2"
                      style={{ width: "25px", height: "25px" }}
                      src={profilePic}
                      alt=""
                    />
                  </div>
                  <div className="step-sub-content">
                    <p className="mb-1 fs-6">Sam Haq</p>
                    <small className="fs-6 comment-milestone text-white px-2 py-1">
                      Appointment
                    </small>
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
                  <p className="col-sm-5 step-title">31 Feb 2050</p>
                  <p className="col-sm-7">
                    <small>At 11.11 PM</small>
                  </p>
                </div>
                <div className="d-flex gap-3 step-content">
                  <div>
                    <img
                      className="mb-2"
                      style={{ width: "25px", height: "25px" }}
                      src={profilePic}
                      alt=""
                    />
                  </div>
                  <div className="step-sub-content">
                    <p className="mb-1 fs-6">Sam Haq</p>
                    <small className="fs-6 comment-milestone text-white px-2 py-1">
                      Transfer Call
                    </small>
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
                  <p className="col-sm-5 step-title">31 Dec 2050</p>
                  <p className="col-sm-7">
                    <small>At 10.50 AM</small>
                  </p>
                </div>
                <div className="d-flex gap-3 step-content">
                  <div>
                    <img
                      className="mb-2"
                      style={{ width: "25px", height: "25px" }}
                      src={profilePic}
                      alt=""
                    />
                  </div>
                  <div className="step-sub-content">
                    <p className="mb-1 fs-6">Sam Haq</p>
                    <small className="fs-6 comment-milestone text-white px-2 py-1">
                      Pending Application
                    </small>
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
                  <p className="col-sm-5 step-title">3 Sep 2060</p>
                  <p className="col-sm-7">
                    <small>At 1.05 AM</small>
                  </p>
                </div>
                <div className="d-flex gap-3 step-content">
                  <div>
                    <img
                      className="mb-2"
                      style={{ width: "25px", height: "25px" }}
                      src={profilePic2}
                      alt=""
                    />
                  </div>
                  <div className="step-sub-content">
                    <p className="mb-1 fs-6">Arafin Haq</p>
                    <small className="fs-6 comment-milestone text-white px-2 py-1">
                      Processing
                    </small>
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
                  <p className="col-sm-5 step-title">1 Oct 2090</p>
                  <p className="col-sm-7">
                    <small>At 21.55 PM</small>
                  </p>
                </div>
                <div className="d-flex gap-3 step-content">
                  <div>
                    <img
                      className="mb-2"
                      style={{ width: "25px", height: "25px" }}
                      src={profilePic}
                      alt=""
                    />
                  </div>
                  <div className="step-sub-content">
                    <p className="mb-1 fs-6">Sam Haq</p>
                    <small className="fs-6 comment-milestone text-white px-2 py-1">
                      Loan Closed and Funded
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Note start */}
      <Offcanvas
        className="off-canvas"
        placement="end"
        show={showNote}
        onHide={handleClose3}
      >
        <Offcanvas.Header className="canvas-banner" closeButton>
          <Offcanvas.Title className="ms-3 py-1">Note</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="ms-3 mt-3">
            <div>
              <button className="add-new-button px-2 py-1">
                <HiPlus />
                Add New Note
              </button>
              <div class="form-floating mt-2">
                <form>
                  <textarea
                    class="form-control rounded"
                    placeholder="Leave your Note here"
                    id="floatingTextarea2"
                    style={{ height: "100px" }}
                  ></textarea>

                  <div className="mt-2">
                    <button className="add-new-button px-2 py-1 bg-success">
                      <HiPlus />
                      Add
                    </button>

                    <button className="add-new-button px-2 py-1 ms-3 bg-danger">
                      <MdCancel className="me-1 mb-1" />
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
              <div>
                <div className="border p-4 rounded mt-4">
                  <div className="note-upper-part">
                    <div className="d-flex gap-3 step-content">
                      <div>
                        <img
                          className=""
                          style={{ width: "40px", height: "42px", borderRadius: "50%" }}
                          src={profilePic3}
                          alt=""
                        />
                      </div>
                      <div className="step-sub-content">
                        <p className="fw-semibold">admin@admin.com</p>
                        <small>
                          08/08/2022 <GoPrimitiveDot /> 8.05pm
                        </small>
                      </div>
                    </div>
                    
                    <div class="dropdown">
                      <button class="note-option-button" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                       <HiDotsVertical className="fs-5" />
                      </button>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="{#}"><FaEdit className="mb-1 me-1"/> Edit</a></li>
                        <li><a class="dropdown-item" href="{#}"> <MdDelete className="mb-1 me-1"/> Delete</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="note-lower-part">
                    <p className="mt-4">
                      By combining state of the art artificial intelligence &
                      ClipDrop provides a unique, continuous workflow that....
                      ClipDrop provides a unique, continuous workflow that....
                      ClipDrop provides a unique, continuous workflow that....
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="border p-4 rounded mt-4">
                  <div className="note-upper-part">
                    <div className="d-flex gap-3 step-content">
                      <div>
                        <img
                          className=""
                          style={{ width: "40px", height: "42px", borderRadius: "50%" }}
                          src={profilePic3}
                          alt=""
                        />
                      </div>
                      <div className="step-sub-content">
                        <p className="fw-semibold">admin@admin.com</p>
                        <small>
                          08/08/2022 <GoPrimitiveDot /> 8.05pm
                        </small>
                      </div>
                    </div>
                    
                    <div class="dropdown">
                      <button class="note-option-button" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                       <HiDotsVertical className="fs-5" />
                      </button>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="{#}"><FaEdit className="mb-1 me-1"/> Edit</a></li>
                        <li><a class="dropdown-item" href="{#}"> <MdDelete className="mb-1 me-1"/> Delete</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="note-lower-part">
                    <p className="mt-4">
                      By combining state of the art artificial intelligence &
                      ClipDrop provides a unique, continuous workflow that....
                      ClipDrop provides a unique, continuous workflow that....
                      ClipDrop provides a unique, continuous workflow that....
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="border p-4 rounded mt-4">
                  <div className="note-upper-part">
                    <div className="d-flex gap-3 step-content">
                      <div>
                        <img
                          className=""
                          style={{ width: "40px", height: "42px", borderRadius: "50%" }}
                          src={profilePic3}
                          alt=""
                        />
                      </div>
                      <div className="step-sub-content">
                        <p className="fw-semibold">admin@admin.com</p>
                        <small>
                          08/08/2022 <GoPrimitiveDot /> 8.05pm
                        </small>
                      </div>
                    </div>
                    
                    <div class="dropdown">
                      <button class="note-option-button" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                       <HiDotsVertical className="fs-5" />
                      </button>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="{#}"><FaEdit className="mb-1 me-1"/> Edit</a></li>
                        <li><a class="dropdown-item" href="{#}"> <MdDelete className="mb-1 me-1"/> Delete</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="note-lower-part">
                    <p className="mt-4">
                      By combining state of the art artificial intelligence &
                      ClipDrop provides a unique, continuous workflow that....
                      ClipDrop provides a unique, continuous workflow that....
                      ClipDrop provides a unique, continuous workflow that....
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      {/* Note end */}

      <Offcanvas
        className="off-canvas"
        placement="end"
        show={showAddMileStone}
        onHide={handleClose2}
      >
        <Offcanvas.Header className="canvas-banner" closeButton>
          <Offcanvas.Title className="ms-3 py-1">Add Milestone</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="ms-3 mt-3">
            <form>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefaultProspect"
                />
                <label class="form-check-label" for="flexCheckDefaultProspect">
                  Prospect
                </label>
              </div>
              <div class="form-check mt-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefaultTransfer"
                />
                <label class="form-check-label" for="flexCheckDefaultTransfer">
                  Transfer call
                </label>
              </div>
              <div class="form-check mt-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefaultAppointment"
                />
                <label
                  class="form-check-label"
                  for="flexCheckDefaultAppointment"
                >
                  Appointment
                </label>
              </div>
              <div class="form-check mt-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefaultPending"
                />
                <label class="form-check-label" for="flexCheckDefaultPending">
                  Pending Application
                </label>
              </div>
              <div class="form-check mt-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefaultReady"
                />
                <label class="form-check-label" for="flexCheckDefaultReady">
                  Application Ready
                </label>
              </div>
              <div class="form-check mt-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefaultProcessing"
                />
                <label
                  class="form-check-label"
                  for="flexCheckDefaultProcessing"
                >
                  Processing
                </label>
              </div>
              <div class="form-check mt-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefaultDocuments"
                />
                <label class="form-check-label" for="flexCheckDefaultDocuments">
                  Pending Documents
                </label>
              </div>
              <div class="form-check mt-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefaultSuspended"
                />
                <label class="form-check-label" for="flexCheckDefaultSuspended">
                  Application Suspended
                </label>
              </div>
              <div class="form-check mt-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefaultApproval"
                />
                <label class="form-check-label" for="flexCheckDefaultApproval">
                  Submitted For Approval
                </label>
              </div>
              <div class="form-check mt-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefaultSignature"
                />
                <label class="form-check-label" for="flexCheckDefaultSignature">
                  Approved-Signature Required
                </label>
              </div>
              <div class="form-check mt-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefaultLoan"
                />
                <label class="form-check-label" for="flexCheckDefaultLoan">
                  Signed Loan Documents
                </label>
              </div>
              <div class="form-check mt-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefaultFunded"
                />
                <label class="form-check-label" for="flexCheckDefaultFunded">
                  Loan closed and Funded
                </label>
              </div>
              <div class="form-check mt-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefaultCommission"
                />
                <label
                  class="form-check-label"
                  for="flexCheckDefaultCommission"
                >
                  Commission Paid
                </label>
              </div>
              <div class="form-check mt-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefaultQC"
                />
                <label class="form-check-label" for="flexCheckDefaultQC">
                  QC and Closed File
                </label>
              </div>
              <div class="form-check mt-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefaultWithdrawal"
                />
                <label
                  class="form-check-label"
                  for="flexCheckDefaultWithdrawal"
                >
                  Loan Withdrawal
                </label>
              </div>
            </form>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      {/* off canvas end */}

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
          <div className="col-xl bg-white p-3 overflow-auto h-75">
            <div className="loan-status-box-title border-bottom">
              <h6 className="pb-1">Notes</h6>
            </div>
            <div>
              <div className="border p-4 rounded mt-4">
                <div className="note-upper-part">
                  <div className="d-flex gap-3 step-content">
                    <div>
                      <img
                        className=""
                        style={{ width: "40px", height: "40px" }}
                        src={profilePic}
                        alt=""
                      />
                    </div>
                    <div className="step-sub-content">
                      <p className="fw-semibold">Mrinmoy Krishna</p>
                      <small>
                        08/08/2022 <GoPrimitiveDot /> 8.05pm
                      </small>
                    </div>
                  </div>
                  <HiDotsVertical className="fs-5" />
                </div>
                <div className="note-lower-part">
                  <h6>Working form 🏠 home</h6>
                  <p>
                    By combining state of the art artificial intelligence &
                    ClipDrop provides a unique, continuous workflow that....
                    ClipDrop provides a unique, continuous workflow that....
                    ClipDrop provides a unique, continuous workflow that....
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="border p-4 rounded mt-4">
                <div className="note-upper-part">
                  <div className="d-flex gap-3 step-content">
                    <div>
                      <img
                        className=""
                        style={{ width: "40px", height: "40px" }}
                        src={profilePic2}
                        alt=""
                      />
                    </div>
                    <div className="step-sub-content">
                      <p className="fw-semibold">Yen Ku Kr</p>
                      <small>
                        08/08/2022 <GoPrimitiveDot /> 8.05pm
                      </small>
                    </div>
                  </div>
                  <HiDotsVertical className="fs-5" />
                </div>
                <div className="note-lower-part">
                  <h6>Working form office 🧑‍💼 all time</h6>
                  <p>
                    By combining state of the art artificial intelligence &
                    ClipDrop provides a unique, continuous workflow that....
                    ClipDrop provides a unique, continuous workflow that....
                    ClipDrop provides a unique, continuous workflow that....
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="border p-4 rounded mt-4">
                <div className="note-upper-part">
                  <div className="d-flex gap-3 step-content">
                    <div>
                      <img
                        className=""
                        style={{ width: "40px", height: "40px" }}
                        src={profilePic}
                        alt=""
                      />
                    </div>
                    <div className="step-sub-content">
                      <p className="fw-semibold">Mrinmoy Krishna</p>
                      <small>
                        08/08/2022 <GoPrimitiveDot /> 8.05pm
                      </small>
                    </div>
                  </div>
                  <HiDotsVertical className="fs-5" />
                </div>
                <div className="note-lower-part">
                  <h6>Working form 🏠 home</h6>
                  <p>
                    By combining state of the art artificial intelligence &
                    ClipDrop provides a unique, continuous workflow that....
                    ClipDrop provides a unique, continuous workflow that....
                    ClipDrop provides a unique, continuous workflow that....
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl bg-white p-3 h-75 overflow-auto">
            <div className="loan-status-box-title border-bottom">
              <h6 className="pb-1">Lender list</h6>
            </div>
            <div className="mt-3 lender-list-box">
              <h6>Email : Submission Email :</h6>
              <div className="row border-bottom border-top">
                <div className="col-md p-3 border-end">
                  <div class="form-check mb-4">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadio"
                      id="flexRadioDefault1_Submitted"
                    />
                    <label
                      class="form-check-label"
                      for="flexRadioDefault1_Submitted"
                    >
                      Submitted
                    </label>
                  </div>
                  <div class="form-check mb-4">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadio"
                      id="flexRadioDefault1_Pending"
                    />
                    <label
                      class="form-check-label"
                      for="flexRadioDefault1_Pending"
                    >
                      Pending
                    </label>
                  </div>
                  <div class="form-check mb-4">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadio"
                      id="flexRadioDefault1_Approved"
                    />
                    <label
                      class="form-check-label"
                      for="flexRadioDefault1_Approved"
                    >
                      Approved
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadio"
                      id="flexRadioDefault1_Funded"
                    />
                    <label
                      class="form-check-label"
                      for="flexRadioDefault1_Funded"
                    >
                      Funded
                    </label>
                  </div>
                </div>
                <div className="col-md p-3">
                  <div className="mt-1">
                    <p className="mb-4">
                      <BsArrowRightSquareFill className="me-1 mb-1 fs-5 text-success" />{" "}
                      Submitted in 17 October 2022 at 11.28 PM
                    </p>
                    <p className="mb-4">
                      <BsArrowRightSquareFill className="me-1 mb-1 fs-5 text-success" />{" "}
                      Pending in 17 October 2022 at 11.28 PM
                    </p>
                    <p className="mb-4">
                      <BsArrowRightSquareFill className="me-1 mb-1 fs-5 text-success" />{" "}
                      Approved in 17 October 2022 at 11.28 PM
                    </p>
                    <p className="">
                      <BsArrowRightSquareFill className="me-1 mb-1 fs-5 text-success" />{" "}
                      Funded in 17 October 2022 at 11.28 PM
                    </p>
                  </div>
                </div>
              </div>

              <h6 className="mt-4">Velocity Mortgage Capital Email:</h6>
              <div className="row border-bottom border-top">
                <div className="col-md p-3 border-end">
                  <div class="form-check mb-4">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadio23"
                      id="flexRadio_Submitted"
                    />
                    <label class="form-check-label" for="flexRadio_Submitted">
                      Submitted
                    </label>
                  </div>
                  <div class="form-check mb-4">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadio23"
                      id="flexRadio_Pending"
                    />
                    <label class="form-check-label" for="flexRadio_Pending">
                      Pending
                    </label>
                  </div>
                  <div class="form-check mb-4">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadio23"
                      id="flexRadio_Approved"
                    />
                    <label class="form-check-label" for="flexRadio_Approved">
                      Approved
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadio23"
                      id="flexRadio_Funded"
                    />
                    <label class="form-check-label" for="flexRadio_Funded">
                      Funded
                    </label>
                  </div>
                </div>
                <div className="col-md p-3">
                  <div className="mt-1">
                    <p className="mb-4">
                      <BsArrowRightSquareFill className="me-1 mb-1 fs-5 text-success" />{" "}
                      Submitted in 17 October 2022 at 11.28 PM
                    </p>
                    <p className="mb-4">
                      <BsArrowRightSquareFill className="me-1 mb-1 fs-5 text-success" />{" "}
                      Pending in 17 October 2022 at 11.28 PM
                    </p>
                    <p className="mb-4">
                      <BsArrowRightSquareFill className="me-1 mb-1 fs-5 text-success" />{" "}
                      Approved in 17 October 2022 at 11.28 PM
                    </p>
                    <p className="">
                      <BsArrowRightSquareFill className="me-1 mb-1 fs-5 text-success" />{" "}
                      Funded in 17 October 2022 at 11.28 PM
                    </p>
                  </div>
                </div>
              </div>

              <h6 className="mt-4">Email : Submission Email :</h6>
              <div className="row border-bottom border-top">
                <div className="col-md p-3 border-end">
                  <div class="form-check mb-4">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadio3"
                      id="flexRadioDefault_Submitted"
                    />
                    <label
                      class="form-check-label"
                      for="flexRadioDefault_Submitted"
                    >
                      Submitted
                    </label>
                  </div>
                  <div class="form-check mb-4">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadio3"
                      id="flexRadioDefault_Pending"
                    />
                    <label
                      class="form-check-label"
                      for="flexRadioDefault_Pending"
                    >
                      Pending
                    </label>
                  </div>
                  <div class="form-check mb-4">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadio3"
                      id="flexRadioDefault_Approved"
                    />
                    <label
                      class="form-check-label"
                      for="flexRadioDefault_Approved"
                    >
                      Approved
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadio3"
                      id="flexRadioDefault_Funded"
                    />
                    <label
                      class="form-check-label"
                      for="flexRadioDefault_Funded"
                    >
                      Funded
                    </label>
                  </div>
                </div>
                <div className="col-md p-3">
                  <div className="mt-1">
                    <p className="mb-4">
                      <BsArrowRightSquareFill className="me-1 mb-1 fs-5 text-success" />{" "}
                      Submitted in 17 October 2022 at 11.28 PM
                    </p>
                    <p className="mb-4">
                      <BsArrowRightSquareFill className="me-1 mb-1 fs-5 text-success" />{" "}
                      Pending in 17 October 2022 at 11.28 PM
                    </p>
                    <p className="mb-4">
                      <BsArrowRightSquareFill className="me-1 mb-1 fs-5 text-success" />{" "}
                      Approved in 17 October 2022 at 11.28 PM
                    </p>
                    <p className="">
                      <BsArrowRightSquareFill className="me-1 mb-1 fs-5 text-success" />{" "}
                      Funded in 17 October 2022 at 11.28 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
