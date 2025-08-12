import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button, Col } from "@govtechsg/sgds-react";

export const Submitted = () => (
  <ThankYou>
    <h3>Thank you.</h3>
    <p>You have registered a new employee.</p>
    <Link to="/signup">
      <Button variant="primary" size="sm">
        Register Another Employee
      </Button>
    </Link>
  </ThankYou>
);

const ThankYou = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
