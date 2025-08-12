import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "@govtechsg/sgds-react";

import { getApiUrl } from "../utils/getApiUrl";

export const Employees = () => {
  const apiUrl = getApiUrl();
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiUrl}/pocdexplus/employee-management/get-all-employees`)
      .then(({ data }) => {
        setEmployees(data);
      })
      .catch((err) => {
        console.error("Error: ", err);
      });
  });

  return (
    <>
      <sgds-content-header-top>
        <div>
          <h1>Employees</h1>
        </div>
      </sgds-content-header-top>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>ID Type</Table.HeaderCell>
            <Table.HeaderCell>Company Code</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {employees.map(
            ({ firstName, lastName, idNumber, idType, companyCode, email }) => (
              <Table.Row key={idNumber}>
                <Table.DataCell>{firstName}</Table.DataCell>
                <Table.DataCell>{lastName}</Table.DataCell>
                <Table.DataCell>{idNumber}</Table.DataCell>
                <Table.DataCell>{idType}</Table.DataCell>
                <Table.DataCell>{companyCode}</Table.DataCell>
                <Table.DataCell>{email}</Table.DataCell>
              </Table.Row>
            )
          )}
        </Table.Body>
      </Table>
    </>
  );
};
