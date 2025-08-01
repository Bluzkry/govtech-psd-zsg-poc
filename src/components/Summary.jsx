import React from "react";
import { Col, Row } from "@govtechsg/sgds-react";

const detailsConfig = [
  {
    title: "Personal Information",
    parts: [
      {
        uid: "UID",
        companyCode: "Company Code",
        idType: "NRIC/FIN",
        idNumber: "ID Number",
      },
      {
        lastName: "Family Name",
        middleName: "Middle Name",
        firstName: "Given Name",
        aliasName: "Alias",
      },
    ],
    fullRow: [],
  },
  {
    title: "Contact Information",
    parts: [
      {
        email: "Email Address",
        mobileNumber: "Phone Number",
        officeNumber: "Office Number",
        faxNumber: "Fax Number",
      },
    ],
    fullRow: [],
  },
  {
    title: "Employment Information",
    parts: [
      {
        employmentTitle: "Employment Title",
        employmentType: "Employment Type",
      },
      {
        reportingManagerName: "Manager",
        reportingManagerEmail: "Manager Email Address",
        department: "Department",
        primaryPosition: "Primary Position",
      },
    ],
    fullRow: [],
  },
  {
    title: "Office Address",
    parts: [
      {
        officeAddressPostalCode: "Postal Code",
      },
      {
        officeAddressBlockNumber: "Block Number",
        officeAddressStreetName: "Block/Street Name",
        officeAddressBuildingName: "Building Name",
        officeAddressFloorNumber: "Floor Number",
        officeAddressUnitNumber: "Unit Number",
      },
      {
        officeCity: "City",
        officeState: "State",
        officeCountry: "Country",
      },
      {
        officeAddressUnformatted: "Office Address (Unformatted)",
      },
    ],
    fullRow: ["officeAddressUnformatted"],
  },
  {
    title: "Cost Centre",
    parts: [
      {
        costCentreId: "Cost Centre ID",
        costCentreName: "Cost Centre Name",
        costCentreHead: "Cost Centre Head",
      },
    ],
    fullRow: [],
  },
  {
    title: "Comments",
    parts: [
      {
        remarks: "Comments",
      },
    ],
    fullRow: ["remarks"],
  },
];

export const Summary = ({ details }) => (
  <Col xs={12}>
    <Row className="mb-3">
      <h2>Summary</h2>
    </Row>

    {detailsConfig.map((section, i) => (
      <Row className="mb-3" key={`section${i}`}>
        <Row className="mb-2">
          <div style={{ fontSize: "1.25rem", fontStyle: "italic" }}>
            {section.title}
          </div>
        </Row>

        {section.parts.map((part, i) => (
          <Row className="mb-2" key={`part${i}`}>
            {Object.entries(part).map(([key, value], i) => (
              <Col
                className="mb-2"
                xs={12}
                md={section.fullRow.includes(key) ? 12 : 3}
                key={`entry${key}${i}`}
              >
                <h6>{value}</h6>
                <div>{!!details[key] ? details[key].toString() : "—"}</div>
              </Col>
            ))}
          </Row>
        ))}
      </Row>
    ))}
  </Col>
);
