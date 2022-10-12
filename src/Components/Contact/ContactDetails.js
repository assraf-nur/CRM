import React from "react";
import contactProfile from "../Images/Profile/contact-profile.jpg";
import { FcCellPhone } from "react-icons/fc";
import { CgProfile } from "react-icons/cg";
import { FiCheckSquare, FiFilePlus } from "react-icons/fi";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

const ContactDetails = () => {
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
      <div className="m-1 mt-4 row gap-3">
        <div className="col-xl bg-white p-3 border">Nur</div>
        <div className="col-xl bg-white p-3 border">Tesla</div>
      </div>
    </div>
  );
};

export default ContactDetails;
