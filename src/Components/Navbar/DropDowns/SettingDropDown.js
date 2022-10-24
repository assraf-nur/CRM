import { Divider, List, ListItem } from "@mui/material";
import React from "react";
import { Card } from "react-bootstrap";
import { AiOutlineUserAdd } from "react-icons/ai";
import { MdSettingsSuggest } from "react-icons/md";
import { RiListSettingsLine, RiMailSettingsLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const SettingDropDown = () => {
  return (
      <Card className="mt-1 mx-1">
        <List>
          <ListItem className="px-0 py-0">
            <Link
              title="Add Lenders"
              className="py-3 left-list-link"
              to="/addLender"
            >
              <AiOutlineUserAdd className="icons ms-3 me-4 mb-1 fs-5" />
              Add Lenders
            </Link>
          </ListItem>
          <Divider />
          <ListItem className="px-0 py-0">
            <Link
              className="py-3 left-list-link"
              to="/smtpSetting"
              title="SMTP Setting"
            >
              <MdSettingsSuggest className="icons ms-3 me-4 mb-1 fs-5" />
              SMTP Setting
            </Link>
          </ListItem>
          <Divider />
          <ListItem className="px-0 py-0">
            <Link
              title="SMS Configuration"
              className="py-3 left-list-link"
              to="/smsConfig"
            >
              <RiMailSettingsLine className="icons ms-3 me-4 mb-1 fs-5" />
              SMS Configuration
            </Link>
          </ListItem>
          <Divider />
          <ListItem className="px-0 py-0">
            <Link
              className="py-3 left-list-link"
              to="/companySetting"
              title="Company Setting"
            >
              <RiListSettingsLine className="icons ms-3 me-4 mb-1 fs-5" />
              Company Setting
            </Link>
          </ListItem>
        </List>
      </Card>
  );
};

export default SettingDropDown;
