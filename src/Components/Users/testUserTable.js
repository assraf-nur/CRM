import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "../CSS/Style.css";
import { RiDeleteBin6Line } from 'react-icons/ri';
import { MdOutlineModeEditOutline, MdVisibility, MdOutlineMoreVert } from 'react-icons/md';
import _  from 'lodash';
const pageSize = 8;

const Users = () => {
  const [rows, setRows] = useState([]);
  const [paginatedPost, setPaginatedPost] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("tableData.json")
      .then((res) => res.json())
      .then((data) => {
        setRows(data);
        console.log(data);
        setPaginatedPost(_(data).slice(0).take(pageSize).value());
      });
  }, []);

  const pageCount = rows? Math.ceil(rows.length/pageSize) : 0;
  if( pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1)

  const pagination = (pageNo) =>{
    setCurrentPage(pageNo);
    const startIndex = (pageNo - 1)* pageSize;
    const paginatedPost = _(rows).slice(startIndex).take(pageSize).value();
    setPaginatedPost(paginatedPost);
  }
  const handleNext = (pageNo) =>{
    
  }
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
            {paginatedPost?.map((row) => (
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
                    <a className="px-2 mt-1 text-dark fs-4" href="{}"><MdOutlineModeEditOutline/></a>
                    <a title="Delete" className="px-2 mt-1 text-danger fs-4" href="{}"><RiDeleteBin6Line/></a>
                    <a className="px-2 mt-1 text-success fs-4" href="{}"><MdVisibility/></a>
                    <a className="px-2 mt-1 text-dark fs-4" href="{}"><MdOutlineMoreVert/></a>
                  </div> 
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <nav className="d-flex justify-content-center">
        <ul className="pagination gap-2">
          <li><button className="btn btn-primary" type="">Previous</button></li>
          {
            pages.map((page) =>(
              <li className={
                page === currentPage ? "page-items active" : "page-items"
              }>
                <p className="page-link"
                onClick={()=>pagination(page)}
                >{page}</p>
              </li>
            ))
          }
          <li><button onClick={handleNext} className="btn btn-primary" type="">Next</button></li>
        </ul>
      </nav>
      </div>
    </div>
  );
};

export default Users;