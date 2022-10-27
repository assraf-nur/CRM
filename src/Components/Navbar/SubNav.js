import React from "react";
import { MdSpaceDashboard, MdCampaign } from "react-icons/md";
import { FaUserFriends, FaCalendarAlt } from "react-icons/fa";
import { RiTeamFill, RiUserSettingsFill } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { MdWifiCalling3, MdSettings } from "react-icons/md";
import "../CSS/Style.css";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const SubNav = () => {
  return (
    <div id="sub-nav" className="nav-container py-1">
      <div className="row sub-nav-menu">
        <div className="col-md-1">
          <Dropdown className="">
            <Dropdown.Toggle variant="normal" id="dropdown-basic">
              <MdSpaceDashboard className="me-2 mb-1 sub-nav-icon" />
              Dashboard
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="col-md-1">
          <Dropdown className="ms-3">
            <Dropdown.Toggle variant="normal" id="dropdown-basic">
              <FaUserFriends className="me-2 mb-1 sub-nav-icon" />
              User
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="col-md-1 mt-2">
          <RiTeamFill className="me-2 ms-2 mb-1 sub-nav-icon" />
          Team
        </div>
        <div className="col-md-1">
          <Dropdown className="report">
            <Dropdown.Toggle variant="normal" id="dropdown-basic">
              <TbReportAnalytics className="me-2 mb-1 sub-nav-icon" />
              Reports
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>
                <Link className="router-link" to='/reports'>Add Report</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link className="router-link" to='/reports-list'>Report List</Link>
              </Dropdown.Item>
              <Dropdown.Item>Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="col-md-1">
          <Dropdown className="campaign">
            <Dropdown.Toggle variant="normal" id="dropdown-basic">
              <MdCampaign className="me-2 mb-1 sub-nav-icon" />
              Campaign
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="col-md-1 mt-2">
          <div className="d-flex">
            <FaCalendarAlt className="me-2 mt-1" />
            Appointment
          </div>
        </div>
        <div className="col-md-1 mt-2 ms-2">
          <Link className="router-link-sub-nav" to="/contact">
            <MdWifiCalling3 className="me-2 mb-1 sub-nav-icon" />
            Contact
          </Link>
        </div>
        <div className="col-md-1 mt-2">
          <MdSettings className="me-2 mb-1 sub-nav-icon" />
          Settings
        </div>
        <div className="col-md-2 mt-2">
          <RiUserSettingsFill className="me-2 mb-1 sub-nav-icon" />
          Lender Settings
        </div>
      </div>
    </div>
  );
};

export default SubNav;
