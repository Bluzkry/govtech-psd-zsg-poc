import React from "react";
import { Col, Form, InputGroup, Row } from "@govtechsg/sgds-react";

const employmentTypes = [
  ["Permanent", "Fixed Term", "Casual", "Secondment/Attachment"],
  ["Adjunct Worker", "Intern", "Sponsorship Holder", "Deployed Worker"],
  ["Scholarship Holder", "External Contracted", "Temporary", "Non-Agency"],
];

export const PersonalDetails = ({ details, handleChange }) => (
  <Col xs={12}>
    <h3>Personal Information</h3>
    <Row className="mb-3">
      <Form.Group as={Col} xs={12} md={3} className="mb-3" controlId="uid">
        <Form.Label>UID</Form.Label>
        <Form.Control
          type="text"
          placeholder="UID"
          name="uid"
          onChange={handleChange}
          value={details.uid}
          spellCheck={false}
          required
        />
      </Form.Group>

      <Form.Group
        as={Col}
        xs={12}
        md={3}
        className="mb-3"
        controlId="agencyCode"
      >
        <Form.Label>Agency Code</Form.Label>
        <Form.Control
          type="text"
          placeholder="Agency Code"
          name="companyCode"
          onChange={handleChange}
          value={details.companyCode}
          spellCheck={false}
          required
        />
      </Form.Group>
    </Row>

    <Row className="mb-3">
      <Form.Group
        as={Col}
        xs={12}
        md={3}
        className="mb-2"
        controlId="idType"
        required
      >
        <Form.Label>NRIC/FIN</Form.Label>
        <Form.Select name="idType" onChange={handleChange}>
          <option value="NRIC">NRIC</option>
          <option value="FIN">FIN</option>
        </Form.Select>
      </Form.Group>

      <Form.Group as={Col} xs={12} md={3} className="mb-3" controlId="idNumber">
        <Form.Label>ID Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="ID Number"
          name="idNumber"
          onChange={handleChange}
          value={details.idNumber}
          spellCheck={false}
          required
        />
      </Form.Group>
    </Row>

    <Row className="mb-4">
      <Form.Group as={Col} xs={12} md={4} className="mb-2" controlId="lastName">
        <Form.Label>Family Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Family Name"
          name="lastName"
          onChange={handleChange}
          value={details.lastName}
          spellCheck={false}
          required
        />
      </Form.Group>

      <Form.Group
        as={Col}
        xs={12}
        md={4}
        className="mb-2"
        controlId="middleName"
      >
        <Form.Label>Middle Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Middle Name"
          name="middleName"
          onChange={handleChange}
          value={details.middleName}
          spellCheck={false}
        />
      </Form.Group>

      <Form.Group
        as={Col}
        xs={12}
        md={5}
        className="mb-2"
        controlId="givenName"
      >
        <Form.Label>Given Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Given Name"
          name="firstName"
          onChange={handleChange}
          value={details.firstName}
          spellCheck={false}
          required
        />
      </Form.Group>

      <Form.Group as={Col} xs={12} md={3} controlId="nickname">
        <Form.Label>Nickname</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nickname"
          name="aliasName"
          onChange={handleChange}
          value={details.aliasName}
          spellCheck={false}
        />
      </Form.Group>
    </Row>

    <h3>Contact Information</h3>
    <Form.Group as={Col} xs={12} md={4} className="mb-2" controlId="email">
      <Form.Label>Email Address</Form.Label>
      <Form.Control
        type="email"
        placeholder="Enter Email"
        name="email"
        onChange={handleChange}
        value={details.email}
        spellCheck={false}
        required
      />
    </Form.Group>

    <Row className="mt-5">
      <Form.Group
        as={Col}
        xs={12}
        md={4}
        className="mb-2"
        controlId="phoneNumber"
      >
        <Form.Label>Phone Number</Form.Label>
        <InputGroup>
          <InputGroup.Text id="basic-addon1">+65</InputGroup.Text>
          <Form.Control
            type="number"
            placeholder="Phone Number"
            name="mobileNumber"
            onChange={handleChange}
            value={details.mobileNumber}
          />
        </InputGroup>
      </Form.Group>
    </Row>

    <Row className="mb-5">
      <Form.Group
        as={Col}
        xs={12}
        md={3}
        className="mb-2"
        controlId="officeNumber"
      >
        <Form.Label>Office Number</Form.Label>
        <InputGroup>
          <InputGroup.Text>+65</InputGroup.Text>
          <Form.Control
            type="number"
            placeholder="Office Number"
            name="officeNumber"
            onChange={handleChange}
            value={details.officeNumber}
          />
        </InputGroup>
      </Form.Group>

      <Form.Group as={Col} xs={12} md={3} controlId="faxNumber">
        <Form.Label>Fax Number</Form.Label>
        <InputGroup>
          <InputGroup.Text>+65</InputGroup.Text>
          <Form.Control
            type="number"
            placeholder="Fax Number"
            name="faxNumber"
            onChange={handleChange}
            value={details.faxNumber}
          />
        </InputGroup>
      </Form.Group>
    </Row>

    <Row className="mb-4">
      <h3>Employment Information</h3>
      <Form.Group
        as={Col}
        xs={12}
        md={6}
        className="mb-3"
        controlId="employmentTitle"
      >
        <Form.Label>Employment Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Employment Title"
          name="employmentTitle"
          onChange={handleChange}
          value={details.employmentTitle}
          spellCheck={false}
          required
        />
      </Form.Group>

      <Form.Group as={Col} xs={12} controlId="employmentType">
        <Form.Label>Employment Type</Form.Label>
        <Row>
          {employmentTypes.map((group, i) => (
            <Col xs={4} key={`employmentType${i}`}>
              {group.map((employmentType, i) => (
                <Form.Check
                  defaultChecked={employmentType === "Permanent"}
                  type="radio"
                  name="employmentType"
                  label={employmentType}
                  onChange={handleChange}
                  value={employmentType}
                  key={`employmentTypeCheck${employmentType}${i}`}
                />
              ))}
            </Col>
          ))}
        </Row>
      </Form.Group>
    </Row>
  </Col>
);
