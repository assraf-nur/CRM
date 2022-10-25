import { Divider, List, ListItem } from "@mui/material";
import React from "react";
import { Card } from "react-bootstrap";
import { AiOutlineOrderedList, AiTwotoneFilter } from "react-icons/ai";
import { MdCategory } from "react-icons/md";
import { Link } from "react-router-dom";

const LenderSetting = () => {
  return (
    <Card className="mt-1 mx-1">
      <List>
        <ListItem className="px-0 py-0">
          <Link
            title="Lender Category"
            className="py-3 left-list-link"
            to="/lenderCategory"
          >
            <MdCategory className="icons ms-3 me-4 mb-1 fs-5" />
            Lender Category
          </Link>
        </ListItem>
        <Divider />
        <ListItem className="px-0 py-0">
          <Link
            title="Lender Filter"
            className="py-3 left-list-link"
            to="/lenderFilter"
          >
            <AiTwotoneFilter className="icons ms-3 me-4 mb-1 fs-5" />
            Lender Filter
          </Link>
        </ListItem>
        <Divider />
        <ListItem className="px-0 py-0">
          <Link
            title="Lender List"
            className="py-3 left-list-link"
            to="/lendersList"
          >
            <AiOutlineOrderedList className="icons ms-3 me-4 mb-1 fs-5" />
            Lender List
          </Link>
        </ListItem>
        <Divider />
      </List>
    </Card>
  );
};

export default LenderSetting;
