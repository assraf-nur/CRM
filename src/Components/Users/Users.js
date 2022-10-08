import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "../CSS/Style.css";
import { RiDeleteBin6Line } from 'react-icons/ri';
import { MdOutlineModeEditOutline, MdVisibility, MdOutlineMoreVert } from 'react-icons/md';


const Users = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetch("tableData.json")
      .then((res) => res.json())
      .then((data) => setRows(data));
  }, []);

  return (
    <div className="p-3 data-table">
      <div className="table-box">
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
            {rows.map((row) => (
              <tr>
                <td width={"5%"}>
                  <img className="py-2 ms-2" src={row.img} alt="" />
                </td>
                <td width={"13%"}> <p>{row.name}</p> </td>
                <td width={"20%"}> <p>{row.email}</p> </td>
                <td width={"10%"}> <p>{row.super_admin}</p> </td>
                <td width={"10%"}> <p>{row.access_contact}</p> </td>
                <td width={"7%"}> <p>{row.team}</p> </td>
                <td width={"10%"}> <p>{row.role}</p> </td>
                <td width={"5%"}>
                  {
                    row.status === "Active" ? <p className="status-active">{row.status}</p> : <p className="status-de-active">{row.status}</p>
                  }  </td>
                <td> 
                  <div className="text-center">
                    <a className="px-2 mt-1 text-dark fs-4" href=""><MdOutlineModeEditOutline/></a>
                    <a title="Delete" className="px-2 mt-1 text-danger fs-4" href=""><RiDeleteBin6Line/></a>
                    <a className="px-2 mt-1 text-success fs-4" href=""><MdVisibility/></a>
                    <a className="px-2 mt-1 text-dark fs-4" href=""><MdOutlineMoreVert/></a>
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