import React from "react";
import { FaUserFriends } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { FiCalendar } from "react-icons/fi";
import { BiImport, BiExport } from "react-icons/bi";
import totalCustomer from "../Images/SVG/total-customer.svg";
import hotLead from "../Images/SVG/hot-lead.svg";
import prospect from "../Images/SVG/prospect.svg";
import pendingApplication from "../Images/SVG/pending-application.svg";
import singleApplication from "../Images/SVG/single-application.svg";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import profilePic from "../Images/Profile/profile-pic.png";
import profilePic2 from "../Images/Profile/profile-pic2.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Table } from "react-bootstrap";
import redCall from "../Images/SVG/red-call.svg";
import blueCall from "../Images/SVG/blue-call.svg";
import callPic from "../Images/Profile/call-pic1.png";
import callPic2 from "../Images/Profile/call-pic2.png";
import callPic3 from "../Images/Profile/call-pic3.png";
import callPic4 from "../Images/Profile/call-pic4.png";
import callPic5 from "../Images/Profile/call-pic5.png";
import callPic6 from "../Images/Profile/call-pic6.png";

const CustomerData = () => {
  const percentage = 50;
  return (
    <div>
      <div className="top-dash-option">
        <div className="ms-1">
          <h5 className="fw-semibold">CRM Dashboard</h5>
        </div>
        <div className="me-1">
          <a className="dash-option-content" href=""><FiCalendar className="mb-1"/> Calender</a>
          <a className="dash-option-content" href=""><BiImport className="mb-1"/> Import</a>
          <a className="dash-option-content" href=""><BiExport className="mb-1"/> Export</a>
          <a className="dash-option-content" href=""><AiOutlinePlus className="mb-1"/> Add New</a>
        </div>
      </div>
      <div className="row gap-4 px-3 mt-4">
        <div className="col-xl dash-card">
          <div className="d-flex">
            <div className="dash-card-icon">
              <FaUserFriends className="fs-4" />
            </div>
            <div className="dash-card-text">
              <p className="mb-2">Total Customers</p>
              <h5>
                6,680 <span>+40</span>
              </h5>
            </div>
          </div>
          <div className="dash-card-image">
            <img src={totalCustomer} alt="" />
          </div>
        </div>
        <div className="col-xl dash-card">
          <div className="d-flex">
            <div className="dash-card-icon2">
              <FaUserFriends className="fs-4" />
            </div>
            <div className="dash-card-text2">
              <p className="mb-2">Hot Leads</p>
              <h5>
                6,680 <span>+40</span>
              </h5>
            </div>
          </div>
          <div className="dash-card-image">
            <img src={hotLead} alt="" />
          </div>
        </div>
        <div className="col-xl dash-card">
          <div className="d-flex">
            <div className="dash-card-icon3">
              <FaUserFriends className="fs-4" />
            </div>
            <div className="dash-card-text3">
              <p className="mb-2">Prospect</p>
              <h5>
                6,680 <span>+40</span>
              </h5>
            </div>
          </div>
          <div className="dash-card-image">
            <img src={prospect} alt="" />
          </div>
        </div>
        <div className="col-xl dash-card">
          <div className="d-flex">
            <div className="dash-card-icon4">
              <FaUserFriends className="fs-4" />
            </div>
            <div className="dash-card-text4">
              <p className="mb-2">Pending Application</p>
              <h5>
                6,680 <span>+40</span>
              </h5>
            </div>
          </div>
          <div className="dash-card-image">
            <img src={pendingApplication} alt="" />
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="row gap-4 px-3">
          <div className="col-xl dash-card">
            <div className="d-flex">
              <div className="dash-card-icon5">
                <FaUserFriends className="fs-4" />
              </div>
              <div className="dash-card-text5">
                <p className="mb-2">Signed Application</p>
                <h5>
                  6,680 <span>+40</span>
                </h5>
              </div>
            </div>
            <div className="dash-card-image">
              <img src={singleApplication} alt="" />
            </div>
          </div>
          <div className="col-xl dash-card">
            <div className="d-flex">
              <div className="dash-card-icon6">
                <FaUserFriends className="fs-4" />
              </div>
              <div className="dash-card-text6">
                <p className="mb-2">Collaborator</p>
                <h5>
                  6,680 <span>+40</span>
                </h5>
              </div>
            </div>
            <div className="dash-card-image"></div>
          </div>
          <div className="col-xl dash-card">
            <div className="d-flex">
              <div className="dash-card-text3 ms-3">
                <p className="mb-2">To Do</p>
                <h5>
                  6,680 <span>+40</span>
                </h5>
              </div>
            </div>
            <div className="dash-card-circle-progress">
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                strokeWidth={15}
                styles={buildStyles({
                  textSize: "22px",
                  pathColor: "#fab323",
                  trailColor: "#FEE6B5",
                })}
              />
            </div>
          </div>
          <div className="col-xl dash-card">
            <div className="d-flex">
              <div className="dash-card-text4 ms-3">
                <p className="mb-2">Appointment</p>
                <h5>
                  6,680 <span>+40</span>
                </h5>
              </div>
            </div>
            <div className="dash-card-circle-progress">
              <CircularProgressbar
                value={75}
                text={`${75}`}
                strokeWidth={15}
                styles={buildStyles({
                  textSize: "22px",
                  pathColor: "#4F92FD",
                  trailColor: "#C0D9FF",
                })}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="row gap-4 px-3">
          <div className="col-xl p-3 dash-card">
            <div className="d-flex">
              <div className="dash-card-text">
                <h6>Next Appointment</h6>
                <div className="d-flex gap-2 mt-3 appointment-card">
                  <img src={profilePic} alt="" />
                  <p className="mt-1">Meeting with M Khan</p>
                </div>
              </div>
            </div>
            <div className="appointment-card-time">
              <p>5.00PM</p>
            </div>
          </div>
          <div className="col-xl"></div>
          <div className="col-xl"></div>
          <div className="col-xl"></div>
        </div>
      </div>

      <div className="px-3 mt-4 mb-4">
        <div className="row gap-4">
          <div className="col-xl crm-box p-4">
            <div>
              <div className="box-title">
                <h5>Activity Timeline</h5>
                <MoreVertIcon />
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
                        <img src={profilePic} alt="" />
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
                        <img src={profilePic2} alt="" />
                      </div>
                      <div className="step-sub-content">
                        <p>Krishna (Client)</p>
                        <small>Manager of XYZ</small>
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
                    <p className="sub-paragraph">5 team members in a project</p>
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
                        Running out of juice
                      </p>
                      <p className="col-sm-3 text-end">
                        <small>05 min ago</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl crm-box p-4">
            <div>
              <div className="box-title">
                <h5>Call Logs</h5>
                {/* <MoreVertIcon /> */}
              </div>
              <div className="mt-1">
                <Table className="table-box" responsive="sm">
                  <thead></thead>
                  <tbody>
                    <tr>
                      <td>
                        <img src={callPic} alt="" />
                      </td>
                      <td>Dianne Russell</td>
                      <td>
                        <img src={redCall} alt="" />
                      </td>
                      <td>18 April 2022</td>
                      <td>22.02.20</td>
                      <td className="table-content-side-option">
                        <MoreVertIcon />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src={callPic2} alt="" />
                      </td>
                      <td>Dianne Russell</td>
                      <td>
                        <img src={blueCall} alt="" />
                      </td>
                      <td>18 April 2022</td>
                      <td>22.02.20</td>
                      <td className="table-content-side-option">
                        <MoreVertIcon />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src={callPic3} alt="" />
                      </td>
                      <td>Dianne Russell</td>
                      <td>
                        <img src={blueCall} alt="" />
                      </td>
                      <td>18 April 2022</td>
                      <td>22.02.20</td>
                      <td className="table-content-side-option">
                        <MoreVertIcon />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src={callPic4} alt="" />
                      </td>
                      <td>Dianne Russell</td>
                      <td>
                        <img src={redCall} alt="" />
                      </td>
                      <td>18 April 2022</td>
                      <td>22.02.20</td>
                      <td className="table-content-side-option">
                        <MoreVertIcon />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src={callPic5} alt="" />
                      </td>
                      <td>Dianne Russell</td>
                      <td>
                        <img src={redCall} alt="" />
                      </td>
                      <td>18 April 2022</td>
                      <td>22.02.20</td>
                      <td className="table-content-side-option">
                        <MoreVertIcon />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src={callPic6} alt="" />
                      </td>
                      <td>Dianne Russell</td>
                      <td>
                        <img src={blueCall} alt="" />
                      </td>
                      <td>18 April 2022</td>
                      <td>22.02.20</td>
                      <td className="table-content-side-option">
                        <MoreVertIcon />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
          <div className="col-xl crm-box p-4">
            <div className="team-box">
              <div className="box-title mb-1">
                <h5>Team Members</h5>
              </div>
              <div className="row box-content">
                <div className="col-md-5 d-flex gap-2">
                  <img src={callPic6} alt="" />
                  <p className="mt-1">Mrinmoy Krishna</p>
                </div>
                <div className="col-md-5">
                  <p className="mt-1">Team Lead</p>
                </div>
                <div className="col-md-2 online">
                  <p className="mt-1">Online</p>
                </div>
              </div>
              <div className="row mt-2 box-content">
                <div className="col-md-5 d-flex gap-2">
                  <img src={callPic5} alt="" />
                  <p className="mt-1">Jenny Wilson</p>
                </div>
                <div className="col-md-5">
                  <p className="mt-1">Web Designer</p>
                </div>
                <div className="col-md-2 offline">
                  <p className="mt-1">Offline</p>
                </div>
              </div>
              <div className="row mt-2 box-content">
                <div className="col-md-5 d-flex gap-2">
                  <img src={callPic4} alt="" />
                  <p className="mt-1">Guy Hawkins</p>
                </div>
                <div className="col-md-5">
                  <p className="mt-1">Dog Trainer</p>
                </div>
                <div className="col-md-2 online">
                  <p className="mt-1">Online</p>
                </div>
              </div>
              <div className="row mt-2 box-content">
                <div className="col-md-5 d-flex gap-2">
                  <img src={callPic3} alt="" />
                  <p className="mt-1">Arlene McCoy</p>
                </div>
                <div className="col-md-5">
                  <p className="mt-1">President of Sales</p>
                </div>
                <div className="col-md-2 offline">
                  <p className="mt-1">Offline</p>
                </div>
              </div>
              <div className="row mt-2 box-content">
                <div className="col-md-5 d-flex gap-2">
                  <img src={callPic2} alt="" />
                  <p className="mt-1">Cody Fisher</p>
                </div>
                <div className="col-md-5">
                  <p className="mt-1">Nursing Assistant</p>
                </div>
                <div className="col-md-2 online">
                  <p className="mt-1">Online</p>
                </div>
              </div>
              <div className="row mt-2 box-content">
                <div className="col-md-5 d-flex gap-2">
                  <img src={callPic} alt="" />
                  <p className="mt-1">Theresa Webb</p>
                </div>
                <div className="col-md-5">
                  <p className="mt-1">Medical Assistant</p>
                </div>
                <div className="col-md-2 offline">
                  <p className="mt-1">Offline</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerData;