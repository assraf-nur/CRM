import { Divider, List, ListItem } from "@mui/material";
import React from "react";
import { Card } from "react-bootstrap";
import { AiOutlineUserAdd } from "react-icons/ai";
import { Link } from "react-router-dom";

const LenderSetting = () => {
  return (
    <Card className="mt-1 mx-1">
      <List>
        <ListItem className="px-0 py-0">
          <Link
            title="Add Lenders"
            className="py-3 left-list-link"
            to="/lenderCategory"
          >
            <AiOutlineUserAdd className="icons ms-3 me-4 mb-1 fs-5" />
            Lender Category
          </Link>
        </ListItem>
        <Divider />
        <ListItem className="px-0 py-0">
          <Link
            title="Add Lenders"
            className="py-3 left-list-link"
            to="/lenderFilter"
          >
            <AiOutlineUserAdd className="icons ms-3 me-4 mb-1 fs-5" />
            Lender Filter
          </Link>
        </ListItem>
        <Divider />
        <ListItem className="px-0 py-0">
          <Link
            title="Add Lenders"
            className="py-3 left-list-link"
            to="/lendersList"
          >
            <AiOutlineUserAdd className="icons ms-3 me-4 mb-1 fs-5" />
            Lender List
          </Link>
        </ListItem>
        <Divider />
      </List>
    </Card>
  );
};

export default LenderSetting;
