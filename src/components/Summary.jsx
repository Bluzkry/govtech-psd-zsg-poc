import React from "react";
import { Col, DatePicker, Form, InputGroup, Row } from "@govtechsg/sgds-react";

export const Summary = () => (
  <>
    <Col sm={8}>
      <Row>
        <Form.Group
          as={Col}
          xs={12}
          md={6}
          className="mb-3"
          controlId="formMultiPage3Input1"
        >
          <Form.Label>Label</Form.Label>
          <Form.Control type="text" placeholder="Text goes here" />
        </Form.Group>
        <Form.Group
          as={Col}
          xs={12}
          md={6}
          className="mb-3"
          controlId="formMultiPage3Input2"
        >
          <Form.Label>Label</Form.Label>
          <Form.Control type="text" placeholder="Text goes here" />
        </Form.Group>
      </Row>
      <Form.Group className="mb-3" controlId="formMultiPage3Input3">
        <Form.Label>Label</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Text goes here"
            aria-label="Dollar amount (with dot and two decimal places)"
          />
          <InputGroup.Text>@something</InputGroup.Text>
        </InputGroup>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formMultiPage3Input4">
        <Form.Label>Label</Form.Label>
        <Form.Control type="text" placeholder="Text goes here" />
      </Form.Group>
      <Form.Group className="mb-4" controlId="formMultiPage3Datepicker1">
        <Form.Label>Label</Form.Label>
        <DatePicker />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formMultiPage3Select1">
        <Form.Label>Label</Form.Label>
        <Form.Select>
          <option>Text goes here</option>
          <option>Text goes here</option>
          <option>Text goes here</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formMultiPage3Radio1">
        <Form.Label>Label</Form.Label>
        <Form.Check type="radio" name="radioGroup1" label="Input 1" />
        <Form.Check type="radio" name="radioGroup1" label="Input 2" />
        <Form.Check type="radio" name="radioGroup1" label="Input 3" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formMultiPage3Input5">
        <Form.Label>Label</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          type="text"
          placeholder="This is the text that has been filled in"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox1">
        <Form.Check
          type="checkbox"
          label="I agree to the terms of the Subscriber Agreement and the Privacy Policy"
        />
      </Form.Group>
    </Col>
  </>
);
