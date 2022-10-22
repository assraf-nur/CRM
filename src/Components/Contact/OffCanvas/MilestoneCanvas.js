import React from 'react';
import profilePic from "../../Images/Profile/profile-pic.png";
import profilePic2 from "../../Images/Profile/profile-pic2.png";

const MilestoneCanvas = () => {
    return (
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
    );
};

export default MilestoneCanvas;