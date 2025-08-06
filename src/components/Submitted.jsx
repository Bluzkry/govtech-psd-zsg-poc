import React from "react";
import styled from "styled-components";
import { Button, Col } from "@govtechsg/sgds-react";

export const Submitted = ({ restart }) => (
  <ThankYou>
    <h3>Thank you.</h3>
    <p>You have registered a new employee.</p>
    <Button variant="primary" size="sm" onClick={restart}>
      Register Another Employee
    </Button>
  </ThankYou>
);

const ThankYou = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
