import { Divider, List, ListItem } from "@mui/material";
import React from "react";
import { Card } from "react-bootstrap";
import { AiFillHdd, AiOutlineDollarCircle, AiOutlineUserAdd } from "react-icons/ai";
import { FaPeopleArrows, FaUniversalAccess } from "react-icons/fa";
import { GoMilestone } from "react-icons/go";
import { MdOutlineLeaderboard, MdSettingsSuggest } from "react-icons/md";
import { RiListSettingsLine, RiMailSettingsLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const SettingDropDown = () => {
  return (
    <Card className="mt-1 mx-1">
      <List className="listing">
        <ListItem className="px-0 py-0">
          <Link title="Add Lenders" className="py-3 left-list-link" to="/addLender">
            <AiOutlineUserAdd className="icons ms-3 me-4 mb-1 fs-5" />
            Add Lenders
          </Link>
        </ListItem>
        <Divider />
        <ListItem className="px-0 py-0">
          <Link className="py-3 left-list-link" to="/smtpSetting" title="SMTP Setting">
            <MdSettingsSuggest className="icons ms-3 me-4 mb-1 fs-5" />
            SMTP Setting
          </Link>
        </ListItem>
        <Divider />
        <ListItem className="px-0 py-0">
          <Link title="SMS Configuration" className="py-3 left-list-link" to="/smsConfig">
            <RiMailSettingsLine className="icons ms-3 me-4 mb-1 fs-5" />
            SMS Configuration
          </Link>
        </ListItem>
        <Divider />

        <ListItem className="px-0 py-0">
          <Link className="py-3 left-list-link" to="/companySetting" title="Company Setting">
            <RiListSettingsLine className="icons ms-3 me-4 mb-1 fs-5" />
            Company Setting
          </Link>
        </ListItem>
        <Divider />

        <ListItem className="px-0 py-0">
          <Link className="py-3 left-list-link" to="/applicationStatus" title="Application Status">
            <AiFillHdd className="icons ms-3 me-4 mb-1 fs-5" />
            Application Status
          </Link>
        </ListItem>
        <Divider />
        <ListItem className="px-0 py-0">
          <Link className="py-3 left-list-link" to="/leadSource" title="Lead Source">
            <MdOutlineLeaderboard className="icons ms-3 me-4 mb-1 fs-5" />
            Lead Source
          </Link>
        </ListItem>
        <Divider />
        <ListItem className="px-0 py-0">
          <Link className="py-3 left-list-link" to="/typesOfLoan" title="Types of Loan">
            <AiOutlineDollarCircle className="icons ms-3 me-4 mb-1 fs-5" />
            Types of Loan
          </Link>
        </ListItem>
        <Divider />
        <ListItem className="px-0 py-0">
          <Link className="py-3 left-list-link" to="/milestone" title="Milestone">
            <GoMilestone className="icons ms-3 me-4 mb-1 fs-5" />
            Milestone
          </Link>
        </ListItem>
        <Divider />
        <ListItem className="px-0 py-0">
          <Link className="py-3 left-list-link" to="/marketingSetting" title="Marketing">
            <FaPeopleArrows className="icons ms-3 me-4 mb-1 fs-5" />
            Marketing
          </Link>
        </ListItem>
        <Divider />
        <ListItem className="px-0 py-0">
          <Link className="py-3 left-list-link" to="/userRole" title="User Role">
            <FaUniversalAccess className="icons ms-3 me-4 mb-1 fs-5" />
            User Role
          </Link>
        </ListItem>
      </List>
    </Card>
  );
};

export default SettingDropDown;
