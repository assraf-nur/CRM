import React from "react";
import { FaUserFriends } from "react-icons/fa";
import totalCustomer from "../Images/SVG/total-customer.svg";
import hotLead from "../Images/SVG/hot-lead.svg";
import prospect from "../Images/SVG/prospect.svg";
import pendingApplication from "../Images/SVG/pending-application.svg";
import singleApplication from "../Images/SVG/single-application.svg";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import profilePic from "../Images/Profile/profile-pic.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const CustomerData = () => {
  const percentage = 50;
  return (
    <div>
      <div className="row gap-4 px-3">
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

      <div className="px-3 mt-5">
        <div className="row gap-4">
          <div className="col-xl border crm-box p-4">
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

                  <div class="content">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry. Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry.
                  </div>
                </div>

                <div class="step active">
                  <div class="v-stepper">
                    <div class="circle"></div>
                    <div class="line"></div>
                  </div>

                  <div class="content">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </div>
                </div>

                <div class="step">
                  <div class="v-stepper">
                    <div class="circle"></div>
                    <div class="line"></div>
                  </div>

                  <div class="content">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum is simply dummy text of
                    the printing and typesetting Lorem Ipsum is simply dummy
                    text of the printing and typesetting Lorem Ipsum is simply
                    dummy text of the printing and typesetting
                  </div>
                </div>

                <div class="step">
                  <div class="v-stepper">
                    <div class="circle"></div>
                    <div class="line"></div>
                  </div>

                  <div class="content">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry. Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl border crm-box">Nur</div>
          <div className="col-xl border crm-box">Nur</div>
        </div>
      </div>
    </div>
  );
};

export default CustomerData;
