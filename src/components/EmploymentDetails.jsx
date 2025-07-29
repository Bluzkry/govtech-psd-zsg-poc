import React from "react";
import { Col, Form } from "@govtechsg/sgds-react";

export const EmploymentDetails = () => (
  <>
    <Col sm={8}>
      <Form.Group className="mb-3" controlId="formMultiPage2Select1">
        <Form.Label>Label</Form.Label>
        <Form.Select>
          <option>Text goes here</option>
          <option>Text goes here</option>
          <option>Text goes here</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formMultiPage2Radio2">
        <Form.Label>Label</Form.Label>
        <Form.Check type="radio" name="radioGroup1" label="Input 1" />
        <Form.Check type="radio" name="radioGroup1" label="Input 2" />
        <Form.Check type="radio" name="radioGroup1" label="Input 3" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formMultiPage2Input5">
        <Form.Label>Label</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          type="text"
          placeholder="This is the text that has been filled in"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formMultiPage2Checkbox1">
        <Form.Check
          type="checkbox"
          label="I agree to the terms of the Subscriber Agreement and the Privacy Policy"
        />
      </Form.Group>
    </Col>
  </>
);
