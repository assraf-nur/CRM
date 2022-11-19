import React, { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { RiArrowUpDownFill } from "react-icons/ri";

const ReportList = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("tableData2.json")
      .then((res) => res.json())
      .then((data) => {
        setDatas(data);
      });
  }, []);

  const defaultSorted = [
    {
      dataField: "name",
      order: "desc",
    },
  ];

  const columns = [
    {
      dataField: "first_name",
      text: (
        <div>
          First Name
          <RiArrowUpDownFill className="ms-2" />
        </div>
      ),
      sort: true,
    },
    {
      dataField: "last_name",
      text: "Last Name",
    },
    {
      dataField: "category",
      text: "Category",
    },
    {
      dataField: "email",
      text: (
        <div>
          Email
          <RiArrowUpDownFill className="ms-2" />
        </div>
      ),
      sort: true,
    },
    {
      dataField: "address",
      text: "City",
    },
    {
      dataField: "phone",
      text: "Phone",
    },
    {
      dataField: "date",
      text: (
        <div>
          Date
          <RiArrowUpDownFill className="ms-2" />
        </div>
      ),
      sort: true,
    },
    {
      dataField: "remarks",
      text: "Remarks",
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

  return (
    <div className="p-3">
      <div className="p-3 bg-white">
        <h5>Reports List</h5>
        <BootstrapTable
          hover
          condensed
          classNamees="bg-white"
          keyField="id"
          data={datas}
          columns={columns}
          defaultSorted={defaultSorted}
          pagination={paginationFactory(options)}
        />
      </div>
    </div>
  );
};

export default ReportList;
