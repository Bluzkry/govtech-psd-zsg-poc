import React from "react";
import { Col, DatePicker, Form, InputGroup, Row } from "@govtechsg/sgds-react";

export const PersonalDetails = ({ details, handleChange }) => (
  <>
    <Col sm={8}>
      <Row>
        <Form.Group
          as={Col}
          xs={12}
          md={6}
          className="mb-3"
          controlId="formMultiPageInput1"
        >
          <Form.Label>Label</Form.Label>
          <Form.Control
            type="text"
            placeholder="Text goes here"
            name="formMultiPageInput1"
            onChange={handleChange}
            value={details.formSinglePageInput1}
          />
        </Form.Group>
        <Form.Group
          as={Col}
          xs={12}
          md={6}
          className="mb-3"
          controlId="formMultiPageInput2"
        >
          <Form.Label>Label</Form.Label>
          <Form.Control type="text" placeholder="Text goes here" />
        </Form.Group>
      </Row>
      <Form.Group className="mb-3" controlId="formMultiPageInput3">
        <Form.Label>Label</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Text goes here"
            aria-label="Dollar amount (with dot and two decimal places)"
          />
          <InputGroup.Text>@something</InputGroup.Text>
        </InputGroup>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formMultiPageInput4">
        <Form.Label>Label</Form.Label>
        <Form.Control type="text" placeholder="Text goes here" />
      </Form.Group>
      <Form.Group className="mb-4" controlId="formMultiPageDatepicker1">
        <Form.Label>Label</Form.Label>
        <DatePicker />
      </Form.Group>
    </Col>
  </>
);
