import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "../CSS/Style.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { HiPlus } from "react-icons/hi";
import {
  MdOutlineModeEditOutline,
  MdVisibility,
  MdOutlineMoreVert,
} from "react-icons/md";
import Pagination from "rc-pagination";

const Users = () => {
  const [rows, setRows] = useState([]);
  const [perPage] = useState(12);
  const [size, setSize] = useState(perPage);
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    fetch("tableData.json")
      .then((res) => res.json())
      .then((data) => {
        setRows(data);
        console.log(data);
      });
  }, []);

  const PerPageChange = (value) => {
    setSize(value);
    const newPerPage = Math.ceil(rows.length / value);
    if (current > newPerPage) {
      setCurrent(newPerPage);
    }
  };

  const getData = (current, pageSize) => {
    return rows.slice((current - 1) * pageSize, current * pageSize);
  };

  const PaginationChange = (page, pageSize) => {
    setCurrent(page);
    setSize(pageSize);
  };

  const PrevNextArrow = (current, type, originalElement) => {
    if (type === "prev") {
      return (
        <button className="border fs-6 control-button">
          Previous
        </button>
      );
    }
    if (type === "next") {
      return (
        <button className="border me-3 fs-6 control-button">
          Next
        </button>
      );
    }
    return originalElement;
  };

  return (
    <div className="p-4 data-table">
      <div className="table-box">
        <div className="table-filter-info">
          <button className="add-button px-2 py-1" type=""><HiPlus className="text-white"/> Add</button>
          <Pagination
            className="pagination-data"
            showTotal={(total, range) =>
              `Showing ${range[0]}-${range[1]} of ${total} entries`
            }
            defaultCurrent={5}
            onChange={PaginationChange}
            total={rows.length}
            current={current}
            pageSize={size}
            itemRender={PrevNextArrow}
            onShowSizeChange={PerPageChange}
            showQuickJumper={{
              
            }}
            locale={{ jump_to: "Jump To" , page: 'Page' }}
          />
        </div>
        <Table className="table-data" striped hover>
          <thead>
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Super Admin</th>
              <th>Access Contact</th>
              <th>Team</th>
              <th>Role</th>
              <th>Status</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {getData(current, size).map((row, index) => (
              <tr>
                <td width={"5%"}>
                  <img className="py-2 ms-2" src={row.img} alt="" />
                </td>
                <td width={"16%"}>
                  {" "}
                  <p>{row.name}</p>{" "}
                </td>
                <td width={"22%"}>
                  {" "}
                  <p>{row.email}</p>{" "}
                </td>
                <td width={"10%"}>
                  {" "}
                  <p>{row.super_admin}</p>{" "}
                </td>
                <td width={"10%"}>
                  {" "}
                  <p>{row.access_contact}</p>{" "}
                </td>
                <td width={"10%"}>
                  {" "}
                  <p>{row.team}</p>{" "}
                </td>
                <td width={"10%"}>
                  {" "}
                  <p>{row.role}</p>{" "}
                </td>
                <td width={"5%"}>
                  {row.status === "Active" ? (
                    <p className="status-active">{row.status}</p>
                  ) : (
                    <p className="status-de-active">{row.status}</p>
                  )}{" "}
                </td>
                <td>
                  <div className="text-center">
                    <a className="px-2 mt-1 text-dark fs-4" href="{}">
                      <MdOutlineModeEditOutline />
                    </a>
                    <a
                      title="Delete"
                      className="px-2 mt-1 text-danger fs-4"
                      href="{}"
                    >
                      <RiDeleteBin6Line />
                    </a>
                    <a className="px-2 mt-1 text-success fs-4" href="{}">
                      <MdVisibility />
                    </a>
                    <a className="px-2 mt-1 text-dark fs-4" href="{}">
                      <MdOutlineMoreVert />
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Users;
