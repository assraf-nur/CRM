import React from "react";
import { Table } from "react-bootstrap";

const DataTable = () => {
  return (
      <Table className="data-table" striped hover>
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
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry the Bird</td>
            <td>Larry the Bird</td>
            <td>Larry the Bird</td>
            <td>Larry the Bird</td>
            <td>Larry the Bird</td>
            <td>Larry the Bird</td>
            <td>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
  );
};

export default DataTable;
