import React, { useEffect, useState } from "react";
import { HiPlus } from "react-icons/hi";
import { RiArrowUpDownFill } from "react-icons/ri";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Modal } from "react-bootstrap";
import AddUserRole from "./Modals/AddUserRole";

const UserRole = () => {
  const [datas, setDatas] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch("UserRoleData.json")
      .then((res) => res.json())
      .then((data) => {
        setDatas(data);
      });
  }, []);
  
  const columns = [
    {
      dataField: "title",
      text: (
        <div>
          First Name
          <RiArrowUpDownFill className="ms-2" />
        </div>
      ),
      sort: true,
    },
    {
      dataField: "status",
      text: "Status",
    },
    {
      dataField: "description",
      text: "Description",
    },
    {
      dataField: "created_at",
      text: "Created At",
    },
    {
      dataField: "remarks",
      text: "Action",
    },
  ];

  const options = {
    paginationSize: 5,
    pageStartIndex: 1,
    firstPageText: "First",
    prePageText: "Back",
    nextPageText: "Next",
    lastPageText: "Last",
    nextPageTitle: "First page",
    prePageTitle: "Pre page",
    firstPageTitle: "Next page",
    lastPageTitle: "Last page",
    showTotal: true,

    disablePageTitle: true,
    sizePerPageList: [
      {
        text: "15",
        value: 15,
      },
      {
        text: "25",
        value: 25,
      },
      {
        text: "35",
        value: 35,
      },
      {
        text: "All",
        value: datas.length,
      },
    ],
  };

  const defaultSorted = [
    {
      dataField: "created_at",
      order: "desc",
    },
  ];

  return (
    <div className="p-3">
      <div className="p-3 bg-white">
        <div className="border-bottom pb-2 d-flex justify-content-between mb-4">
          <h4>User Role</h4>
          <button onClick={() => setShow(true)} className="add-new-button px-3 py-2">
            <HiPlus className="me-1" />
            Create New Role
          </button>
          <Modal
            dialogClassName="role-modal"
            show={show}
            onHide={() => setShow(false)}
            aria-labelledby="example-custom-modal-styling-title"
            centered
          >
            <AddUserRole></AddUserRole>
          </Modal>
        </div>

        <BootstrapTable
          hover
          condensed
          classNamees="bg-white"
          keyField="id"
          data={datas}
          columns={columns}
          pagination={paginationFactory(options)}
          defaultSorted={defaultSorted}
        />
      </div>
    </div>
  );
};

export default UserRole;
