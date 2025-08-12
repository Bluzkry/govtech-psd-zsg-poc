import React from "react";
import { Col, Form, Row } from "@govtechsg/sgds-react";

export const EmploymentDetails = ({ details, handleChange }) => (
  <>
    <Col xs={12}>
      <Row className="mb-3">
        <Form.Group
          as={Col}
          xs={12}
          md={5}
          className="mb-2"
          controlId="manager"
        >
          <Form.Label>Manager</Form.Label>
          <Form.Control
            type="text"
            placeholder="Manager"
            name="reportingManagerName"
            onChange={handleChange}
            value={details.reportingManagerName}
            spellCheck={false}
          />
        </Form.Group>

        <Form.Group as={Col} xs={12} md={4} controlId="managerEmail">
          <Form.Label>Manager Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Manager Email"
            name="reportingManagerEmail"
            onChange={handleChange}
            value={details.reportingManagerEmail}
            spellCheck={false}
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group
          as={Col}
          xs={12}
          md={4}
          className="mb-2"
          controlId="department"
        >
          <Form.Label>Department</Form.Label>
          <Form.Control
            type="text"
            placeholder="Department"
            name="department"
            onChange={handleChange}
            value={details.department}
            spellCheck={false}
          />
        </Form.Group>

        <Form.Group
          as={Col}
          xs={12}
          md={2}
          controlId="primaryPosition"
          required
        >
          <Form.Label>Primary Position?</Form.Label>
          <Form.Select name="primaryPosition" onChange={handleChange}>
            <option value={true}>True</option>
            <option value={false}>False</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Row className="my-5">
        <h3>Office Address</h3>
        <Form.Group
          as={Col}
          xs={4}
          md={2}
          className="mb-3"
          controlId="officeAddressPostalCode"
        >
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type="number"
            placeholder="e.g. 730317"
            maxLength={6}
            name="officeAddressPostalCode"
            onChange={handleChange}
            value={details.officeAddressPostalCode}
          />
        </Form.Group>
        <Row className="mb-2">
          <Form.Group
            as={Col}
            xs={4}
            md={2}
            controlId="officeAddressBlockNumber"
          >
            <Form.Label>Block Number</Form.Label>
            <Form.Control
              type="number"
              name="officeAddressBlockNumber"
              onChange={handleChange}
              value={details.officeAddressBlockNumber}
            />
          </Form.Group>
          <Form.Group
            as={Col}
            xs={8}
            md={5}
            controlId="officeAddressStreetName"
          >
            <Form.Label>Block/Street Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="e.g. Pasir Ris Drive"
              name="officeAddressStreetName"
              onChange={handleChange}
              value={details.officeAddressStreetName}
              spellCheck={false}
            />
          </Form.Group>
        </Row>
        <Row className="mb-2" style={{ display: "flex", alignItems: "end" }}>
          <Form.Group
            as={Col}
            xs={8}
            md={6}
            className="mb-2"
            controlId="Building Name"
          >
            <Form.Label>Building Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Building Name"
              name="officeAddressBuildingName"
              onChange={handleChange}
              value={details.officeAddressBuildingName}
              spellCheck={false}
            />
          </Form.Group>
          <Form.Group
            as={Col}
            xs={4}
            md={2}
            className="mb-2"
            controlId="officeAddressFloorNumber"
          >
            <Form.Label>Floor Number</Form.Label>
            <Form.Control
              type="number"
              name="officeAddressFloorNumber"
              onChange={handleChange}
              value={details.officeAddressFloorNumber}
            />
          </Form.Group>
          <Form.Group
            as={Col}
            xs={4}
            md={2}
            className="mb-2"
            controlId="officeAddressUnitNumber"
          >
            <Form.Label>Unit Number</Form.Label>
            <Form.Text className="text-muted">If applicable</Form.Text>
            <Form.Control
              type="text"
              name="officeAddressUnitNumber"
              onChange={handleChange}
              value={details.officeAddressUnitNumber}
              spellCheck={false}
            />
          </Form.Group>
        </Row>
        <Row className="mb-4">
          <Form.Group
            as={Col}
            xs={7}
            md={4}
            className="mb-2"
            controlId="costCentreId"
          >
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="e.g. Singapore"
              name="officeCity"
              onChange={handleChange}
              value={details.officeCity}
              spellCheck={false}
            />
          </Form.Group>

          <Form.Group as={Col} xs={5} md={2} controlId="officeState">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              placeholder="e.g. Singapore"
              name="officeState"
              onChange={handleChange}
              value={details.officeState}
              spellCheck={false}
            />
          </Form.Group>

          <Form.Group as={Col} xs={12} md={4} controlId="officeCountry">
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="text"
              placeholder="Country"
              name="officeCountry"
              onChange={handleChange}
              value={details.officeCountry}
              spellCheck={false}
            />
          </Form.Group>
        </Row>
        <Form.Group
          as={Col}
          xs={12}
          md={6}
          controlId="officeAddressUnformatted"
        >
          <Form.Label className="text-muted">
            Office Address (Unformatted)
          </Form.Label>
          <Form.Text className="text-muted">If applicable</Form.Text>
          <Form.Control
            as="textarea"
            rows={3}
            type="text"
            placeholder="If the above parameters are not suitable for filling in the office address, enter the office address here."
            name="officeAddressUnformatted"
            onChange={handleChange}
            value={details.officeAddressUnformatted}
          />
        </Form.Group>
      </Row>

      <Row className="my-5">
        <h3>Cost Centre</h3>
        <Form.Group
          as={Col}
          xs={6}
          md={2}
          className="mb-2"
          controlId="costCentreId"
        >
          <Form.Label>Cost Centre ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Cost Centre ID"
            name="costCentreId"
            onChange={handleChange}
            value={details.costCentreId}
            spellCheck={false}
          />
        </Form.Group>
        <Form.Group
          as={Col}
          xs={12}
          md={4}
          className="mb-2"
          controlId="costCentreName"
        >
          <Form.Label>Cost Centre Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Cost Centre Name"
            name="costCentreName"
            onChange={handleChange}
            value={details.costCentreName}
            spellCheck={false}
          />
        </Form.Group>
        <Form.Group
          as={Col}
          xs={12}
          md={4}
          className="mb-2"
          controlId="costCentreHead"
        >
          <Form.Label>Cost Centre Head</Form.Label>
          <Form.Control
            type="text"
            placeholder="Cost Centre Head"
            name="costCentreHead"
            onChange={handleChange}
            value={details.costCentreHead}
            spellCheck={false}
          />
        </Form.Group>
      </Row>

      <Form.Group controlId="remarks">
        <Form.Label>
          <h3>Comments</h3>
        </Form.Label>
        <Form.Control
          as="textarea"
          rows={2}
          type="text"
          placeholder="Enter additional comments here."
          name="remarks"
          onChange={handleChange}
          value={details.remarks}
        />
      </Form.Group>
    </Col>
  </>
);
