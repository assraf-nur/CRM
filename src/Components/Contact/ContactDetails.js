import React, { useEffect, useState } from "react";
import contactProfile from "../Images/Profile/contact-profile.jpg";
import { FcCellPhone } from "react-icons/fc";
import { CgProfile } from "react-icons/cg";
import { HiDotsVertical } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { FiCheckSquare, FiFilePlus } from "react-icons/fi";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { Modal, Offcanvas, ProgressBar } from "react-bootstrap";
import profilePic from "../Images/Profile/profile-pic.png";
import profilePic2 from "../Images/Profile/profile-pic2.png";
import "../CSS/Style.css";
import MilestoneCanvas from "./OffCanvas/MilestoneCanvas";
import ToDoList from "./OffCanvas/ToDoList";
import Note from "./OffCanvas/Note";
import AddMilestone from "./OffCanvas/AddMilestone";
import Appointments from "./OffCanvas/Appointments";
import EmailModal from "./Modals/EmailModal";
import AddPapers from "./OffCanvas/AddPapers";
import TextInformationModal from "./Modals/TextInformationModal";

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
  const [showToDo, setShowToDo] = useState(false);
  const [showAppointment, setShowAppointment] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showTextInformationModal, setShowTextInformationModal] =
    useState(false);
  const [showAddPapers, setShowAddPapers] = useState(false);

  const handleClose1 = () => setShowMileStone(false);
  const handleShow1 = () => setShowMileStone(true);

  const handleClose2 = () => setShowAddMileStone(false);
  const handleShow2 = () => setShowAddMileStone(true);

  const handleClose3 = () => setShowAddNote(false);
  const handleShow3 = () => setShowAddNote(true);

  const handleClose4 = () => setShowToDo(false);
  const handleShow4 = () => setShowToDo(true);

  const handleCloseAppointment = () => setShowAppointment(false);
  const handleShowAppointment = () => setShowAppointment(true);

  const handleCloseTextInformationModal = () =>
    setShowTextInformationModal(false);
  const handleShowTextInformationModal = () =>
    setShowTextInformationModal(true);

  const handleCloseEmailModal = () => setShowEmailModal(false);
  const handleShowEmailModal = () => setShowEmailModal(true);

  const handleCloseAddPapers = () => setShowAddPapers(false);
  const handleShowAddPapers = () => setShowAddPapers(true);

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
        <button className="border-end border-stat py-1">
          <CgProfile className="mb-1" /> Profile
        </button>
        <button className="border-end border-stat py-1" onClick={handleShowEmailModal}>
          <AiOutlineMail className="mb-1" /> Email
        </button>
        <button className="border-end border-stat py-1" onClick={handleShowAppointment}>
          <FiCheckSquare className="mb-1" /> Appointment
        </button>
        <button className="border-end border-stat py-1" onClick={handleShowAddPapers}>
          <FiFilePlus className="mb-1" />
          Add Papers
        </button>
        <button className="border-end border-stat py-1" onClick={handleShow4}>
          <FiFilePlus className="mb-1" /> To-Do List
        </button>
        <button className="border-end border-stat py-1" onClick={handleShow3}>
          <FiFilePlus className="mb-1" /> Note
        </button>
        <button className="border-end border-stat py-1" onClick={handleShow2}>
          <FiFilePlus className="mb-1 me-1" />
          Add Millstone
        </button>
        <button className="border-end border-stat py-1" onClick={handleShow1}>
          <FiFilePlus className="mb-1 me-1" />
          Millstone
        </button>
        <button className="border-end border-stat py-1" onClick={handleShowTextInformationModal}>
          <FiFilePlus className="mb-1" /> Text Information
        </button>
        <div className="ms-auto mt-1 d-flex">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioExcellent"
            />
            <label
              className="form-check-label text-success"
              for="flexRadioExcellent"
            >
              Excellent
            </label>
          </div>
          <div className="form-check ms-3">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioGood"
              checked
            />
            <label className="form-check-label text-info" for="flexRadioGood">
              Good
            </label>
          </div>
          <div className="form-check ms-3">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioAverage"
              checked
            />
            <label className="form-check-label text-primary" for="flexRadioAverage">
              Average
            </label>
          </div>
          <div className="form-check ms-3">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioPoor"
              checked
            />
            <label className="form-check-label text-warning" for="flexRadioPoor">
              Poor
            </label>
          </div>
          <div className="form-check ms-3">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDeclined"
              checked
            />
            <label className="form-check-label text-danger" for="flexRadioDeclined">
              Declined
            </label>
          </div>
        </div>
      </div>
      {/* email modal start */}
      <Modal
        className="email-modal"
        show={showEmailModal}
        onHide={handleCloseEmailModal}
      >
        <EmailModal></EmailModal>
      </Modal>
      {/* email modal ens */}

      {/* Text information ModaL START */}
      <Modal
        className="email-modal"
        show={showTextInformationModal}
        onHide={handleCloseTextInformationModal}
      >
        <TextInformationModal></TextInformationModal>
      </Modal>
      {/* Text information ModaL END */}

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
          {/* Milestone inner part */}
          <MilestoneCanvas></MilestoneCanvas>
        </Offcanvas.Body>
      </Offcanvas>

      <Offcanvas
        className="off-canvas"
        placement="end"
        show={showAppointment}
        onHide={handleCloseAppointment}
      >
        <Offcanvas.Header className="canvas-banner" closeButton>
          <Offcanvas.Title className="ms-3 py-1">Appointments</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* Appointments inner part */}
          <Appointments></Appointments>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Add papers start */}
      <Offcanvas
        className="off-canvas"
        placement="end"
        show={showAddPapers}
        onHide={handleCloseAddPapers}
      >
        <Offcanvas.Header className="canvas-banner" closeButton>
          <Offcanvas.Title className="ms-3 py-1">Add Papers</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* Milestone inner part */}
          <AddPapers></AddPapers>
        </Offcanvas.Body>
      </Offcanvas>
      {/* Add papers end */}

      <Offcanvas
        className="off-canvas"
        placement="end"
        show={showToDo}
        onHide={handleClose4}
      >
        <Offcanvas.Header className="canvas-banner" closeButton>
          <Offcanvas.Title className="ms-3 py-1">To-Do List</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* todo list inner part */}
          <ToDoList></ToDoList>
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
          {/* Note inner part */}
          <Note></Note>
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
          {/* add milestone inner part */}
          <AddMilestone></AddMilestone>
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
                    <div className="step completed">
                      <div className="v-stepper">
                        <div className="circle"></div>
                        <div className="line"></div>
                      </div>

                      <div className="content w-100">
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

                    <div className="step pending">
                      <div className="v-stepper">
                        <div className="circle"></div>
                        <div className="line"></div>
                      </div>

                      <div className="content w-100">
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

                    <div className="step completed">
                      <div className="v-stepper">
                        <div className="circle"></div>
                        <div className="line"></div>
                      </div>

                      <div className="content w-100">
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

                    <div className="step">
                      <div className="v-stepper">
                        <div className="circle"></div>
                        <div className="line"></div>
                      </div>

                      <div className="content w-100">
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
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefaultList"
                      id="flexRadioDefaultList1"
                    />
                    <label className="form-check-label" for="flexRadioDefaultList1">
                      Appointment
                    </label>
                  </div>
                  <div className="form-check call-history-radio-button">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefaultList"
                      id="flexRadioDefaultList2"
                    />
                    <label className="form-check-label" for="flexRadioDefaultList2">
                      Left Message
                    </label>
                  </div>
                  <div className="form-check call-history-radio-button">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefaultList"
                      id="flexRadioDefaultList3"
                    />
                    <label className="form-check-label" for="flexRadioDefaultList3">
                      Busy Telephone Line
                    </label>
                  </div>
                  <div className="form-check call-history-radio-button">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefaultList"
                      id="flexRadioDefaultList4"
                    />
                    <label className="form-check-label" for="flexRadioDefaultList4">
                      Reminder
                    </label>
                  </div>
                  <div className="form-check call-history-radio-button">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefaultList"
                      id="flexRadioDefaultList5"
                    />
                    <label className="form-check-label" for="flexRadioDefaultList5">
                      Will Call Back
                    </label>
                  </div>
                  <div className="form-check call-history-radio-button">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefaultList"
                      id="flexRadioDefaultList6"
                    />
                    <label className="form-check-label" for="flexRadioDefaultList6">
                      Not Interested
                    </label>
                  </div>
                  <div className="form-check call-history-radio-button">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefaultList"
                      id="flexRadioDefaultList7"
                    />
                    <label className="form-check-label" for="flexRadioDefaultList7">
                      No Answer/Voicemail
                    </label>
                  </div>
                  <div className="form-check call-history-radio-button">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefaultList"
                      id="flexRadioDefaultList8"
                    />
                    <label className="form-check-label" for="flexRadioDefaultList8">
                      Do Not Call
                    </label>
                  </div>
                  <div className="form-check call-history-radio-button">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefaultList"
                      id="flexRadioDefaultList9"
                    />
                    <label className="form-check-label" for="flexRadioDefaultList9">
                      Wrong Number
                    </label>
                  </div>
                  <div className="form-check call-history-radio-button">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefaultList"
                      id="flexRadioDefaultList10"
                    />
                    <label
                      className="form-check-label"
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
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadio"
                      id="flexRadioDefault1_Submitted"
                    />
                    <label
                      className="form-check-label"
                      for="flexRadioDefault1_Submitted"
                    >
                      Submitted
                    </label>
                  </div>
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadio"
                      id="flexRadioDefault1_Pending"
                    />
                    <label
                      className="form-check-label"
                      for="flexRadioDefault1_Pending"
                    >
                      Pending
                    </label>
                  </div>
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadio"
                      id="flexRadioDefault1_Approved"
                    />
                    <label
                      className="form-check-label"
                      for="flexRadioDefault1_Approved"
                    >
                      Approved
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadio"
                      id="flexRadioDefault1_Funded"
                    />
                    <label
                      className="form-check-label"
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
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadio23"
                      id="flexRadio_Submitted"
                    />
                    <label className="form-check-label" for="flexRadio_Submitted">
                      Submitted
                    </label>
                  </div>
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadio23"
                      id="flexRadio_Pending"
                    />
                    <label className="form-check-label" for="flexRadio_Pending">
                      Pending
                    </label>
                  </div>
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadio23"
                      id="flexRadio_Approved"
                    />
                    <label className="form-check-label" for="flexRadio_Approved">
                      Approved
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadio23"
                      id="flexRadio_Funded"
                    />
                    <label className="form-check-label" for="flexRadio_Funded">
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
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadio3"
                      id="flexRadioDefault_Submitted"
                    />
                    <label
                      className="form-check-label"
                      for="flexRadioDefault_Submitted"
                    >
                      Submitted
                    </label>
                  </div>
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadio3"
                      id="flexRadioDefault_Pending"
                    />
                    <label
                      className="form-check-label"
                      for="flexRadioDefault_Pending"
                    >
                      Pending
                    </label>
                  </div>
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadio3"
                      id="flexRadioDefault_Approved"
                    />
                    <label
                      className="form-check-label"
                      for="flexRadioDefault_Approved"
                    >
                      Approved
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadio3"
                      id="flexRadioDefault_Funded"
                    />
                    <label
                      className="form-check-label"
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
